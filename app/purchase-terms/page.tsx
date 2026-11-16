import { lifetimeDefinition, termsVersion } from '@/lib/commerce-catalog';
import {metadata as meta} from '@/lib/config';
export const metadata = meta('Course purchase terms','Terms for Freightskills workshops and Academy.','/purchase-terms');
export default function Page() {
  return (
    <main id="main" className="checkout-terms-page">
      <a href="/checkout">← Back to your cart</a>
      <h1>Course purchase terms</h1>
      <p>Version: {termsVersion}</p>
      <h2>Lifetime access*</h2>
      <p>{lifetimeDefinition}</p>
      <p>
        The minimum one-year access guarantee applies even if the business
        ceases operating during that first year. This access applies to the
        course purchased, including its included recordings and tools.
      </p>
      <h2>Your purchase</h2>
      <p>
        Workshop purchases are $149 each, paid once. For new enrollments from November 15, 2026, Academy is $625 paid once. Applicable taxes are shown at Whop checkout. Academy includes both workshops, course updates, and six months of twice-monthly live group video Q&A with Luis Uribe, beginning at enrollment. The live Q&A period is separate from lifetime course access. Any ongoing-support membership after six months is optional, requires a separate purchase, and is not automatically charged. Existing purchases retain the pricing and support terms agreed at purchase. Your purchase
        does not include individual consulting, one-to-one coaching, custom AI
        implementation, or future products unless they are expressly included in
        your order.
      </p>
      <h2>Account and delivery</h2>
      <p>
        After payment is confirmed, access is assigned to the email address used
        at Whop checkout. New members receive instructions to create an account and verify that same email address.
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
