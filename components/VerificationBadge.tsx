type VerificationBadgeProps = {
  valid: boolean;
};

export default function VerificationBadge({
  valid,
}: VerificationBadgeProps) {
  const bgColor = valid ? "#22c55e" : "#ef4444";
  const label = valid ? "Certificate Valid" : "Certificate Invalid";
  const symbol = valid ? "✓" : "✕";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginTop: "20px",
        padding: "10px 14px",
        borderRadius: "12px",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        width: "fit-content",
      }}
    >
      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "9999px",
          background: bgColor,
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          fontWeight: 700,
          lineHeight: 1,
          boxShadow: valid
            ? "0 0 18px rgba(34,197,94,0.35)"
            : "0 0 18px rgba(239,68,68,0.25)",
        }}
      >
        {symbol}
      </div>

      <div>
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            opacity: 0.6,
            marginBottom: "2px",
          }}
        >
          Certificate Status
        </div>

        <div
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: bgColor,
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}