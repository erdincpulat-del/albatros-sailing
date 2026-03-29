type Props = {
  children: React.ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 20px"
      }}
    >
      {children}
    </section>
  )
}