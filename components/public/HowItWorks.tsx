const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We spend the first two weeks understanding your data, your constraints, and what success actually looks like. No proposals until we know the problem.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Weekly milestones, shared Slack channel, live staging environment from day one. You see progress every week, not just at the end.",
  },
  {
    number: "03",
    title: "Launch & Own",
    description:
      "We don't just hand off a repo. We document, train your team, and stay on for the first 60 days post-launch to make sure it runs.",
  },
]

export function HowItWorks() {
  return (
    <section
      className="py-24 border-t"
      style={{ backgroundColor: "#0C0C0E", borderColor: "#1C1C1F" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p
            className="font-mono text-xs uppercase tracking-widest mb-3"
            style={{ color: "#00C2A8" }}
          >
            Process
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: "#F5F5F5" }}
          >
            How we work
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span
                className="font-mono text-5xl font-bold leading-none"
                style={{ color: "rgba(0,194,168,0.15)" }}
              >
                {step.number}
              </span>
              <h3
                className="text-lg font-semibold mt-4"
                style={{ color: "#F5F5F5" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm mt-2 leading-relaxed"
                style={{ color: "#A1A1AA" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
