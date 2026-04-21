const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Clients Served" },
  { value: "98%", label: "Client Satisfaction" },
]

export function StatsBar() {
  return (
    <section
      className="border-y"
      style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center"
              style={
                i < stats.length - 1
                  ? {
                      borderRight: "1px solid #1C1C1F",
                    }
                  : undefined
              }
            >
              <p
                className="text-4xl font-bold tracking-tight"
                style={{ color: "#F5F5F5" }}
              >
                {stat.value}
              </p>
              <p className="text-sm mt-1" style={{ color: "#71717A" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
