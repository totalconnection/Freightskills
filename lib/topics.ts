export const topics = [
  {
    slug: 'prospecting',
    title: 'Prospecting & sales',
    short: 'Prospecting',
    label: 'Find the right shippers',
    description:
      'Research the business, find the right contact, and make your next conversation more useful.',
    question: 'How do I prepare for a better shipper conversation?',
    steps: [
      'Understand what the company ships.',
      'Identify the person responsible for freight.',
      'Plan a relevant first conversation and follow-up.',
    ],
  },
  {
    slug: 'quoting',
    title: 'Quoting & rates',
    short: 'Quoting',
    label: 'Price the load',
    description:
      'Understand the shipment, evaluate carrier costs, and build a quote you can stand behind.',
    question: 'How do I quote freight without guessing?',
    steps: [
      'Confirm the shipment and service requirements.',
      'Compare recent history with current carrier feedback.',
      'Explain the rate, scope, and assumptions.',
    ],
  },
  {
    slug: 'carriers',
    title: 'Carrier qualification',
    short: 'Carriers',
    label: 'Build your network',
    description:
      'Look beyond the rate. Learn how to evaluate, onboard, and work with the carriers moving your freight.',
    question: 'How do I evaluate a carrier before booking?',
    steps: [
      'Interview the carrier about fit and capability.',
      'Verify identity, authority, and insurance.',
      'Document expectations and evaluate performance.',
    ],
  },
  {
    slug: 'operations',
    title: 'Shipment management',
    short: 'Operations',
    label: 'Manage the move',
    description:
      'From order confirmation to proof of delivery, keep the details and the people connected.',
    question: 'What happens after a customer gives me an order?',
    steps: [
      'Reconcile the order with the quote.',
      'Confirm facilities, appointments, and instructions.',
      'Coordinate execution, updates, and documents.',
    ],
  },
  {
    slug: 'ltl',
    title: 'LTL freight',
    short: 'LTL',
    label: 'Understand the network',
    description:
      'Learn how shared trailer space, terminals, classification, and service requirements shape LTL shipments.',
    question: 'How does less-than-truckload freight actually move?',
    steps: [
      'Understand the pickup, terminal, and delivery sequence.',
      'Collect accurate commodity and packaging details.',
      'Match service expectations to the carrier network.',
    ],
  },
  {
    slug: 'drayage',
    title: 'Container drayage',
    short: 'Drayage',
    label: 'Connect port to customer',
    description:
      'Understand the equipment, access requirements, and handoffs behind a container move.',
    question: 'What makes container drayage different from truckload?',
    steps: [
      'Identify the container, terminal, and delivery requirements.',
      'Confirm carrier and equipment-provider access.',
      'Plan the move through equipment return.',
    ],
  },
  {
    slug: 'business',
    title: 'Brokerage foundations',
    short: 'Foundations',
    label: 'Understand the business',
    description:
      'Understand brokerage roles, agreements, financial responsibility, credit, and the decisions behind starting a freight business.',
    question: 'What should I understand before running a freight brokerage?',
    steps: [
      'Understand your role and responsibilities.',
      'Review the agreements and financial requirements.',
      'Build the knowledge needed to serve customers responsibly.',
    ],
  },
  {
    slug: 'growth',
    title: 'Business growth',
    short: 'Growth',
    label: 'Build a stronger brokerage',
    description:
      'Develop customer relationships, operating routines, teams, and technology that support a more capable brokerage.',
    question: 'How do I grow without losing control of the work?',
    steps: [
      'Identify the real constraint on your business.',
      'Build repeatable processes and clear responsibilities.',
      'Evaluate results before adding more complexity.',
    ],
  },
] as const;
export type TopicSlug = (typeof topics)[number]['slug'];
