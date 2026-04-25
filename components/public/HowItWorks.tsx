const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We spend the first two weeks understanding your data, your constraints, and what success actually looks like. No proposals until we know the problem. No NDAs signed before the first call.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Weekly milestones, shared Slack channel, live staging environment from day one. You see progress every week, not just at the end. We flag problems early — not after the deadline has passed.",
  },
  {
    number: "03",
    title: "Launch & Own",
    description:
      "We don't just hand off a repo. We document everything, train your team, and stay on for the first 60 days post-launch to make sure the system runs the way it was designed to.",
  },
]

export function HowItWorks() {
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
              Process
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
              A process built for
              <br />
              results, not PowerPoints.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "16px",
                color: "#6B6B6B",
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: "380px",
              }}
            >
              Most AI projects fail in the handoff between strategy and engineering. We close that gap by keeping the same team on the project from kickoff to launch.
            </p>
          </div>

          {/* Right — numbered steps */}
          <div>
            {steps.map((step, i) => (
              <div
                key={step.number}
                style={{
                  paddingTop: i === 0 ? 0 : "52px",
                  paddingBottom: "52px",
                  borderBottom: "1px solid #E2E0DA",
                  display: "flex",
                  gap: "32px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "48px",
                    fontWeight: 400,
                    color: "#E8E6E0",
                    lineHeight: 1,
                    flexShrink: 0,
                    marginTop: "-4px",
                  }}
                >
                  {step.number}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "clamp(20px, 2vw, 24px)",
                      fontWeight: 500,
                      color: "#0A0A0A",
                      letterSpacing: "-0.01em",
                      marginBottom: "14px",
                    }}
                  >
                    {step.title}
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
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
