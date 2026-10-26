import { lifetimeDefinition, termsVersion } from '@/lib/commerce-catalog';
export const metadata = { title: 'Workshop purchase terms | Freight Skills' };
export default function Page() {
  return (
    <main id="main" className="checkout-terms-page">
      <a href="/checkout">← Back to your cart</a>
      <h1>Workshop purchase terms</h1>
      <p>Version: {termsVersion}</p>
      <h2>Lifetime access*</h2>
      <p>{lifetimeDefinition}</p>
      <p>
        The minimum one-year access guarantee applies even if the business
        ceases operating during that first year. This access applies to the
        workshop purchased, including its included recordings and tools.
      </p>
      <h2>Your purchase</h2>
      <p>
        Your order is a one-time purchase of the workshops shown at checkout. It
        does not include individual consulting, live coaching, custom AI
        implementation, or future products unless they are expressly included in
        your order.
      </p>
      <h2>Account and delivery</h2>
      <p>
        After payment is confirmed, access is assigned to the email address used
        at checkout. New members receive a secure link to set up their account.
        Returning members use their existing login. Please use an email address
        you control and keep your login private.
      </p>
      <h2>Training and tools</h2>
      <p>
        The workshops provide education and tools to support your work. You are
        responsible for confirming current carrier costs, shipment details,
        facility requirements, and operating decisions. No specific revenue,
        profit, or business outcome is guaranteed.
      </p>
      <h2>Purchase support</h2>
      <p>
        For access issues or questions about a purchase, contact{' '}
        <a href="mailto:support@freightskills.com">support@freightskills.com</a>{' '}
        with your order reference. Any rights you have under applicable law
        remain unchanged.
      </p>
    </main>
  );
}
