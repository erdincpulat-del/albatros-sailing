type Props = {
  certificateId: string;
  fullName: string;
  qualification: string;
  issueDate: string;
  instructor: string;
};

export default function CertificateInfoGrid({
  certificateId,
  fullName,
  qualification,
  issueDate,
  instructor,
}: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "18px",
        padding: "30px",
        background: "white",
        borderRadius: "20px",
        border: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div>
        <strong>Certificate ID</strong>
        <p>{certificateId}</p>
      </div>

      <div>
        <strong>Full Name</strong>
        <p>{fullName}</p>
      </div>

      <div>
        <strong>Qualification</strong>
        <p>{qualification}</p>
      </div>

      <div>
        <strong>Issue Date</strong>
        <p>{issueDate}</p>
      </div>

      <div>
        <strong>Instructor</strong>
        <p>{instructor}</p>
      </div>
    </div>
  );
}