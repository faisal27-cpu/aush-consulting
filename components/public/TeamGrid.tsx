import { getInitials } from "@/lib/utils"

const team = [
  {
    name: "Alex Mercer",
    role: "Founder & AI Architect",
    bio: "Former ML lead at two Series B startups. Shipped production AI systems in healthcare, fintech, and logistics. Believes the best AI is the simplest AI that solves the problem.",
  },
  {
    name: "Uma Patel",
    role: "Head of Strategy",
    bio: "Spent eight years in management consulting before going deep on AI. Knows how to translate board-level ambition into engineering reality.",
  },
  {
    name: "Sam Huang",
    role: "Senior AI Engineer",
    bio: "Built ML pipelines at scale. Comfortable from transformer architecture to k8s deployment. Doesn't believe in black boxes.",
  },
  {
    name: "Helena Rossi",
    role: "Client Success Lead",
    bio: "Keeps projects on track and clients informed. Has a sixth sense for when a project is quietly going sideways and fixes it before it becomes a crisis.",
  },
]

export function TeamGrid() {
  return (
    <section className="py-24" style={{ backgroundColor: "#0C0C0E" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p
            className="font-mono text-xs uppercase tracking-widest mb-3"
            style={{ color: "#00C2A8" }}
          >
            The Team
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: "#F5F5F5" }}
          >
            Small by design.
            <br />
            Senior by requirement.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-xl p-6 border"
              style={{
                backgroundColor: "#111113",
                borderColor: "#1C1C1F",
              }}
            >
              {/* Avatar */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold"
                style={{
                  backgroundColor: "rgba(0,194,168,0.1)",
                  color: "#00C2A8",
                }}
              >
                {getInitials(member.name)}
              </div>

              <h3
                className="text-base font-semibold mt-4"
                style={{ color: "#F5F5F5" }}
              >
                {member.name}
              </h3>
              <p
                className="text-xs mt-1 font-mono"
                style={{ color: "#00C2A8" }}
              >
                {member.role}
              </p>
              <p
                className="text-sm mt-3 leading-relaxed"
                style={{ color: "#A1A1AA" }}
              >
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
