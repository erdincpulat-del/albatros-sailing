type Props = {
  title: string
  subtitle?: string
}

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "50px"
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          fontWeight: "700",
          marginBottom: "10px"
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            opacity: 0.7,
            fontSize: "18px"
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}