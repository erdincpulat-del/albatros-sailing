"use client";

type CopyVerifyButtonProps = {
  verifyPath: string;
};

export default function CopyVerifyButton({
  verifyPath,
}: CopyVerifyButtonProps) {
  async function handleCopy() {
    try {
      const fullUrl = `${window.location.origin}${verifyPath}`;
      await navigator.clipboard.writeText(fullUrl);
      window.alert("Verify link kopyalandı");
    } catch (error) {
      console.error("Copy verify link error:", error);
      window.alert("Verify link kopyalanamadı");
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "12px 18px",
        borderRadius: 14,
        background: "rgba(255,255,255,0.10)",
        color: "#ffffff",
        fontWeight: 700,
        fontSize: 14,
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow: "0 10px 24px rgba(2,8,23,0.10)",
        cursor: "pointer",
      }}
    >
      Copy Verify Link
    </button>
  );
}