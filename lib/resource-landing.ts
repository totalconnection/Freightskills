export const resourceLanding = {
  'drayage-checklist': {
    headline: 'Quote the container move with the right details in hand.',
    intro:
      'A container number is only the beginning. Use the Drayage Checklist to organize the questions behind the move before you quote or book it.',
    action: 'Send me the drayage checklist',
    audience:
      'For freight brokers preparing for container and drayage conversations.',
    problem:
      'The missing detail usually shows up when the move is already underway.',
    explanation:
      'Timing, equipment and extra charges belong in the conversation early. Give yourself a more structured starting point for collecting the information you need.',
    steps: [
      'Start with the shipment information you already have.',
      'Use the checklist to identify the questions still unanswered.',
      'Confirm those details with the appropriate parties before committing.',
    ],
    faq: [
      'Is this only for experienced drayage brokers?',
      'It is a practical reference for organizing a drayage conversation. If you are new to the mode, pair it with the free drayage lessons in the library.',
    ],
  },
  'niche-resource': {
    headline: 'Give your prospecting a focus. Give every lead a next step.',
    intro:
      'Use the Profitable Niche List & CRM Template to explore freight specializations and organize the companies, contacts and follow-ups worth your attention.',
    action: 'Send me the niche list & template',
    audience:
      'For freight brokers building a more focused prospecting routine.',
    problem: 'A long list of companies is not yet a prospecting plan.',
    explanation:
      'Choosing where to focus and keeping track of the work are two connected decisions. Explore potential niches, then give your research and next actions a consistent place to live.',
    steps: [
      'Explore niches that fit your knowledge and capabilities.',
      'Organize company and contact research in the template.',
      'Record the next useful action for each prospect.',
    ],
    faq: [
      'Does this replace my CRM?',
      'Use the template as a starting point for organizing research and follow-up. If you already use a CRM, keep that system as your main record and adapt the approach to your workflow.',
    ],
  },
  'onboarding-guide': {
    headline: 'Go into your next carrier conversation prepared.',
    intro:
      'Get a practical guide to carrier onboarding and negotiation, with scripts and a checklist to help you organize the load information and questions before the call.',
    action: 'Send me the carrier guide',
    audience:
      'For freight brokers developing a more consistent carrier onboarding process.',
    problem:
      'A productive carrier conversation starts before you pick up the phone.',
    explanation:
      'Know the load, organize your questions and prepare to discuss the requirements clearly. Use the guide as a reference while you build a repeatable approach to onboarding and negotiation.',
    steps: [
      'Organize the shipment details before contacting a carrier.',
      'Review the onboarding and conversation prompts.',
      'Adapt the scripts to the actual shipment and carrier.',
    ],
    faq: [
      'Can I use the scripts word for word?',
      'Treat the scripts as examples. Adapt them to the shipment, your company’s process and the person you are speaking with. They do not replace independent carrier verification.',
    ],
  },
  'shipper-objections': {
    headline: 'Know what to ask when a shipper pushes back.',
    intro:
      'Use the Shipper Objection Mastery Guide to understand the concern behind an objection and prepare a response that moves the conversation forward.',
    action: 'Send me the objection guide',
    audience:
      'For freight brokers who want more useful conversations with prospective shippers.',
    problem: 'A quick comeback can miss the real concern.',
    explanation:
      'Before trying to overcome an objection, understand what the shipper is telling you. Use questions and response examples to make your next conversation more relevant to their situation.',
    steps: [
      'Review the objections you encounter in your conversations.',
      'Choose questions that help clarify the underlying concern.',
      'Adapt the response examples to what the shipper actually says.',
    ],
    faq: [
      'Will this give me a response for every situation?',
      'The guide provides a framework and response examples. Every shipper is different, so use their answers to guide the conversation rather than treating a script as a guaranteed result.',
    ],
  },
  'follow-up-guide': {
    headline: 'Make your next follow-up worth answering.',
    intro:
      'Build a more consistent approach with the Follow-Up Mastery Guide: practical examples and sequences for staying organized, relevant and clear about the next step.',
    action: 'Send me the follow-up guide',
    audience:
      'For freight brokers turning first conversations into an organized follow-up process.',
    problem: '“Just checking in” leaves the next step unclear.',
    explanation:
      'Follow-up is easier to manage when each contact has a purpose. Use the guide to connect your calls and emails to the relationship and keep track of what should happen next.',
    steps: [
      'Identify where the prospect is in the conversation.',
      'Adapt a follow-up sequence to the relationship.',
      'Record the next action so the conversation does not get lost.',
    ],
    faq: [
      'Is this just a collection of email templates?',
      'The resource combines follow-up examples and sequences with an approach to coordinating calls, emails and next actions. Adapt the examples to your own conversations.',
    ],
  },
} as const;
export type ResourceSlug = keyof typeof resourceLanding;
