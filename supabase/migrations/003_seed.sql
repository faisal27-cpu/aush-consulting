-- Migration 003: Seed Data
-- Run manually in development environment

-- Testimonials
insert into public.testimonials (author_name, author_role, author_company, content, is_active) values
(
  'Sarah Chen',
  'VP of Operations',
  'Meridian Health',
  'AUSH transformed how we handle patient intake. Their AI pipeline reduced manual processing time by 73% in the first quarter. What impressed me most was how quickly they understood our compliance constraints and built around them.',
  true
),
(
  'Marcus Webb',
  'CTO',
  'Foundry Analytics',
  'We had evaluated three other AI consultancies before AUSH. The difference was immediately apparent — they write production-ready code, not proof-of-concepts. Our recommendation engine went live in eight weeks and has been rock solid.',
  true
),
(
  'Priya Kapoor',
  'Director of Product',
  'Stackline Commerce',
  'The team at AUSH doesn''t just build what you ask for — they tell you when your assumptions are wrong and why. That honesty, combined with genuine technical depth, is rare. Our AI-powered search saw a 40% improvement in conversion.',
  true
);

-- Services
insert into public.services (name, description, features, tier, price, is_active, sort_order) values
(
  'AI Strategy',
  'For organizations beginning their AI journey. We audit your data, processes, and team capabilities to produce a roadmap that is specific, prioritized, and grounded in what is actually achievable in your environment.',
  '["AI readiness audit and gap analysis", "Prioritized 12-month AI roadmap", "Build vs. buy recommendation framework", "ROI modeling for top 3 use cases", "Monthly strategy review sessions", "Team capability assessment"]',
  'starter',
  '$2,500/mo',
  true,
  1
),
(
  'Custom AI Development',
  'Full-cycle development of AI systems tailored to your workflows. From data pipeline architecture to model selection, fine-tuning, API development, and deployment — we own the outcome, not just the code.',
  '["End-to-end AI system design and build", "Custom model training and fine-tuning", "Production-grade API development", "Integration with your existing stack", "Performance monitoring and alerting", "Quarterly model refresh cycles", "Dedicated Slack channel and weekly standups"]',
  'growth',
  '$7,500/mo',
  true,
  2
),
(
  'AI Integration',
  'For organizations that need AI embedded at scale across teams and systems. We design the architecture, lead implementation, and train your internal engineers to own it long-term.',
  '["Enterprise architecture design", "Multi-system AI integration", "Internal team training and documentation", "Custom AI governance framework", "SLA-backed uptime commitments", "Dedicated account team", "On-site workshops (up to 4/year)", "Priority support and incident response"]',
  'enterprise',
  'Custom pricing',
  true,
  3
);
