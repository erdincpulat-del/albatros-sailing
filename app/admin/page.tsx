"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";

type CertificateItem = {
  id: string;
  fullName: string;
  certificateId: string;
  program: string | null;
  qualificationLevel: string | null;
  issueDate: string | null;
  seaMiles: number | null;
  status: string | null;
  photoUrl?: string | null;
  cardFrontUrl?: string | null;
  cardBackUrl?: string | null;
  qrCodeUrl?: string | null;
  verificationHash?: string | null;
  instructor?: {
    id: string;
    fullName: string;
    title: string | null;
  } | null;
};

type AdminLogItem = {
  id: string;
  createdAt: string;
  action: string;
  targetType?: string | null;
  targetId?: string | null;
  details?: string | null;
};

type InstructorItem = {
  id: string;
  fullName: string;
  title: string | null;
};

const programOptions = [
  "Offshore Yacht Course",
  "YELKENLI YAT EGITIMI (YES)",
];

const OFFSHORE_LEVELS = [
  "INTERNATIONAL BAREBOAT SKIPPER",
  "OFFSHORE SKIPPER",
  "YACHTMASTER",
  "COMPETENT CREW",
];

const YES_LEVELS = ["YY1", "YY2", "YY3", "YY4", "YY5", "YY6"];

const YES_LABELS: Record<string, string> = {
  YY1: "Beginner Crew",
  YY2: "Basic Crew",
  YY3: "Intermediate Sailor",
  YY4: "Advanced Sailor",
  YY5: "Skipper Level",
  YY6: "Master Skipper",
};

function normalizeText(value?: string | null) {
  return (value || "").toLocaleLowerCase("tr-TR");
}

function getStatusLabel(status?: string | null) {
  const normalized = (status || "").toUpperCase();

  if (!normalized) return "UNKNOWN";
  if (normalized === "VERIFIED") return "ACTIVE";
  if (normalized === "CANCELLED") return "REVOKED";

  return normalized;
}

function getStatusMeta(status?: string | null) {
  const normalized = getStatusLabel(status);

  if (normalized === "ACTIVE") {
    return {
      label: "ACTIVE",
      color: "#22c55e",
      bg: "rgba(34,197,94,0.16)",
      border: "rgba(34,197,94,0.30)",
    };
  }

  if (normalized === "PENDING") {
    return {
      label: "PENDING",
      color: "#f59e0b",
      bg: "rgba(245,158,11,0.16)",
      border: "rgba(245,158,11,0.30)",
    };
  }

  if (normalized === "REVOKED") {
    return {
      label: "REVOKED",
      color: "#ef4444",
      bg: "rgba(239,68,68,0.16)",
      border: "rgba(239,68,68,0.30)",
    };
  }

  if (normalized === "EXPIRED") {
    return {
      label: "EXPIRED",
      color: "#f97316",
      bg: "rgba(249,115,22,0.16)",
      border: "rgba(249,115,22,0.30)",
    };
  }

  return {
    label: "UNKNOWN",
    color: "#94a3b8",
    bg: "rgba(148,163,184,0.14)",
    border: "rgba(148,163,184,0.24)",
  };
}

function getSecurityMeta(item: CertificateItem) {
  if (!item.verificationHash) {
    return {
      label: "NO HASH",
      color: "#94a3b8",
      bg: "rgba(148,163,184,0.14)",
      border: "rgba(148,163,184,0.24)",
    };
  }

  return {
    label: "HASH STORED",
    color: "#22c55e",
    bg: "rgba(34,197,94,0.16)",
    border: "rgba(34,197,94,0.30)",
  };
}

function formatDate(value?: string | null) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function formatDateTime(value?: string | null) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

async function apiFetch<T = unknown>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(url, {
    credentials: "include",
    cache: "no-store",
    ...options,
  });

  const contentType = res.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    const text = await res.text();

    if (res.status === 401) {
      window.location.href = "/login";
      throw new Error("Unauthorized");
    }

    throw new Error(text || "API JSON response expected");
  }

  const data = await res.json();

  if (res.status === 401) {
    window.location.href = "/login";
    throw new Error("Unauthorized");
  }

  if (!res.ok || !data.success) {
    throw new Error(data.error || "API error");
  }

  return data as T;
}

function getHashPreview(hash?: string | null) {
  if (!hash) return "-";
  if (hash.length <= 12) return hash;
  return `${hash.slice(0, 6)}...${hash.slice(-4)}`;
}

export default function AdminPage() {
  const [fullName, setFullName] = useState("");
  const [program, setProgram] = useState("Offshore Yacht Course");
  const [qualificationLevel, setQualificationLevel] = useState(
    "INTERNATIONAL BAREBOAT SKIPPER"
  );
  const [issueDate, setIssueDate] = useState("");
  const [seaMiles, setSeaMiles] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [printingId, setPrintingId] = useState<string | null>(null);

  const photoInputRef = useRef<HTMLInputElement | null>(null);

  const [items, setItems] = useState<CertificateItem[]>([]);
  const [logs, setLogs] = useState<AdminLogItem[]>([]);
  const [instructors, setInstructors] = useState<InstructorItem[]>([]);

  const [loading, setLoading] = useState(false);
  const [loadingList, setLoadingList] = useState(false);
  const [loadingLogs, setLoadingLogs] = useState(false);
  const [loadingInstructors, setLoadingInstructors] = useState(false);
  const [updatingStatusId, setUpdatingStatusId] = useState<string | null>(null);
  const [selectedInstructorId, setSelectedInstructorId] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [programFilter, setProgramFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const currentQualificationOptions =
    program === "YELKENLI YAT EGITIMI (YES)" ? YES_LEVELS : OFFSHORE_LEVELS;

  async function loadCertificates() {
    try {
      setLoadingList(true);

      const data = await apiFetch<{ success: true; items: CertificateItem[] }>(
        "/api/certificates"
      );

      setItems(data.items || []);
    } catch (error) {
      console.error("Load certificates error:", error);
      setItems([]);
    } finally {
      setLoadingList(false);
    }
  }

  async function loadLogs() {
    try {
      setLoadingLogs(true);

      const data = await apiFetch<{ success: true; items: AdminLogItem[] }>(
        "/api/admin-logs"
      );

      setLogs((data.items || []).slice(0, 10));
    } catch (error) {
      console.error("Load logs error:", error);
      setLogs([]);
    } finally {
      setLoadingLogs(false);
    }
  }

  async function loadInstructors() {
    try {
      setLoadingInstructors(true);

      const data = await apiFetch<{ success: true; items: InstructorItem[] }>(
        "/api/instructors"
      );

      setInstructors(data.items || []);
    } catch (error) {
      console.error("Instructor load error:", error);
      setInstructors([]);
    } finally {
      setLoadingInstructors(false);
    }
  }

  useEffect(() => {
    loadCertificates();
    loadLogs();
    loadInstructors();
  }, []);

  useEffect(() => {
    const options =
      program === "YELKENLI YAT EGITIMI (YES)" ? YES_LEVELS : OFFSHORE_LEVELS;

    if (!options.includes(qualificationLevel)) {
      setQualificationLevel(options[0]);
    }
  }, [program, qualificationLevel]);

  async function updateStatus(id: string, status: string, reason?: string) {
    try {
      setUpdatingStatusId(id);

      const data = await apiFetch<{ success: true }>(
        `/api/certificates/${id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
            reason: reason || null,
          }),
        }
      );

      if (!data.success) {
        alert("Status değiştirilemedi");
        return;
      }

      await loadCertificates();
      await loadLogs();
    } catch (error) {
      console.error("Update status error:", error);
      alert("Status güncellenemedi");
    } finally {
      setUpdatingStatusId(null);
    }
  }

  async function handleLogout() {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      const data = await res.json();

      if (data.success) {
        window.location.href = "/login?message=session-ended";
      } else {
        alert("Çıkış yapılamadı");
      }
    } catch (error) {
      console.error(error);
      alert("Logout sırasında hata oluştu");
    }
  }

  async function createCertificate() {
    try {
      setLoading(true);

      if (!fullName.trim()) {
        alert("Full name gerekli");
        return;
      }

      if (!qualificationLevel.trim()) {
        alert("Qualification level gerekli");
        return;
      }

      if (!selectedInstructorId) {
        alert("Instructor seçmelisin");
        return;
      }

      if (seaMiles && Number(seaMiles) < 0) {
        alert("Sea miles negatif olamaz");
        return;
      }

      let photoUrl: string | null = null;

      if (photo) {
        const photoFormData = new FormData();

        photoFormData.append("file", photo);
        photoFormData.append("folder", "students");

        const photoData = await apiFetch<{ success: true; url: string }>(
          "/api/upload-photo",
          {
            method: "POST",
            body: photoFormData,
          }
        );

        photoUrl = photoData.url;
      }

      const data = await apiFetch<{ success: true }>(
        "/api/certificates/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: fullName.trim(),
            program,
            qualificationLevel,
            issueDate: issueDate || null,
            seaMiles: seaMiles ? Number(seaMiles) : null,
            instructorId: selectedInstructorId,
            photoUrl,
          }),
        }
      );

      if (!data.success) {
        alert("Certificate oluşturulamadı");
        return;
      }

      alert("✅ Certificate oluşturuldu");

      setFullName("");
      setProgram("Offshore Yacht Course");
      setQualificationLevel("INTERNATIONAL BAREBOAT SKIPPER");
      setIssueDate("");
      setSeaMiles("");
      setPhoto(null);
      setSelectedInstructorId("");

      if (photoInputRef.current) {
        photoInputRef.current.value = "";
      }

      await loadCertificates();
      await loadLogs();
    } catch (error) {
      console.error("createCertificate error:", error);
      alert(error instanceof Error ? error.message : "Beklenmeyen bir hata oluştu");
    } finally {
      setLoading(false);
    }
  }

  async function copyVerifyLink(certificateId: string) {
    try {
      const verifyUrl = `${window.location.origin}/verify/${encodeURIComponent(
        certificateId
      )}`;
      await navigator.clipboard.writeText(verifyUrl);
      alert("Verify link kopyalandı");
    } catch (error) {
      console.error(error);
      alert("Verify link kopyalanamadı");
    }
  }

  async function printCard(certificateId: string) {
    try {
      setPrintingId(certificateId);

      const res = await fetch("/api/certificates/print-card", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          certificateId,
        }),
      });

      if (res.status === 401) {
        window.location.href = "/login";
        return;
      }

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Print error");
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      window.open(url, "_blank");
    } catch (error) {
      console.error("Print card error:", error);
      alert(error instanceof Error ? error.message : "Print error");
    } finally {
      setPrintingId(null);
    }
  }

  function scrollToCreateForm() {
    const target = document.getElementById("create-certificate-section");

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function openLatestVerify() {
    if (!items.length) {
      alert("Henüz sertifika kaydı yok");
      return;
    }

    window.open(`/verify/${encodeURIComponent(items[0].certificateId)}`, "_blank");
  }

  const filteredItems = useMemo(() => {
    const term = normalizeText(searchTerm);

    return items.filter((item) => {
      const matchesSearch =
        !term ||
        normalizeText(item.fullName).includes(term) ||
        normalizeText(item.certificateId).includes(term) ||
        normalizeText(item.program).includes(term) ||
        normalizeText(item.qualificationLevel).includes(term) ||
        normalizeText(item.instructor?.fullName).includes(term);

      const matchesProgram =
        programFilter === "ALL" || item.program === programFilter;

      const matchesStatus =
        statusFilter === "ALL" ||
        getStatusLabel(item.status) === statusFilter.toUpperCase();

      return matchesSearch && matchesProgram && matchesStatus;
    });
  }, [items, programFilter, searchTerm, statusFilter]);

  const counts = useMemo(() => {
    return {
      total: items.length,
      filtered: filteredItems.length,
      active: items.filter((item) => getStatusLabel(item.status) === "ACTIVE")
        .length,
      pending: items.filter((item) => getStatusLabel(item.status) === "PENDING")
        .length,
      revoked: items.filter((item) => getStatusLabel(item.status) === "REVOKED")
        .length,
      hashed: items.filter((item) => !!item.verificationHash).length,
    };
  }, [items, filteredItems]);

  const systemStatus = loadingList || loadingLogs ? "SYNCING" : "ONLINE";

  return (
    <main style={pageStyle}>
      <section style={heroSectionStyle}>
        <div style={heroTopStyle}>
          <div>
            <div style={heroEyebrowStyle}>Albatros Sailing</div>
            <h1 style={heroTitleStyle}>Admin Control Panel</h1>
            <p style={heroTextStyle}>
              Sertifika üretimi, doğrulama, PDF işlemleri, durum yönetimi ve
              audit kayıtları tek panelden kontrol edilir.
            </p>
          </div>

          <div style={heroStatsWrapStyle}>
            <TopStatusCard label="System" value={systemStatus} />
            <TopStatusCard label="Records" value={String(counts.total)} />
            <TopStatusCard label="Active" value={String(counts.active)} />
          </div>
        </div>

        <div style={heroButtonsRowStyle}>
          <button onClick={scrollToCreateForm} style={heroPrimaryButtonStyle}>
            Quick Create
          </button>

          <button onClick={loadCertificates} style={heroSecondaryButtonStyle}>
            {loadingList ? "Refreshing..." : "Refresh Data"}
          </button>

          <button onClick={openLatestVerify} style={heroSecondaryButtonStyle}>
            Open Latest Verify
          </button>

          <button onClick={handleLogout} style={heroDangerButtonStyle}>
            Logout
          </button>
        </div>
      </section>

      <section id="create-certificate-section" style={panelStyle}>
        <h2 style={panelTitleStyle}>Create Certificate</h2>

        <div style={formGridStyle}>
          <div>
            <label style={labelStyle}>Full Name</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Student full name"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Program</label>
            <select
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              style={inputStyle}
            >
              {programOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={labelStyle}>Qualification Level</label>
            <select
              value={qualificationLevel}
              onChange={(e) => setQualificationLevel(e.target.value)}
              style={inputStyle}
            >
              {currentQualificationOptions.map((level) => (
                <option key={level} value={level}>
                  {YES_LABELS[level] ? `${level} - ${YES_LABELS[level]}` : level}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={labelStyle}>Issue Date</label>
            <input
              type="date"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Sea Miles</label>
            <input
              type="number"
              value={seaMiles}
              onChange={(e) => setSeaMiles(e.target.value)}
              placeholder="890"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Student Photo</label>
            <input
              ref={photoInputRef}
              id="student-photo-input"
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files?.[0] || null)}
              style={inputStyle}
            />

            {photo ? (
              <div style={{ marginTop: 10 }}>
                <img
                  src={URL.createObjectURL(photo)}
                  alt="Preview"
                  style={{
                    width: 100,
                    height: 120,
                    objectFit: "cover",
                    borderRadius: 10,
                    border: "1px solid rgba(148,163,184,0.18)",
                    background: "#0f172a",
                  }}
                />
              </div>
            ) : null}
          </div>

          <div>
            <label style={labelStyle}>Instructor</label>
            <select
              value={selectedInstructorId}
              onChange={(e) => setSelectedInstructorId(e.target.value)}
              style={inputStyle}
            >
              <option value="">
                {loadingInstructors ? "Loading instructors..." : "Instructor seç"}
              </option>

              {instructors.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.fullName}
                  {item.title ? ` - ${item.title}` : ""}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <button
            onClick={createCertificate}
            disabled={loading}
            style={primaryButtonStyle}
          >
            {loading ? "Creating..." : "Create Certificate"}
          </button>
        </div>
      </section>

      <section style={panelStyle}>
        <div style={filtersGridStyle}>
          <div>
            <label style={labelStyle}>Search</label>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="isim, ID, program, seviye ara"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Program Filter</label>
            <select
              value={programFilter}
              onChange={(e) => setProgramFilter(e.target.value)}
              style={inputStyle}
            >
              <option value="ALL">All Programs</option>

              {programOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={labelStyle}>Status Filter</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={inputStyle}
            >
              <option value="ALL">All Statuses</option>
              <option value="ACTIVE">ACTIVE</option>
              <option value="PENDING">PENDING</option>
              <option value="REVOKED">REVOKED</option>
              <option value="EXPIRED">EXPIRED</option>
              <option value="UNKNOWN">UNKNOWN</option>
            </select>
          </div>

          <button onClick={loadCertificates} style={secondaryButtonStyle}>
            {loadingList ? "Refreshing..." : "Refresh List"}
          </button>
        </div>

        <div style={summaryWrapStyle}>
          <SummaryBadge label="Total" value={counts.total} />
          <SummaryBadge label="Filtered" value={counts.filtered} />
          <SummaryBadge label="Active" value={counts.active} />
          <SummaryBadge label="Pending" value={counts.pending} />
          <SummaryBadge label="Revoked" value={counts.revoked} />
          <SummaryBadge label="Hashed" value={counts.hashed} />
        </div>
      </section>

      <section style={panelStyle}>
        <div style={sectionHeaderStyle}>
          <h2 style={panelTitleStyle}>Activity Log</h2>

          <button onClick={loadLogs} style={secondaryButtonStyle}>
            {loadingLogs ? "Refreshing..." : "Refresh Logs"}
          </button>
        </div>

        {logs.length === 0 && !loadingLogs ? (
          <p style={emptyTextStyle}>Henüz log kaydı yok.</p>
        ) : (
          <div style={{ display: "grid", gap: 12 }}>
            {logs.map((log) => {
              let parsed: Record<string, string> | null = null;

              try {
                parsed = log.details ? JSON.parse(log.details) : null;
              } catch {
                parsed = null;
              }

              return (
                <div key={log.id} style={logCardStyle}>
                  <div style={logTopStyle}>
                    <strong style={{ color: "#38bdf8" }}>{log.action}</strong>

                    <span style={logTimeStyle}>
                      {formatDateTime(log.createdAt)}
                    </span>
                  </div>

                  <div style={logContentStyle}>
                    <div>
                      <strong>Target:</strong> {log.targetType || "-"}
                    </div>

                    <div>
                      <strong>ID:</strong> {log.targetId || "-"}
                    </div>

                    {parsed?.fullName ? (
                      <div>
                        <strong>Name:</strong> {parsed.fullName}
                      </div>
                    ) : null}

                    {parsed?.certificateId ? (
                      <div>
                        <strong>Certificate:</strong> {parsed.certificateId}
                      </div>
                    ) : null}

                    {parsed?.newStatus ? (
                      <div>
                        <strong>Status:</strong> {parsed.newStatus}
                      </div>
                    ) : null}

                    {parsed?.revokeReason ? (
                      <div style={{ color: "#f87171" }}>
                        <strong>Reason:</strong> {parsed.revokeReason}
                      </div>
                    ) : null}

                    {!parsed && log.details ? (
                      <div>
                        <strong>Details:</strong> {log.details}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section style={panelStyle}>
        <div style={sectionHeaderStyle}>
          <h2 style={panelTitleStyle}>Certificates</h2>
          <div style={sectionMetaTextStyle}>
            {counts.filtered} kayıt gösteriliyor
          </div>
        </div>

        {filteredItems.length === 0 && !loadingList ? (
          <p style={emptyTextStyle}>No matching certificate records found.</p>
        ) : null}

        <div style={{ display: "grid", gap: 20 }}>
          {filteredItems.map((item) => {
            const statusMeta = getStatusMeta(item.status);
            const securityMeta = getSecurityMeta(item);
            const currentStatus = getStatusLabel(item.status);
            const isRevoked = currentStatus === "REVOKED";
            const isUpdating = updatingStatusId === item.id;

            return (
              <div key={item.id} style={certificateCardStyle}>
                <div style={certificateTopStyle}>
                  <div>
                    <div style={badgesRowStyle}>
                      <h3 style={cardTitleStyle}>{item.fullName}</h3>

                      <StatusBadge
                        label={statusMeta.label}
                        color={statusMeta.color}
                        bg={statusMeta.bg}
                        border={statusMeta.border}
                      />

                      <StatusBadge
                        label={securityMeta.label}
                        color={securityMeta.color}
                        bg={securityMeta.bg}
                        border={securityMeta.border}
                      />
                    </div>

                    <div style={detailsGridStyle}>
                      <DetailRow label="ID" value={item.certificateId} />
                      <DetailRow label="Program" value={item.program || "-"} />
                      <DetailRow
                        label="Level"
                        value={item.qualificationLevel || "-"}
                      />
                      <DetailRow
                        label="Issue Date"
                        value={formatDate(item.issueDate)}
                      />
                      <DetailRow
                        label="Sea Miles"
                        value={
                          typeof item.seaMiles === "number"
                            ? `${item.seaMiles} NM`
                            : "-"
                        }
                      />
                      <DetailRow label="Status" value={currentStatus} />
                      <DetailRow
                        label="Instructor"
                        value={item.instructor?.fullName || "-"}
                      />
                      <DetailRow
                        label="Verification Hash"
                        value={getHashPreview(item.verificationHash)}
                      />
                    </div>
                  </div>

                  {item.photoUrl ? (
                    <img
                      src={item.photoUrl}
                      alt={item.fullName}
                      style={photoStyle}
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder-user.png";
                      }}
                    />
                  ) : null}
                </div>

                <div style={buttonsWrapStyle}>
                  {item.cardFrontUrl ? (
                    <button
                      onClick={() => window.open(item.cardFrontUrl!, "_blank")}
                      style={secondaryButtonStyle}
                    >
                      Open Card Front
                    </button>
                  ) : null}

                  {item.cardBackUrl ? (
                    <button
                      onClick={() => window.open(item.cardBackUrl!, "_blank")}
                      style={secondaryButtonStyle}
                    >
                      Open Card Back
                    </button>
                  ) : null}

                  <button
                    onClick={() =>
                      window.open(
                        `/verify/${encodeURIComponent(item.certificateId)}`,
                        "_blank"
                      )
                    }
                    style={secondaryButtonStyle}
                  >
                    Open Verify Page
                  </button>

                  <button
                    onClick={() => copyVerifyLink(item.certificateId)}
                    style={secondaryButtonStyle}
                  >
                    Copy Verify Link
                  </button>

                  <button
                    onClick={() => printCard(item.certificateId)}
                    disabled={printingId === item.certificateId}
                    style={secondaryButtonStyle}
                  >
                    {printingId === item.certificateId
                      ? "Printing..."
                      : "Print Card"}
                  </button>

                  <button
                    onClick={() =>
                      window.open(
                        `/api/certificates/export-certificate-pdf?certificateId=${encodeURIComponent(
                          item.certificateId
                        )}`,
                        "_blank"
                      )
                    }
                    style={primaryButtonStyle}
                  >
                    Download A4 Certificate
                  </button>

                  <button
                    onClick={() => updateStatus(item.id, "ACTIVE")}
                    disabled={isUpdating || currentStatus === "ACTIVE"}
                    style={{
                      ...statusActionButtonStyle,
                      border: "1px solid #22c55e",
                      background:
                        currentStatus === "ACTIVE"
                          ? "rgba(34,197,94,0.10)"
                          : "rgba(34,197,94,0.16)",
                      color: "#22c55e",
                      opacity: isUpdating || currentStatus === "ACTIVE" ? 0.7 : 1,
                    }}
                  >
                    {isUpdating ? "Updating..." : "Set Active"}
                  </button>

                  <button
                    onClick={() => updateStatus(item.id, "EXPIRED")}
                    disabled={isUpdating || currentStatus === "EXPIRED"}
                    style={warningButtonStyle}
                  >
                    Expire
                  </button>

                  <button
                    onClick={() => {
                      if (isRevoked) {
                        updateStatus(item.id, "ACTIVE");
                        return;
                      }

                      const reason = window.prompt(
                        "Revoke nedeni girin",
                        "Manual revoke"
                      );

                      if (!reason || !reason.trim()) return;

                      updateStatus(item.id, "REVOKED", reason.trim());
                    }}
                    disabled={isUpdating}
                    style={{
                      ...statusActionButtonStyle,
                      border: isRevoked
                        ? "1px solid #22c55e"
                        : "1px solid #ef4444",
                      background: isRevoked
                        ? "rgba(34,197,94,0.16)"
                        : "rgba(239,68,68,0.16)",
                      color: isRevoked ? "#22c55e" : "#ef4444",
                      opacity: isUpdating ? 0.7 : 1,
                    }}
                  >
                    {isUpdating
                      ? "Updating..."
                      : isRevoked
                      ? "Restore Certificate"
                      : "Revoke Certificate"}
                  </button>
                </div>

                {(item.cardFrontUrl || item.cardBackUrl) && (
                  <div style={previewGridStyle}>
                    <div>
                      <div style={previewTitleStyle}>Front Side</div>
                      <div style={previewBoxStyle}>
                        {item.cardFrontUrl ? (
                          <img
                            src={item.cardFrontUrl}
                            alt="Card front"
                            style={previewImageStyle}
                            onError={(e) => {
                              e.currentTarget.src = "/placeholder-card.png";
                            }}
                          />
                        ) : (
                          <div style={emptyPreviewStyle}>Front yok</div>
                        )}
                      </div>
                    </div>

                    <div>
                      <div style={previewTitleStyle}>Back Side</div>
                      <div style={previewBoxStyle}>
                        {item.cardBackUrl ? (
                          <img
                            src={item.cardBackUrl}
                            alt="Card back"
                            style={previewImageStyle}
                            onError={(e) => {
                              e.currentTarget.src = "/placeholder-card.png";
                            }}
                          />
                        ) : (
                          <div style={emptyPreviewStyle}>Back yok</div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function TopStatusCard({ label, value }: { label: string; value: string }) {
  return (
    <div style={topStatusCardStyle}>
      <div style={topStatusLabelStyle}>{label}</div>
      <div style={topStatusValueStyle}>{value}</div>
    </div>
  );
}

function SummaryBadge({ label, value }: { label: string; value: number }) {
  return (
    <div style={summaryBadgeStyle}>
      <strong>{label}:</strong> {value}
    </div>
  );
}

function StatusBadge({
  label,
  color,
  bg,
  border,
}: {
  label: string;
  color: string;
  bg: string;
  border: string;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 12px",
        borderRadius: 999,
        background: bg,
        border: `1px solid ${border}`,
        color,
        fontWeight: 700,
        fontSize: 12,
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: color,
          display: "inline-block",
        }}
      />
      {label}
    </span>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={detailBoxStyle}>
      <div style={detailLabelStyle}>{label}</div>
      <div style={detailValueStyle}>{value}</div>
    </div>
  );
}

const pageStyle: CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: 24,
  fontFamily: "Arial, sans-serif",
  background:
    "radial-gradient(circle at top, #12253f 0%, #0b1220 38%, #070c14 100%)",
  minHeight: "100vh",
  color: "#e2e8f0",
};

const heroSectionStyle: CSSProperties = {
  border: "1px solid rgba(148,163,184,0.18)",
  borderRadius: 24,
  padding: 24,
  marginBottom: 28,
  background: "linear-gradient(135deg, #0b2742 0%, #102f52 55%, #143d69 100%)",
  color: "#fff",
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
};

const heroTopStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 16,
  flexWrap: "wrap",
  marginBottom: 18,
};

const heroEyebrowStyle: CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: 1.3,
  textTransform: "uppercase",
  color: "#cbd5e1",
  marginBottom: 8,
};

const heroTitleStyle: CSSProperties = {
  margin: 0,
  fontSize: 30,
  lineHeight: 1.1,
};

const heroTextStyle: CSSProperties = {
  margin: "10px 0 0",
  color: "#dbe7f3",
  maxWidth: 720,
  lineHeight: 1.6,
};

const heroStatsWrapStyle: CSSProperties = {
  display: "flex",
  gap: 10,
  flexWrap: "wrap",
};

const heroButtonsRowStyle: CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
};

const panelStyle: CSSProperties = {
  border: "1px solid rgba(148,163,184,0.16)",
  borderRadius: 20,
  padding: 20,
  marginBottom: 24,
  background: "rgba(15,23,42,0.88)",
  backdropFilter: "blur(6px)",
  boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
};

const panelTitleStyle: CSSProperties = {
  margin: 0,
  color: "#f8fafc",
  fontSize: 22,
};

const formGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 16,
  marginTop: 18,
};

const filtersGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr 1fr auto",
  gap: 14,
  alignItems: "end",
};

const summaryWrapStyle: CSSProperties = {
  marginTop: 18,
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
};

const sectionHeaderStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 12,
  flexWrap: "wrap",
  marginBottom: 16,
};

const sectionMetaTextStyle: CSSProperties = {
  color: "#94a3b8",
  fontSize: 14,
};

const logCardStyle: CSSProperties = {
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 14,
  padding: 14,
  background: "rgba(30,41,59,0.6)",
};

const logTopStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: 12,
  flexWrap: "wrap",
  marginBottom: 8,
};

const logTimeStyle: CSSProperties = {
  color: "#94a3b8",
  fontSize: 13,
};

const logContentStyle: CSSProperties = {
  fontSize: 14,
  color: "#cbd5e1",
  lineHeight: 1.6,
};

const certificateCardStyle: CSSProperties = {
  border: "1px solid rgba(148,163,184,0.16)",
  borderRadius: 20,
  padding: 20,
  background: "rgba(15,23,42,0.9)",
  boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
};

const certificateTopStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: 16,
  alignItems: "start",
};

const badgesRowStyle: CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  alignItems: "center",
  marginBottom: 14,
};

const cardTitleStyle: CSSProperties = {
  margin: 0,
  color: "#f8fafc",
  fontSize: 22,
};

const detailsGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 12,
};

const detailBoxStyle: CSSProperties = {
  border: "1px solid rgba(148,163,184,0.12)",
  borderRadius: 12,
  padding: "12px 14px",
  background: "rgba(30,41,59,0.55)",
};

const detailLabelStyle: CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: "#94a3b8",
  letterSpacing: 1,
  textTransform: "uppercase",
  marginBottom: 8,
};

const detailValueStyle: CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
  color: "#e2e8f0",
  lineHeight: 1.5,
  wordBreak: "break-word",
};

const buttonsWrapStyle: CSSProperties = {
  marginTop: 18,
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
};

const previewGridStyle: CSSProperties = {
  marginTop: 20,
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 18,
};

const photoStyle: CSSProperties = {
  width: 120,
  height: 150,
  objectFit: "cover",
  borderRadius: 12,
  border: "1px solid rgba(148,163,184,0.18)",
  background: "#0f172a",
};

const topStatusCardStyle: CSSProperties = {
  minWidth: 110,
  padding: "12px 14px",
  borderRadius: 14,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const topStatusLabelStyle: CSSProperties = {
  fontSize: 11,
  color: "#cbd5e1",
  textTransform: "uppercase",
  letterSpacing: 1,
  marginBottom: 6,
  fontWeight: 700,
};

const topStatusValueStyle: CSSProperties = {
  fontSize: 16,
  color: "#ffffff",
  fontWeight: 700,
};

const summaryBadgeStyle: CSSProperties = {
  padding: "10px 14px",
  borderRadius: 12,
  background: "rgba(30,41,59,0.7)",
  border: "1px solid rgba(148,163,184,0.16)",
  fontSize: 14,
  color: "#e2e8f0",
};

const labelStyle: CSSProperties = {
  display: "block",
  marginBottom: 8,
  fontWeight: 700,
  fontSize: 14,
  color: "#cbd5e1",
};

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(148,163,184,0.22)",
  background: "rgba(15,23,42,0.75)",
  color: "#f8fafc",
  fontSize: 14,
  boxSizing: "border-box",
};

const primaryButtonStyle: CSSProperties = {
  padding: "12px 16px",
  borderRadius: 12,
  border: "none",
  background: "#0ea5e9",
  color: "#fff",
  cursor: "pointer",
  fontWeight: 700,
};

const secondaryButtonStyle: CSSProperties = {
  padding: "12px 16px",
  borderRadius: 12,
  border: "1px solid rgba(148,163,184,0.18)",
  background: "rgba(30,41,59,0.7)",
  color: "#f8fafc",
  cursor: "pointer",
  fontWeight: 700,
};

const warningButtonStyle: CSSProperties = {
  padding: "12px 16px",
  borderRadius: 12,
  border: "1px solid rgba(249,115,22,0.45)",
  background: "rgba(249,115,22,0.16)",
  color: "#fb923c",
  cursor: "pointer",
  fontWeight: 700,
};

const heroPrimaryButtonStyle: CSSProperties = {
  padding: "12px 16px",
  borderRadius: 12,
  border: "none",
  background: "#ffffff",
  color: "#0b2742",
  cursor: "pointer",
  fontWeight: 700,
};

const heroSecondaryButtonStyle: CSSProperties = {
  padding: "12px 16px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(255,255,255,0.08)",
  color: "#ffffff",
  cursor: "pointer",
  fontWeight: 700,
};

const heroDangerButtonStyle: CSSProperties = {
  padding: "12px 16px",
  borderRadius: 12,
  border: "1px solid rgba(254,202,202,0.28)",
  background: "rgba(127,29,29,0.25)",
  color: "#fecaca",
  cursor: "pointer",
  fontWeight: 700,
};

const statusActionButtonStyle: CSSProperties = {
  padding: "12px 16px",
  borderRadius: 12,
  cursor: "pointer",
  fontWeight: 700,
  background: "transparent",
};

const previewTitleStyle: CSSProperties = {
  marginBottom: 8,
  fontWeight: 700,
  fontSize: 14,
  color: "#e2e8f0",
};

const previewBoxStyle: CSSProperties = {
  border: "1px solid rgba(148,163,184,0.16)",
  borderRadius: 12,
  padding: 10,
  background: "rgba(15,23,42,0.72)",
  minHeight: 180,
  display: "grid",
  placeItems: "center",
};

const previewImageStyle: CSSProperties = {
  width: "100%",
  height: "auto",
  objectFit: "contain",
  borderRadius: 8,
};

const emptyPreviewStyle: CSSProperties = {
  color: "#94a3b8",
  fontSize: 14,
};

const emptyTextStyle: CSSProperties = {
  margin: 0,
  color: "#94a3b8",
};