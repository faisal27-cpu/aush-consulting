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
    <section style={{ backgroundColor: "#FFFFFF", padding: "128px 0" }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

          {/* Left — sticky */}
          <div className="lg:sticky lg:top-24 self-start">
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "#9B9B9B",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Principles
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 500,
                color: "#0A0A0A",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "24px",
              }}
            >
              Three things we
              <br />
              won&apos;t compromise on.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "16px",
                color: "#6B6B6B",
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: "360px",
              }}
            >
              Principles aren&apos;t worth much unless they cost something. Here&apos;s what ours have cost us.
            </p>
          </div>

          {/* Right — editorial rows */}
          <div>
            {values.map((value, i) => (
              <div
                key={value.title}
                style={{
                  paddingTop: i === 0 ? 0 : "52px",
                  paddingBottom: "52px",
                  borderBottom: "1px solid #E2E0DA",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "11px",
                    color: "#C8C6BF",
                    letterSpacing: "0.1em",
                    marginBottom: "16px",
                  }}
                >
                  0{i + 1}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(20px, 2vw, 24px)",
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
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
