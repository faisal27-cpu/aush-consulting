const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Enterprise Clients" },
  { value: "98%", label: "Retention Rate" },
]

export function StatsBar() {
  return (
    <section style={{ backgroundColor: "#0A0A0A", padding: "64px 0" }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center"
              style={
                i < stats.length - 1
                  ? { borderRight: "1px solid #2A2A2A" }
                  : undefined
              }
            >
              <p
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(40px, 5vw, 56px)",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  lineHeight: 1,
                  marginBottom: "12px",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "13px",
                  color: "#9B9B9B",
                  letterSpacing: "0.05em",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
