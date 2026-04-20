type BrandTextLogoProps = {
  align?: "left" | "center";
};

export default function BrandTextLogo({
  align = "left",
}: BrandTextLogoProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: align === "center" ? "center" : "flex-start",
        gap: 2,
        lineHeight: 1,
      }}
    >
      <span
        style={{
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: "#ffffff",
          transition: "all 0.3s ease",
          whiteSpace: "nowrap",
        }}
      >
        Albatros Sailing
      </span>

      <span
        style={{
          marginTop: 4,
          fontSize: "18px",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "#ffffff",
          transition: "all 0.3s ease",
          whiteSpace: "nowrap",
        }}
      >
        Premium Sailing Academy
      </span>
    </div>
  );
}