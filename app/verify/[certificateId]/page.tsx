
import { notFound } from "next/navigation";
import Image from "next/image";
import prisma from "@/lib/prisma";
import { generateVerificationHash } from "@/lib/generate-verification-hash";
import ScanFrame from "@/components/verify/ScanFrame";

type VerifyPageProps = {
  params: Promise<{
    certificateId: string;
  }>;
};

function normalizeStatus(status?: string | null) {
  const normalized = (status || "ACTIVE").toUpperCase();

  if (normalized === "REVOKED" || normalized === "CANCELLED") return "REVOKED";
  if (normalized === "PENDING") return "PENDING";
  return "ACTIVE";
}

function getTrustScore(input: {
  hasFullName: boolean;
  hasCertificateId: boolean;
  hasQualification: boolean;
  hasIssueDate: boolean;
  hasVerificationHash: boolean;
  hashMatches: boolean;
  hasFrontCard: boolean;
  hasBackCard: boolean;
  isRevoked: boolean;
}) {
  if (input.isRevoked) return 12;

  let score = 35;

  if (input.hasFullName) score += 10;
  if (input.hasCertificateId) score += 10;
  if (input.hasQualification) score += 10;
  if (input.hasIssueDate) score += 8;
  if (input.hasVerificationHash) score += 8;
  if (input.hashMatches) score += 12;
  if (input.hasFrontCard) score += 4;
  if (input.hasBackCard) score += 3;

  return Math.min(score, 100);
}

function formatDate(dateValue?: Date | string | null) {
  if (!dateValue) return "—";

  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return "—";

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export default async function VerifyCertificatePage({
  params,
}: VerifyPageProps) {
  const { certificateId } = await params;

  const cleanId = decodeURIComponent(certificateId).trim();

  if (!cleanId) {
    notFound();
  }

  const certificate = await prisma.certificate.findUnique({
    where: {
      certificateId: cleanId,
    },
    include: {
      instructor: {
        select: {
          fullName: true,
          title: true,
        },
      },
    },
  });

  if (!certificate) {
  return (
    <main style={styles.page}>
      <ScanFrame>
        <section style={styles.card}>
          <div style={styles.scanLine} />
          <div style={styles.securityGlow} />
          <div style={styles.hologram} />

          <div style={styles.notFoundWrap}>
            <div style={styles.notFoundEyebrow}>
              Verification Failed
            </div>

            <h1 style={styles.notFoundTitle}>
              Certificate Not Found
            </h1>

            <p style={styles.notFoundText}>
              The requested certificate could not be located in the Albatros Sailing registry.
            </p>
          </div>
        </section>
      </ScanFrame>
    </main>
  );
}

  const status = normalizeStatus(certificate.status);
  const isActive = status === "ACTIVE";
  const isRevoked = status === "REVOKED";
  const isPending = status === "PENDING";

  const regeneratedHash =
    certificate.verificationHash && certificate.certificateId
      ? generateVerificationHash(certificate.certificateId)
      : null;

  const hashMatches =
    !!certificate.verificationHash &&
    !!regeneratedHash &&
    certificate.verificationHash === regeneratedHash;

  const trustScore = getTrustScore({
    hasFullName: !!certificate.fullName,
    hasCertificateId: !!certificate.certificateId,
    hasQualification: !!certificate.qualificationLevel || !!certificate.program,
    hasIssueDate: !!certificate.issueDate,
    hasVerificationHash: !!certificate.verificationHash,
    hashMatches,
    hasFrontCard: !!certificate.cardFrontUrl,
    hasBackCard: !!certificate.cardBackUrl,
    isRevoked,
  });

  const statusText = isActive
    ? "LIVE VERIFIED RECORD"
    : isRevoked
      ? "REVOKED / INVALID"
      : "PENDING REVIEW";

  const statusColor = isActive
    ? "#22c55e"
    : isRevoked
      ? "#ef4444"
      : "#f59e0b";

  const trustLabel =
    trustScore >= 90
      ? "High Trust"
      : trustScore >= 70
        ? "Verified"
        : trustScore >= 40
          ? "Moderate"
          : "Low Trust";

  const pdfDownloadUrl = `/api/certificates/export-certificate-pdf?certificateId=${encodeURIComponent(
    certificate.certificateId
  )}`;

  return (
    <main style={styles.page}>
      {styleTag}

      <section style={styles.card}>
        <div style={styles.scanLine} />
        <div
          style={{
            ...styles.securityGlow,
            ...(isActive
              ? styles.securityGlowActive
              : isRevoked
                ? styles.securityGlowRevoked
                : styles.securityGlowPending),
          }}
        />
        <div style={styles.hologram} />
        <div style={styles.securityGrid} />
        <div style={styles.watermark}>ALBATROS SAILING</div>

        <div style={styles.topBar}>
          <div>
            <div style={styles.eyebrow}>Official Verification Portal</div>
            <h1 style={styles.title}>Certificate Verification</h1>
          </div>

          <div
            style={{
              ...styles.statusBadgeWrap,
              ...(isActive && styles.pulse),
              ...(isRevoked && styles.pulseRed),
              ...(isPending && styles.pulseAmber),
            }}
          >
            <div
              style={{
                ...styles.statusHalo,
                background: isActive
                  ? "radial-gradient(circle, rgba(34,197,94,0.22), transparent 70%)"
                  : isRevoked
                    ? "radial-gradient(circle, rgba(239,68,68,0.18), transparent 70%)"
                    : "radial-gradient(circle, rgba(245,158,11,0.18), transparent 70%)",
              }}
            />
            <span
              style={{
                ...styles.liveDot,
                background: statusColor,
                boxShadow: `0 0 12px ${statusColor}`,
              }}
            />
            <span
              style={{
                ...styles.statusIcon,
                color: statusColor,
              }}
            >
              {isActive ? "✓" : isRevoked ? "✕" : "•"}
            </span>
            <span style={styles.statusText}>{statusText}</span>
          </div>
        </div>

        <div style={styles.infoGrid} className="verify-grid">
          <div style={styles.infoCard}>
            <div style={styles.infoLabel}>Certificate Holder</div>
            <div style={styles.infoValueLarge}>
              {certificate.fullName || "—"}
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.infoLabel}>Certificate ID</div>
            <div style={styles.infoValue}>{certificate.certificateId}</div>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.infoLabel}>Qualification</div>
            <div style={styles.infoValue}>
              {certificate.qualificationLevel || certificate.program || "—"}
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.infoLabel}>Issue Date</div>
            <div style={styles.infoValue}>
              {formatDate(certificate.issueDate)}
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.infoLabel}>Instructor</div>
            <div style={styles.infoValue}>
              {certificate.instructor?.fullName || "Erdinç Pulat"}
            </div>
            <div style={styles.infoSubValue}>
              {certificate.instructor?.title || "Official Sailing Instructor"}
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.infoLabel}>Trust Score</div>
            <div style={styles.trustWrap}>
              <div style={styles.trustScoreLine}>
                <div style={styles.trustScoreNumber}>{trustScore}</div>
                <div style={styles.trustScoreMeta}>/ 100</div>
              </div>
              <div style={styles.trustLabel}>{trustLabel}</div>
              <div style={styles.trustBar}>
                <div
                  style={{
                    ...styles.trustBarFill,
                    width: `${trustScore}%`,
                    background: isRevoked
                      ? "linear-gradient(90deg, rgba(239,68,68,0.8), rgba(248,113,113,0.95))"
                      : trustScore >= 85
                        ? "linear-gradient(90deg, rgba(34,197,94,0.8), rgba(74,222,128,0.95))"
                        : trustScore >= 60
                          ? "linear-gradient(90deg, rgba(245,158,11,0.8), rgba(251,191,36,0.95))"
                          : "linear-gradient(90deg, rgba(148,163,184,0.8), rgba(203,213,225,0.95))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div style={styles.securityRow}>
          <div style={styles.securityCard}>
            <div style={styles.securityLabel}>Registry Integrity</div>
            <div
              style={{
                ...styles.securityValue,
                color: hashMatches ? "#22c55e" : "#f59e0b",
              }}
            >
              {hashMatches ? "HASH VERIFIED" : "HASH NOT CONFIRMED"}
            </div>
          </div>

          <div style={styles.securityCard}>
            <div style={styles.securityLabel}>Security Code</div>
            <div style={styles.securityValue}>
              {String(
                certificate.verificationHash || regeneratedHash || "N/A"
              )
                .slice(0, 10)
                .toUpperCase()}
            </div>
          </div>

          <div style={styles.securityCard}>
            <div style={styles.securityLabel}>Document Status</div>
            <div
              style={{
                ...styles.securityValue,
                color: statusColor,
              }}
            >
              {status}
            </div>
          </div>
        </div>

        {(certificate.cardFrontUrl || certificate.cardBackUrl) && (
          <section style={styles.previewSection}>
            <div style={styles.previewTitle}>Certificate Card Preview</div>

            <div style={styles.previewGrid} className="verify-preview-grid">
              {certificate.cardFrontUrl && (
                <div style={styles.previewCard}>
                  <div style={styles.previewLabel}>Front Side</div>
                  <Image
                    src={certificate.cardFrontUrl}
                    alt="Certificate card front"
                    width={620}
                    height={390}
                    style={styles.previewImage}
                  />
                </div>
              )}

              {certificate.cardBackUrl && (
                <div style={styles.previewCard}>
                  <div style={styles.previewLabel}>Back Side</div>
                  <Image
                    src={certificate.cardBackUrl}
                    alt="Certificate card back"
                    width={620}
                    height={390}
                    style={styles.previewImage}
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {isActive && (
          <>
            <div style={styles.downloadWrap}>
              <a
                href={pdfDownloadUrl}
                target="_blank"
                rel="noreferrer"
                style={styles.downloadButton}
              >
                <span style={styles.downloadGlow} />
                <span style={styles.downloadIcon}>↓</span>
                <span>Certificate PDF İndir</span>
              </a>
            </div>

            <div style={styles.downloadSubtext}>
              You can download the official PDF certificate for this verified
              record.
            </div>
          </>
        )}

        <div style={styles.bottomTrustNote}>
          This certificate record is validated against the official Albatros
          Sailing registry and presented through the secure verification portal.
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, rgba(14,165,233,0.10), transparent 28%), linear-gradient(180deg, #07111d 0%, #0b1624 45%, #08111c 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "48px 20px",
    color: "#ffffff",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },

  card: {
    position: "relative",
    width: "100%",
    maxWidth: 1180,
    background:
      "linear-gradient(180deg, rgba(15,23,42,0.92), rgba(2,6,23,0.96))",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 28,
    overflow: "hidden",
    boxShadow:
      "0 30px 80px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.04)",
    padding: 28,
    backdropFilter: "blur(14px)",
  },

  topBar: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 16,
    flexWrap: "wrap",
    marginBottom: 24,
  },

  eyebrow: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "rgba(103,232,249,0.82)",
    marginBottom: 10,
  },

  title: {
    margin: 0,
    fontSize: 34,
    lineHeight: 1.1,
    fontWeight: 800,
    color: "#ffffff",
  },

  statusBadgeWrap: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "11px 16px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.10)",
    overflow: "hidden",
    backdropFilter: "blur(8px)",
  },

  statusHalo: {
    position: "absolute",
    inset: 0,
    borderRadius: 999,
    opacity: 0.55,
    pointerEvents: "none",
  },

  liveDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    flexShrink: 0,
    animation: "liveBlink 1.6s ease-in-out infinite",
  },

  statusIcon: {
    fontSize: 14,
    fontWeight: 700,
    animation: "iconPop 0.4s ease",
  },

  statusText: {
    position: "relative",
    zIndex: 1,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.08em",
    color: "rgba(255,255,255,0.95)",
  },

  infoGrid: {
    position: "relative",
    zIndex: 2,
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 14,
    marginBottom: 18,
  },

  infoCard: {
    borderRadius: 18,
    padding: 18,
    background: "rgba(255,255,255,0.035)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
  },

  infoLabel: {
    fontSize: 11,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.48)",
    marginBottom: 8,
    fontWeight: 700,
  },

  infoValueLarge: {
    fontSize: 24,
    lineHeight: 1.15,
    fontWeight: 800,
    color: "#ffffff",
  },

  infoValue: {
    fontSize: 15,
    lineHeight: 1.35,
    fontWeight: 700,
    color: "#ffffff",
  },

  infoSubValue: {
    marginTop: 6,
    fontSize: 12,
    color: "rgba(255,255,255,0.58)",
  },

  trustWrap: {
    marginTop: 2,
  },

  trustScoreLine: {
    display: "flex",
    alignItems: "flex-end",
    gap: 6,
    marginBottom: 4,
  },

  trustScoreNumber: {
    fontSize: 30,
    fontWeight: 800,
    lineHeight: 1,
    color: "#ffffff",
  },

  trustScoreMeta: {
    fontSize: 13,
    color: "rgba(255,255,255,0.55)",
    paddingBottom: 4,
  },

  trustLabel: {
    fontSize: 12,
    fontWeight: 700,
    color: "rgba(103,232,249,0.85)",
    marginBottom: 10,
  },

  trustBar: {
    width: "100%",
    height: 10,
    borderRadius: 999,
    background: "rgba(255,255,255,0.08)",
    overflow: "hidden",
    boxShadow: "inset 0 1px 2px rgba(0,0,0,0.35)",
  },

  trustBarFill: {
    height: "100%",
    borderRadius: 999,
    boxShadow: "0 0 24px rgba(255,255,255,0.18)",
  },

  securityRow: {
    position: "relative",
    zIndex: 2,
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 14,
    marginBottom: 22,
  },

  securityCard: {
    borderRadius: 16,
    padding: 16,
    background: "rgba(14,165,233,0.05)",
    border: "1px solid rgba(103,232,249,0.12)",
  },

  securityLabel: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.48)",
    marginBottom: 8,
  },

  securityValue: {
    fontSize: 14,
    fontWeight: 800,
    color: "#ffffff",
    lineHeight: 1.25,
  },

  previewSection: {
    position: "relative",
    zIndex: 2,
    marginTop: 10,
  },

  previewTitle: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "rgba(103,232,249,0.82)",
    marginBottom: 14,
  },

  previewGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
  },

  previewCard: {
    borderRadius: 18,
    padding: 16,
    background: "rgba(255,255,255,0.035)",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  previewLabel: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.50)",
    marginBottom: 10,
  },

  previewImage: {
    width: "100%",
    height: "auto",
    borderRadius: 14,
    display: "block",
    boxShadow: "0 14px 36px rgba(0,0,0,0.30)",
  },

  downloadWrap: {
    position: "relative",
    zIndex: 2,
    marginTop: 24,
    display: "flex",
    justifyContent: "center",
  },

  downloadButton: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "14px 22px",
    borderRadius: 14,
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    border: "1px solid rgba(255,255,255,0.10)",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 14,
    boxShadow:
      "0 12px 30px rgba(0,0,0,0.28), 0 0 24px rgba(59,130,246,0.10)",
    overflow: "hidden",
  },

  downloadGlow: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)",
    transform: "translateX(-120%)",
    animation: "downloadShimmer 2.6s linear infinite",
    pointerEvents: "none",
  },

  downloadIcon: {
    fontSize: 15,
    lineHeight: 1,
  },

  downloadSubtext: {
    position: "relative",
    zIndex: 2,
    marginTop: 10,
    textAlign: "center",
    fontSize: 12,
    color: "rgba(255,255,255,0.58)",
  },

  bottomTrustNote: {
    position: "relative",
    zIndex: 2,
    marginTop: 24,
    paddingTop: 18,
    borderTop: "1px solid rgba(255,255,255,0.08)",
    fontSize: 13,
    lineHeight: 1.65,
    color: "rgba(255,255,255,0.62)",
    textAlign: "center",
  },

  watermark: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 68,
    fontWeight: 800,
    letterSpacing: "0.10em",
    color: "rgba(255,255,255,0.03)",
    transform: "rotate(-18deg)",
    pointerEvents: "none",
    userSelect: "none",
  },

  securityGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
    maskImage:
      "linear-gradient(180deg, rgba(0,0,0,0.42), rgba(0,0,0,0.08) 45%, rgba(0,0,0,0.24))",
    pointerEvents: "none",
    opacity: 0.25,
  },

  hologram: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.04) 28%, rgba(103,232,249,0.10) 45%, rgba(255,255,255,0.05) 56%, rgba(251,191,36,0.07) 66%, transparent 100%)",
    mixBlendMode: "screen",
    opacity: 0.26,
    pointerEvents: "none",
    animation: "hologramMove 7s linear infinite",
  },

  scanLine: {
    position: "absolute",
    left: "-10%",
    width: "120%",
    height: 3,
    background:
      "linear-gradient(90deg, transparent, rgba(34,197,94,0.22), rgba(34,197,94,0.95), rgba(34,197,94,0.22), transparent)",
    boxShadow:
      "0 0 22px rgba(34,197,94,0.95), 0 0 42px rgba(34,197,94,0.38)",
    animation: "scanMove 4s linear infinite",
    zIndex: 3,
    opacity: 0.95,
  },

  securityGlow: {
    position: "absolute",
    inset: 0,
    borderRadius: 28,
    pointerEvents: "none",
    boxShadow:
      "inset 0 0 90px rgba(59,130,246,0.08), inset 0 0 20px rgba(59,130,246,0.14)",
  },

  securityGlowActive: {
    boxShadow:
      "inset 0 0 120px rgba(34,197,94,0.08), inset 0 0 36px rgba(34,197,94,0.22)",
  },

  securityGlowRevoked: {
    boxShadow:
      "inset 0 0 120px rgba(239,68,68,0.08), inset 0 0 36px rgba(239,68,68,0.20)",
  },

  securityGlowPending: {
    boxShadow:
      "inset 0 0 120px rgba(245,158,11,0.08), inset 0 0 36px rgba(245,158,11,0.20)",
  },

  verifiedBadge: {
    position: "absolute",
    top: 18,
    right: 18,
    padding: "8px 14px",
    borderRadius: 999,
    background: "rgba(34,197,94,0.14)",
    color: "#22c55e",
    fontWeight: 800,
    fontSize: 12,
    letterSpacing: "0.08em",
    boxShadow: "0 0 18px rgba(34,197,94,0.35)",
  },

  pulse: {
    animation: "pulseGlow 2.2s ease-in-out infinite",
  },

  pulseRed: {
    animation: "pulseGlowRed 2.2s ease-in-out infinite",
  },

  pulseAmber: {
    animation: "pulseGlowAmber 2.2s ease-in-out infinite",
  },

  notFoundWrap: {
    position: "relative",
    zIndex: 2,
    minHeight: 340,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 30,
  },

  notFoundEyebrow: {
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "rgba(239,68,68,0.85)",
    fontWeight: 700,
    marginBottom: 12,
  },

  notFoundTitle: {
    margin: 0,
    fontSize: 34,
    lineHeight: 1.1,
    fontWeight: 800,
    color: "#ffffff",
    marginBottom: 12,
  },

  notFoundText: {
    margin: 0,
    maxWidth: 620,
    color: "rgba(255,255,255,0.64)",
    fontSize: 15,
    lineHeight: 1.7,
  },
};

const styleTag = (
  <style
    dangerouslySetInnerHTML={{
      __html: `
@keyframes scanMove {
  0% { transform: translateY(-20px); opacity: 0; }
  12% { opacity: 1; }
  88% { opacity: 1; }
  100% { transform: translateY(760px); opacity: 0; }
}

@keyframes hologramMove {
  0% { transform: translateX(-10%) translateY(0); }
  100% { transform: translateX(10%) translateY(0); }
}

@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 0 rgba(34,197,94,0); }
  50% { box-shadow: 0 0 20px rgba(34,197,94,0.28); }
}

@keyframes pulseGlowRed {
  0%, 100% { box-shadow: 0 0 0 rgba(239,68,68,0); }
  50% { box-shadow: 0 0 20px rgba(239,68,68,0.28); }
}

@keyframes pulseGlowAmber {
  0%, 100% { box-shadow: 0 0 0 rgba(245,158,11,0); }
  50% { box-shadow: 0 0 20px rgba(245,158,11,0.28); }
}

@keyframes liveBlink {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.35; transform: scale(0.85); }
}

@keyframes iconPop {
  0% { transform: scale(0.6); opacity: 0; }
  60% { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(1); }
}

@keyframes downloadShimmer {
  0% { transform: translateX(-120%); }
  100% { transform: translateX(120%); }
}

@media (max-width: 980px) {
  .verify-grid,
  .verify-preview-grid {
    grid-template-columns: 1fr !important;
  }
}
      `,
    }}
  />
);