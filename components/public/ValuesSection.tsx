const values = [
  {
    title: "Honesty over comfort",
    description:
      "If your data isn't ready, we'll tell you. If your timeline is unrealistic, we'll say so in the first meeting. We'd rather lose a contract than set up a project to fail.",
  },
  {
    title: "Outcomes over output",
    description:
      "We don't bill by the line of code. We sign up for results — reduced processing time, higher conversion, lower error rates. If the metric isn't moving, we change the approach.",
  },
  {
    title: "Senior people on your work",
    description:
      "Our founders and senior engineers work directly on client projects. We don't bait with principals and switch to juniors.",
  },
]

export function ValuesSection() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "96px 0" }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "#9B9B9B",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            How We Work
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(36px, 4vw, 48px)",
              fontWeight: 500,
              color: "#0A0A0A",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Three things we
            <br />
            won&apos;t compromise on
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l" style={{ borderColor: "#E2E0DA" }}>
          {values.map((value) => (
            <div
              key={value.title}
              className="border-r border-b"
              style={{ padding: "40px", borderColor: "#E2E0DA" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#0A0A0A",
                  marginBottom: "32px",
                }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "22px",
                  fontWeight: 500,
                  color: "#0A0A0A",
                  letterSpacing: "-0.01em",
                  marginBottom: "16px",
                }}
              >
                {value.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "15px",
                  color: "#6B6B6B",
                  lineHeight: 1.65,
                  fontWeight: 300,
                }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
