import { BarChart2, Mail, Calendar } from "lucide-react"

interface StatsCardsProps {
  total: number
  unread: number
  thisMonth: number
}

export function StatsCards({ total, unread, thisMonth }: StatsCardsProps) {
  const cards = [
    {
      label: "Total Submissions",
      value: total,
      icon: BarChart2,
      highlight: false,
    },
    {
      label: "Unread",
      value: unread,
      icon: Mail,
      highlight: unread > 0,
    },
    {
      label: "This Month",
      value: thisMonth,
      icon: Calendar,
      highlight: false,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-xl p-6 border"
          style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
        >
          <div className="flex items-center justify-between mb-3">
            <p
              className="text-xs font-mono uppercase tracking-wider"
              style={{ color: "#71717A" }}
            >
              {card.label}
            </p>
            <card.icon
              className="w-4 h-4"
              style={{ color: card.highlight ? "#00C2A8" : "#71717A" }}
            />
          </div>
          <p
            className="text-4xl font-bold"
            style={{ color: card.highlight ? "#00C2A8" : "#F5F5F5" }}
          >
            {card.value}
          </p>
        </div>
      ))}
    </div>
  )
}
