export const workshopIds = ['quote-workshop', 'drayage-workshop'] as const;
export type WorkshopId = (typeof workshopIds)[number];
export const termsVersion = 'workshops-2026-10-25';
export const lifetimeDefinition =
  'Lifetime access means access for the lifetime of the Freight Skills business, with access guaranteed for a minimum of one year from the date of purchase.';
// Display-only catalog. Payment and fulfillment integrations are deferred.
export const shopProducts = [
  {
    id: 'quote-workshop' as const,
    name: 'Quote Workshop',
    description: 'Build a quote you can explain and a process you can repeat.',
    features: [
      '94-minute quoting masterclass',
      'Freight quote calculator & saved quotes',
      'Carrier outreach scripts & quote PDFs',
    ],
    theme: 'quote',
  },
  {
    id: 'drayage-workshop' as const,
    name: 'Drayage Workshop',
    description:
      'Know the container move, from the request through empty return.',
    features: [
      '3 recordings · over 4 hours',
      'Dedicated drayage quote calculator',
      'Printable container move checklist',
    ],
    theme: 'drayage',
  },
];
export function checkoutCatalog() {
  return shopProducts.map((product) => ({
    ...product,
    unitAmount: 14900,
    currency: 'usd' as const,
  }));
}
export type CheckoutProduct = ReturnType<typeof checkoutCatalog>[number];
export function money(cents: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: cents % 100 ? 2 : 0,
  }).format(cents / 100);
}
