"use client"

import { useState } from "react"
import { TestimonialsEditor } from "./TestimonialsEditor"
import { ServicesEditor } from "./ServicesEditor"
import type { Testimonial, Service } from "@/lib/types"

interface ContentTabsClientProps {
  testimonials: Testimonial[]
  services: Service[]
}

const tabs = [
  { id: "testimonials", label: "Testimonials" },
  { id: "services", label: "Services" },
]

export function ContentTabsClient({ testimonials, services }: ContentTabsClientProps) {
  const [activeTab, setActiveTab] = useState("testimonials")

  return (
    <div>
      {/* Tab nav */}
      <div
        className="flex gap-1 p-1 rounded-xl mb-6"
        style={{ backgroundColor: "#111113", width: "fit-content" }}
      >
        {tabs.map((tab) => {
          const active = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{
                backgroundColor: active ? "#18181B" : "transparent",
                color: active ? "#F5F5F5" : "#71717A",
              }}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {activeTab === "testimonials" && (
        <TestimonialsEditor testimonials={testimonials} />
      )}
      {activeTab === "services" && (
        <ServicesEditor services={services} />
      )}
    </div>
  )
}
