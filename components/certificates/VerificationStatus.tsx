type Props = {
  status: "verified" | "invalid";
};

export default function VerificationStatus({ status }: Props) {
  const isValid = status === "verified";

  return (
    <div
      style={{
        padding: "22px",
        borderRadius: "16px",
        background: isValid ? "#e8f8f0" : "#ffeaea",
        border: isValid
          ? "1px solid #2ecc71"
          : "1px solid #e74c3c",
        fontWeight: 600,
        fontSize: "18px",
      }}
    >
      {isValid
        ? "✔ Sertifika doğrulandı"
        : "✖ Sertifika bulunamadı"}
    </div>
  );
}