import CheckoutCart from '@/components/checkout-cart';
import { checkoutCatalog, workshopIds } from '@/lib/commerce-catalog';
export const dynamic = 'force-dynamic';
export const metadata = {
  title: 'Your workshop order',
  robots: { index: false, follow: false },
};
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ product?: string | string[] }>;
}) {
  const query = await searchParams;
  const selected = (
    Array.isArray(query.product)
      ? query.product
      : (query.product || '').split(',')
  ).filter((id): id is (typeof workshopIds)[number] =>
    workshopIds.includes(id as (typeof workshopIds)[number]),
  );
  return (
    <CheckoutCart
      key={selected.join(',')}
      products={checkoutCatalog()}
      initialSelection={[...new Set(selected)]}
    />
  );
}
