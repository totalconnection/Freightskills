export type Workshop = {
  id: 'quote' | 'drayage';
  name: string;
  path: string;
  category: string;
  headline: string;
  description: string;
  result: string;
  format: string;
  problem: string;
  problemTitle: string;
  outcomes: string[];
  lessons: { title: string; description: string; duration: string }[];
  steps: { title: string; description: string }[];
  tools: { title: string; description: string }[];
  audience: string[];
  faqs: { question: string; answer: string }[];
};

export const workshops: Workshop[] = [
  {
    id: 'quote',
    name: 'Quote Workshop',
    path: '/quote-mastery',
    category: 'Pricing & customer communication',
    headline: 'Stop second-guessing the quote you send.',
    description:
      'Learn how to turn a shipment request into a clear customer quote. Work through the decisions with Luis Uribe, then use the Freightskills calculator to compare costs, set your markup, and keep track of your quotes.',
    result:
      'A repeatable path from shipment details to a customer-ready quote.',
    format: '94-minute recorded masterclass',
    problemTitle: 'A good quote starts before you choose a price.',
    problem:
      'Missing shipment details, incomplete carrier rates, and unclear assumptions make quoting harder than it needs to be. This workshop brings the steps together so you can understand what you are pricing, compare your inputs, and explain the number you send.',
    outcomes: [
      'Ask for the shipment details that affect the rate.',
      'Compare carrier costs before choosing your sell rate.',
      'Understand markup, expected profit, and gross margin.',
      'Prepare a customer quote and record what happens next.',
    ],
    lessons: [
      {
        title: 'Freight quoting masterclass',
        duration: '94 min',
        description:
          'Follow the freight quoting process with Luis. Connect shipment information, rate research, carrier conversations, and pricing decisions to the quote you send your customer.',
      },
    ],
    steps: [
      {
        title: 'Understand the shipment',
        description:
          'Collect the lane, dates, equipment, freight details, and special requirements.',
      },
      {
        title: 'Research the buy rate',
        description:
          'Compare relevant carrier quotes and understand what each price includes.',
      },
      {
        title: 'Prepare carrier outreach',
        description:
          'Use the shipment details to build a call script or draft a carrier email.',
      },
      {
        title: 'Set your sell rate',
        description:
          'Choose your markup and review the resulting profit and gross margin.',
      },
      {
        title: 'Send and follow through',
        description:
          'Prepare the customer quote, save it, and update its outcome in your tracker.',
      },
    ],
    tools: [
      {
        title: 'Freight quote calculator',
        description:
          'Work with Truckload, LTL, and Drayage inputs. Compare entered costs and see how your pricing changes the quote.',
      },
      {
        title: 'Carrier outreach prompts',
        description:
          'Generate a call script or email draft from the shipment details you enter.',
      },
      {
        title: 'Customer quote & saved tracker',
        description:
          'Prepare a branded quote, print or save it as a PDF, and return to saved quotes in your account.',
      },
    ],
    audience: [
      'Freight brokers and agents building a consistent quoting routine.',
      'Sales and operations teams that need a clearer handoff.',
      'Business owners who want a shared process their team can follow.',
    ],
    faqs: [
      {
        question: 'Do I need quoting experience?',
        answer:
          'You can start with the masterclass and the step-by-step process, then practice in the calculator. Bring a sample shipment or a real request you are authorized to work on.',
      },
      {
        question: 'Does the calculator supply live market rates?',
        answer:
          'You supply the rate information. The calculator organizes your inputs and calculates pricing; it does not pull live carrier rates or guarantee capacity.',
      },
      {
        question: 'Is the Drayage Workshop included?',
        answer:
          'The Quote Workshop calculator includes a Drayage mode. The separate Drayage Workshop goes deeper into container operations and has its own lessons and move checklist. Academy members with active access can open both workshops.',
      },
      {
        question: 'Does this include live coaching or AI implementation?',
        answer:
          'This is a self-paced workshop with a recorded masterclass and working tools. Live coaching, custom integrations, and done-with-you AI implementation are separate offerings.',
      },
    ],
  },
  {
    id: 'drayage',
    name: 'Drayage Workshop',
    path: '/drayage-mastery',
    category: 'Container freight & operations',
    headline: 'Know what happens before pickup. And after delivery.',
    description:
      'Build a practical understanding of container drayage, from the first request through delivery and empty return. Learn with Luis Uribe, compare the full cost of a move, and use a checklist to keep the handoffs clear.',
    result:
      'A clearer container move plan, an itemized quote, and a documented handoff.',
    format: '3 recordings · over 4 hours',
    problemTitle: 'The move is bigger than the pickup and delivery.',
    problem:
      'A container move brings together facilities, equipment, release requirements, appointments, costs, and return instructions. When one detail is missing, the next person has to chase it. This workshop helps you see the whole move and know what to confirm before it becomes a problem.',
    outcomes: [
      'Understand the people, facilities, and handoffs in a container move.',
      'Identify the information needed to plan pickup, delivery, and empty return.',
      'Separate linehaul, fuel, chassis, and known additional charges.',
      'Build a move brief and make the next action clear.',
    ],
    lessons: [
      {
        title: 'Container and intermodal freight',
        duration: '50 min',
        description:
          'Build your foundation in container freight and the connections between different parts of the move.',
      },
      {
        title: 'Drayage masterclass',
        duration: '121 min',
        description:
          'Work through drayage decisions and examples, then apply the ideas to a move brief and cost comparison.',
      },
      {
        title: 'Container drayage mastery',
        duration: '73 min',
        description:
          'Deepen your understanding of container operations and turn the lessons into a repeatable workflow.',
      },
    ],
    steps: [
      {
        title: 'Map the move',
        description:
          'Confirm the container, exact facilities, cargo details, dates, and unloading arrangement.',
      },
      {
        title: 'Confirm availability & deadlines',
        description:
          'Record release status, appointments, last free day, and empty-return instructions with their sources.',
      },
      {
        title: 'Build the full cost',
        description:
          'Compare carrier linehaul, fuel, chassis billing days, and known accessorials.',
      },
      {
        title: 'Prepare the handoff',
        description:
          'Align the accepted quote, shipment documents, carrier instructions, and responsible contacts.',
      },
      {
        title: 'Follow through to empty return',
        description:
          'Track the milestones and exceptions, then save the delivery and return records.',
      },
    ],
    tools: [
      {
        title: 'Drayage quote calculator',
        description:
          'Compare linehaul, fuel percentage, chassis rates and billable days, and known accessorials. See your buy rate, sell rate, and expected profit.',
      },
      {
        title: 'Printable container move checklist',
        description:
          'Use one copy per shipment to organize the brief, deadlines, carrier costs, and dispatch closeout.',
      },
      {
        title: 'Carrier outreach & quote tracker',
        description:
          'Prepare a drayage call script or email draft, produce a customer quote, and keep your saved quotes together.',
      },
    ],
    audience: [
      'Freight brokers and agents adding container freight to their knowledge.',
      'Operations teams coordinating port or rail container moves.',
      'Logistics business owners creating a more consistent drayage workflow.',
    ],
    faqs: [
      {
        question: 'Can I start without drayage experience?',
        answer:
          'Yes. Start with Container and intermodal freight, then work through the masterclasses and the container workflow. Use a sample move to practice before applying it to customer freight.',
      },
      {
        question: 'Does this include live terminal data or shipment tracking?',
        answer:
          'No. You enter and confirm the shipment information, deadlines, and carrier costs. The saved quote tracker records your quotes; it is not a live container-tracking service.',
      },
      {
        question: 'Is this the same as the Quote Workshop?',
        answer:
          'The Drayage Workshop focuses on container moves and includes a dedicated drayage calculator. The Quote Workshop covers the broader quoting process. They are separate products, and active Academy access includes both.',
      },
      {
        question: 'Are the recordings live sessions?',
        answer:
          'These are on-demand recordings you can work through at your own pace. This standalone workshop does not include weekly calls or individual implementation support.',
      },
    ],
  },
];
