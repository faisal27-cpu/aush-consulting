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
    <section
      className="py-24 border-t"
      style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p
            className="font-mono text-xs uppercase tracking-widest mb-3"
            style={{ color: "#00C2A8" }}
          >
            How We Work
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: "#F5F5F5" }}
          >
            Three things we
            <br />
            won&apos;t compromise on
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="pl-6 border-l-2"
              style={{ borderColor: "#00C2A8" }}
            >
              <h3
                className="text-lg font-semibold"
                style={{ color: "#F5F5F5" }}
              >
                {value.title}
              </h3>
              <p
                className="text-sm mt-2 leading-relaxed"
                style={{ color: "#A1A1AA" }}
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
