"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import type { DailyCount } from "@/lib/types"
import { formatDateShort } from "@/lib/utils"

interface SubmissionsTrendProps {
  data: DailyCount[]
}

export function SubmissionsTrend({ data }: SubmissionsTrendProps) {
  const formatted = data.map((d) => ({
    date: formatDateShort(d.date),
    count: d.count,
  }))

  return (
    <div
      className="rounded-xl border p-6"
      style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
    >
      <p className="text-sm font-medium mb-6" style={{ color: "#F5F5F5" }}>
        Submission Activity — Last 30 Days
      </p>

      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={formatted} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
          <defs>
            <linearGradient id="tealGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00C2A8" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#00C2A8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1C1C1F" vertical={false} />
          <XAxis
            dataKey="date"
            tick={{ fill: "#71717A", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            interval="preserveStartEnd"
          />
          <YAxis
            tick={{ fill: "#71717A", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            allowDecimals={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#111113",
              border: "1px solid #1C1C1F",
              borderRadius: "8px",
              color: "#F5F5F5",
              fontSize: "12px",
            }}
            labelStyle={{ color: "#A1A1AA" }}
            cursor={{ stroke: "#2A2A2F" }}
          />
          <Area
            type="monotone"
            dataKey="count"
            stroke="#00C2A8"
            strokeWidth={2}
            fill="url(#tealGrad)"
            dot={false}
            name="Submissions"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
