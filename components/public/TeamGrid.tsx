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
    <section style={{ backgroundColor: "#F5F4F0", padding: "96px 0" }}>
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
            The Team
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
            Small by design.
            <br />
            Senior by requirement.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l" style={{ borderColor: "#E2E0DA" }}>
          {team.map((member) => (
            <div
              key={member.name}
              className="border-r border-b"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E2E0DA",
                padding: "36px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#0A0A0A",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-inter)",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  marginBottom: "20px",
                }}
              >
                {getInitials(member.name)}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "#0A0A0A",
                  letterSpacing: "-0.01em",
                  marginBottom: "4px",
                }}
              >
                {member.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  color: "#9B9B9B",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                {member.role}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                  color: "#6B6B6B",
                  lineHeight: 1.65,
                  fontWeight: 300,
                }}
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
