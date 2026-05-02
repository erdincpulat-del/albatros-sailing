export const dynamic = "force-dynamic";
export const revalidate = 0;

import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/prisma";

type CardsPageProps = {
  searchParams: Promise<{
    certificateId?: string;
  }>;
};

type CertificateCardItem = {
  id: string;
  fullName: string | null;
  program: string | null;
  certificateId: string | null;
  qualificationLevel: string | null;
  issueDate: Date | null;
  status: string | null;
  cardFrontUrl: string | null;
  cardBackUrl: string | null;
};

function normalizeStatus(status?: string | null) {
  const value = String(status || "PENDING").toUpperCase();

  if (value === "ACTIVE") return "ACTIVE";
  if (value === "REVOKED") return "REVOKED";
  if (value === "EXPIRED") return "EXPIRED";
  return "PENDING";
}

function statusColors(status: string) {
  if (status === "ACTIVE") {
    return {
      text: "#86efac",
      border: "rgba(34,197,94,0.28)",
      background: "rgba(34,197,94,0.10)",
      dot: "#22c55e",
      glow: "0 0 24px rgba(34,197,94,0.16)",
    };
  }

  if (status === "REVOKED") {
    return {
      text: "#fca5a5",
      border: "rgba(239,68,68,0.28)",
      background: "rgba(239,68,68,0.10)",
      dot: "#ef4444",
      glow: "0 0 24px rgba(239,68,68,0.14)",
    };
  }

  if (status === "EXPIRED") {
    return {
      text: "#fde68a",
      border: "rgba(245,158,11,0.28)",
      background: "rgba(245,158,11,0.10)",
      dot: "#f59e0b",
      glow: "0 0 24px rgba(245,158,11,0.12)",
    };
  }

  return {
    text: "#cbd5e1",
    border: "rgba(148,163,184,0.24)",
    background: "rgba(148,163,184,0.10)",
    dot: "#94a3b8",
    glow: "0 0 24px rgba(148,163,184,0.10)",
  };
}

function formatDate(value?: Date | null) {
  if (!value) return "-";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";

  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

export default async function CardsPage({ searchParams }: CardsPageProps) {
  const params = await searchParams;

  const certificateId = params?.certificateId
    ? params.certificateId.trim().toUpperCase()
    : undefined;

  const certificate: CertificateCardItem | null = certificateId
    ? await prisma.certificate.findUnique({
        where: {
          certificateId,
        },
        select: {
          id: true,
          fullName: true,
          program: true,
          certificateId: true,
          qualificationLevel: true,
          issueDate: true,
          status: true,
          cardFrontUrl: true,
          cardBackUrl: true,
        },
      })
    : null;

  const status = normalizeStatus(certificate?.status);
  const badge = statusColors(status);

  return (
    <main style={styles.page}>
      <div style={styles.glowA} />
      <div style={styles.glowB} />
      <div style={styles.glowC} />
      <div style={styles.gridOverlay} />
      <div style={styles.noiseOverlay} />

      <section style={styles.container}>
        <div style={styles.hero}>
          <div style={styles.badge}>
            ALBATROS SAILING • GÜVENLİ KART GÖRÜNTÜLEME
          </div>

          <h1 style={styles.title}>Sertifika Kartı</h1>

          <p style={styles.description}>
            Bu alan public kart arşivi değildir. Kart yalnızca sertifika
            numarası veya QR bağlantısı ile görüntülenir.
          </p>

          <div style={styles.summaryRow}>
            <div style={styles.summaryBox}>
              <div style={styles.summaryLabel}>Public Liste</div>
              <div style={styles.summaryValue}>Kapalı</div>
            </div>

            <div style={styles.summaryBox}>
              <div style={styles.summaryLabel}>Erişim Tipi</div>
              <div style={styles.summaryValue}>ID / QR</div>
            </div>

            <div style={styles.summaryBox}>
              <div style={styles.summaryLabel}>Güvenlik</div>
              <div style={styles.summaryValue}>Aktif</div>
            </div>
          </div>
        </div>

        {!certificateId ? (
          <div style={styles.emptyCard}>
            <div style={styles.emptyTitle}>Sertifika numarası gerekli</div>
            <p style={styles.emptyText}>
              Kart görüntülemek için geçerli bir AS sertifika numarası
              kullanılmalıdır. Public kart arşivi güvenlik nedeniyle kapalıdır.
            </p>

            <div style={styles.actionRowStandalone}>
              <Link href="/registry" style={styles.primaryLink}>
                Sertifika Doğrulama Ekranına Git
              </Link>
            </div>
          </div>
        ) : !certificate ? (
          <div style={styles.emptyCard}>
            <div style={styles.emptyTitle}>Kart kaydı bulunamadı</div>
            <p style={styles.emptyText}>
              Girilen sertifika numarasına ait kart kaydı sistemde bulunamadı.
            </p>

            <div style={styles.actionRowStandalone}>
              <Link href="/registry" style={styles.primaryLink}>
                Tekrar Ara
              </Link>
            </div>
          </div>
        ) : (
          <div style={styles.cardsGrid} className="cards-grid">
            <article style={styles.card} className="premium-card-shell">
              <div
                style={{
                  ...styles.cardGlow,
                  boxShadow: badge.glow,
                }}
              />

              <div style={styles.cardTop}>
                <div
                  style={{
                    ...styles.statusBadge,
                    color: badge.text,
                    borderColor: badge.border,
                    background: badge.background,
                  }}
                >
                  <span
                    style={{
                      ...styles.statusDot,
                      background: badge.dot,
                      boxShadow: `0 0 12px ${badge.dot}`,
                    }}
                  />
                  {status}
                </div>

                <div style={styles.cardId}>
                  {certificate.certificateId || "-"}
                </div>
              </div>

              <div style={styles.previewWrap}>
                {certificate.cardFrontUrl ? (
                  <Image
                    src={certificate.cardFrontUrl}
                    alt={`${certificate.fullName || "Certificate"} front card`}
                    width={900}
                    height={560}
                    style={styles.previewImage}
                    className="premium-preview-image"
                  />
                ) : (
                  <div style={styles.noImage}>
                    Kart ön yüzü henüz oluşturulmamış.
                  </div>
                )}
              </div>

              <div style={styles.previewWrap}>
                {certificate.cardBackUrl ? (
                  <Image
                    src={certificate.cardBackUrl}
                    alt={`${certificate.fullName || "Certificate"} back card`}
                    width={900}
                    height={560}
                    style={styles.previewImage}
                    className="premium-preview-image"
                  />
                ) : (
                  <div style={styles.noImage}>
                    Kart arka yüzü henüz oluşturulmamış.
                  </div>
                )}
              </div>

              <div style={styles.cardBody}>
                <div style={styles.name}>
                  {certificate.fullName || "İsimsiz Kayıt"}
                </div>

                <div style={styles.metaPrimary}>
                  {certificate.qualificationLevel ||
                    certificate.program ||
                    "Program bilgisi yok"}
                </div>

                <div style={styles.metaGrid}>
                  <div style={styles.metaBox}>
                    <div style={styles.metaLabel}>Program</div>
                    <div style={styles.metaValue}>
                      {certificate.program || "-"}
                    </div>
                  </div>

                  <div style={styles.metaBox}>
                    <div style={styles.metaLabel}>Tarih</div>
                    <div style={styles.metaValue}>
                      {formatDate(certificate.issueDate)}
                    </div>
                  </div>
                </div>

                <div style={styles.actionRow}>
                  <Link
                    href={`/verify/${encodeURIComponent(
                      certificate.certificateId || ""
                    )}`}
                    style={styles.actionGhost}
                  >
                    Tam Doğrulama Sayfasını Aç
                  </Link>
                  <span style={styles.actionArrow}>→</span>
                </div>
              </div>
            </article>
          </div>
        )}
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .premium-card-shell {
              position: relative;
              isolation: isolate;
            }

            .premium-card-shell::before {
              content: "";
              position: absolute;
              inset: 0;
              border-radius: 26px;
              padding: 1px;
              background: linear-gradient(
                180deg,
                rgba(255,255,255,0.14),
                rgba(103,211,255,0.10),
                rgba(255,255,255,0.05)
              );
              -webkit-mask:
                linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              pointer-events: none;
              opacity: 0.72;
            }

            .premium-card-shell:hover {
              transform: translateY(-7px) scale(1.01);
              box-shadow:
                0 26px 54px rgba(0,0,0,0.32),
                0 0 0 1px rgba(103,211,255,0.08);
              border-color: rgba(103,211,255,0.14);
            }

            .premium-card-shell:hover .premium-preview-image {
              transform: scale(1.025);
            }

            .premium-card-shell:hover .card-action-arrow {
              transform: translateX(4px);
            }

            @media (max-width: 1100px) {
              .cards-grid {
                grid-template-columns: minmax(0, 760px) !important;
              }
            }

            @media (max-width: 720px) {
              .cards-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `,
        }}
      />
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    position: "relative",
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, rgba(56,189,248,0.12), transparent 22%), linear-gradient(180deg, #07101d 0%, #0a1426 42%, #08111c 100%)",
    color: "#f8fafc",
    overflow: "hidden",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },

  glowA: {
    position: "absolute",
    width: 520,
    height: 520,
    borderRadius: "50%",
    background: "rgba(56,189,248,0.10)",
    filter: "blur(80px)",
    top: -120,
    left: -120,
    pointerEvents: "none",
  },

  glowB: {
    position: "absolute",
    width: 420,
    height: 420,
    borderRadius: "50%",
    background: "rgba(59,130,246,0.08)",
    filter: "blur(90px)",
    right: -100,
    top: 160,
    pointerEvents: "none",
  },

  glowC: {
    position: "absolute",
    width: 380,
    height: 380,
    borderRadius: "50%",
    background: "rgba(103,211,255,0.06)",
    filter: "blur(90px)",
    right: "24%",
    bottom: -100,
    pointerEvents: "none",
  },

  gridOverlay: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
    backgroundSize: "32px 32px",
    opacity: 0.18,
    pointerEvents: "none",
  },

  noiseOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.02), transparent 30%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.02), transparent 24%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.015), transparent 28%)",
    pointerEvents: "none",
  },

  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: 1320,
    margin: "0 auto",
    padding: "120px 24px 64px",
  },

  hero: {
    marginBottom: 34,
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    padding: "8px 14px",
    borderRadius: 999,
    background: "rgba(103,211,255,0.10)",
    border: "1px solid rgba(103,211,255,0.18)",
    color: "#8ed8ff",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 18,
    boxShadow: "0 0 24px rgba(103,211,255,0.08)",
    backdropFilter: "blur(10px)",
  },

  title: {
    margin: 0,
    fontSize: "clamp(36px, 5vw, 64px)",
    lineHeight: 1.02,
    fontWeight: 900,
    letterSpacing: "-0.05em",
    color: "#f8fafc",
  },

  description: {
    marginTop: 18,
    maxWidth: 760,
    fontSize: 17,
    lineHeight: 1.9,
    color: "rgba(226,232,240,0.82)",
  },

  summaryRow: {
    marginTop: 28,
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
  },

  summaryBox: {
    minWidth: 160,
    padding: "14px 16px",
    borderRadius: 18,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
  },

  summaryLabel: {
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "rgba(226,232,240,0.56)",
    marginBottom: 8,
  },

  summaryValue: {
    fontSize: 22,
    fontWeight: 800,
    color: "#f8fafc",
  },

  emptyCard: {
    borderRadius: 24,
    background:
      "linear-gradient(180deg, rgba(14,20,32,0.84), rgba(10,15,24,0.92))",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: 28,
    boxShadow: "0 18px 36px rgba(0,0,0,0.20)",
    backdropFilter: "blur(12px)",
  },

  emptyTitle: {
    fontSize: 24,
    fontWeight: 800,
    color: "#f8fafc",
    marginBottom: 10,
  },

  emptyText: {
    margin: 0,
    fontSize: 15,
    lineHeight: 1.8,
    color: "rgba(226,232,240,0.72)",
  },

  actionRowStandalone: {
    marginTop: 22,
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },

  primaryLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 16px",
    borderRadius: 14,
    background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
    color: "#04121c",
    textDecoration: "none",
    fontWeight: 900,
    fontSize: 14,
    boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
  },

  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 760px)",
    gap: 22,
    justifyContent: "center",
  },

  cardLink: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  },

  card: {
    position: "relative",
    height: "100%",
    borderRadius: 26,
    background:
      "linear-gradient(180deg, rgba(14,20,32,0.84), rgba(10,15,24,0.94))",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 18px 36px rgba(0,0,0,0.24)",
    overflow: "hidden",
    backdropFilter: "blur(14px)",
    transition:
      "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
  },

  cardGlow: {
    position: "absolute",
    inset: 0,
    borderRadius: 26,
    pointerEvents: "none",
  },

  cardTop: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: "18px 18px 0",
    flexWrap: "wrap",
  },

  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "7px 12px",
    borderRadius: 999,
    border: "1px solid transparent",
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    flexShrink: 0,
  },

  cardId: {
    fontSize: 12,
    fontWeight: 700,
    color: "rgba(226,232,240,0.62)",
  },

  previewWrap: {
    position: "relative",
    zIndex: 2,
    padding: 18,
    overflow: "hidden",
  },

  previewImage: {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: 18,
    boxShadow: "0 14px 34px rgba(0,0,0,0.24)",
    border: "1px solid rgba(255,255,255,0.06)",
    transition: "transform 220ms ease",
  },

  noImage: {
    minHeight: 220,
    borderRadius: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 20,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.06)",
    color: "rgba(226,232,240,0.56)",
    fontSize: 14,
    lineHeight: 1.7,
  },

  cardBody: {
    position: "relative",
    zIndex: 2,
    padding: "0 18px 18px",
  },

  name: {
    fontSize: 24,
    lineHeight: 1.1,
    fontWeight: 900,
    color: "#f8fafc",
    letterSpacing: "-0.03em",
  },

  metaPrimary: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 1.7,
    color: "#8ed8ff",
    fontWeight: 700,
  },

  metaGrid: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  },

  metaBox: {
    padding: "14px 14px",
    borderRadius: 16,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.06)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
  },

  metaLabel: {
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "rgba(226,232,240,0.55)",
  },

  metaValue: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 700,
    color: "#f8fafc",
    lineHeight: 1.6,
  },

  actionRow: {
    marginTop: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    paddingTop: 12,
    borderTop: "1px solid rgba(255,255,255,0.06)",
  },

  actionGhost: {
    fontSize: 13,
    fontWeight: 800,
    color: "rgba(226,232,240,0.78)",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    textDecoration: "none",
  },

  actionArrow: {
    fontSize: 20,
    fontWeight: 800,
    color: "#67d3ff",
    transition: "transform 220ms ease",
  },
};