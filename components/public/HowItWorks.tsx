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
                fontSize: "clamp(36px, 4vw, 48px)",
                fontWeight: 500,
                color: "#0A0A0A",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              A process built for results, not PowerPoints.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "16px",
                color: "#6B6B6B",
                fontWeight: 300,
                lineHeight: 1.65,
                marginTop: "20px",
                maxWidth: "400px",
              }}
            >
              Most AI projects fail in the handoff between strategy and engineering.
              We close that gap by keeping the same team on the project from kickoff
              to launch.
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, i) => (
              <div
                key={step.number}
                style={
                  i > 0
                    ? { borderTop: "1px solid #E2E0DA", paddingTop: "48px" }
                    : undefined
                }
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "11px",
                    color: "#9B9B9B",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: "16px",
                  }}
                >
                  {step.number}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "26px",
                    fontWeight: 500,
                    color: "#0A0A0A",
                    letterSpacing: "-0.01em",
                    marginBottom: "12px",
                  }}
                >
                  {step.title}
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
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
