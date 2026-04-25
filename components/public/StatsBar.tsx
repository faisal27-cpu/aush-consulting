const stats = [
  {
    value: "50+",
    label: "Enterprise projects shipped",
    context: "Across 12+ industries",
  },
  {
    value: "98%",
    label: "Client retention rate",
    context: "Average engagement: 2+ years",
  },
  {
    value: "73%",
    label: "Avg. reduction in processing time",
    context: "Measured 90 days post-launch",
  },
  {
    value: "6 wks",
    label: "Avg. time to first production deploy",
    context: "From kickoff to live system",
  },
]

export function StatsBar() {
  return (
    <section style={{ backgroundColor: "#0A0A0A", padding: "96px 0" }}>
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "#4A4A4A",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              By the numbers
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 500,
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Outcomes our clients
              <br />
              have achieved.
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "15px",
              color: "#6B6B6B",
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: "380px",
            }}
          >
            Verified results from production deployments, measured at 90 days post-launch across all client engagements.
          </p>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ borderTop: "1px solid #1A1A1A", borderLeft: "1px solid #1A1A1A" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.value}
              style={{
                padding: "40px 32px",
                borderRight: "1px solid #1A1A1A",
                borderBottom: "1px solid #1A1A1A",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  lineHeight: 1,
                  marginBottom: "14px",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                  color: "#9B9B9B",
                  lineHeight: 1.5,
                  marginBottom: "6px",
                }}
              >
                {stat.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  color: "#3A3A3A",
                }}
              >
                {stat.context}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
