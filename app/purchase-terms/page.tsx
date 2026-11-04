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
        Workshop purchases are $149 each, paid once. Academy is $625 paid in full or two payments of $350 ($700 total), with the second payment due 30 days after enrollment. Applicable taxes are shown at Whop checkout. Academy includes both workshops, one group call per month, and course updates. Your purchase
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
