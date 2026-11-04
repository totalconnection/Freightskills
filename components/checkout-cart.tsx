'use client';
import { MarketingDisclosure } from '@/components/marketing-disclosure';

import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calculator,
  Check,
  Container,
  LockKeyhole,
  Plus,
  ShieldCheck,
  Trash2,
} from 'lucide-react';
import {
  lifetimeDefinition,
  whopCheckout,
  money,
  workshopIds,
  type WorkshopId,
  type CheckoutProduct,
} from '@/lib/commerce-catalog';
export default function CheckoutCart({
  products,
  initialSelection,
}: {
  products: CheckoutProduct[];
  initialSelection: WorkshopId[];
}) {
  const [selected, setSelected] = useState(initialSelection),
    [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    try {
      const entry = JSON.parse(localStorage.getItem('freightskills-cart') || 'null');
      const saved = entry && Number.isFinite(entry.savedAt) && Date.now()-entry.savedAt<30*86400000 ? entry.items : [];
      if (!entry?.savedAt) localStorage.removeItem('freightskills-cart');
      if (Array.isArray(saved))
        setSelected([
          ...new Set([
            ...saved.filter((p): p is WorkshopId => workshopIds.includes(p)),
            ...initialSelection,
          ]),
        ]);
    } catch {}
    setHydrated(true);
  }, [initialSelection]);
  useEffect(() => {
    if (hydrated)
      try {
        const current = JSON.parse(localStorage.getItem('freightskills-cart') || 'null');
        const savedAt = current && JSON.stringify(current.items)===JSON.stringify(selected) ? current.savedAt : Date.now();
        localStorage.setItem('freightskills-cart', JSON.stringify({items:selected,savedAt}));
      } catch {}
  }, [selected, hydrated]);
  const items = products.filter((p) => selected.includes(p.id)),
    remaining = products.filter((p) => !selected.includes(p.id)),
    total = items.reduce((sum, p) => sum + p.unitAmount, 0);
  function toggle(id: WorkshopId) {
    setSelected((current) =>
      current.includes(id) ? current.filter((p) => p !== id) : [...current, id],
    );
  }

  return (
    <div className="fs-checkout">
      <header className="checkout-header">
        <a href="/trainings">
          <img
            src="/brand/freightskills-logo.svg"
            alt="Freight Skills"
            width="162"
            height="60"
          />
        </a>
        <span>
          <LockKeyhole size={15} />
          Your workshop order
        </span>
      </header>
      <main id="main" className="checkout-main">
        <a className="checkout-back" href="/trainings">
          <ArrowLeft size={15} />
          Explore trainings
        </a>
        <div className="checkout-heading">
          <p className="checkout-eyebrow">
            THE NEXT STEP IS PUTTING IT TO WORK
          </p>
          <h1>
            A practical skill.
            <br />A place to start.
          </h1>
          <p>
            Get the training and tools together in your Freight Skills Portal.
          </p>
        </div>
        <p className="checkout-notice">
          <strong>Secure checkout with Whop.</strong> Complete each workshop purchase separately. Use the same email for checkout and your portal account.
        </p>
        <div className="checkout-grid">
          <div>
            <section className="checkout-section">
              <div className="checkout-section-title">
                <span>01</span>
                <h2>Your workshops</h2>
                <small>{items.length} selected</small>
              </div>
              <div aria-live="polite">
                {items.map((p) => (
                  <article className="checkout-product" key={p.id}>
                    <div className={'checkout-product-icon ' + p.theme}>
                      {p.id === 'quote-workshop' ? (
                        <Calculator size={30} />
                      ) : (
                        <Container size={30} />
                      )}
                    </div>
                    <div className="checkout-product-copy">
                      <h3>{p.name}</h3>
                      <p>{p.description}</p>
                      <ul>
                        {p.features.map((f) => (
                          <li key={f}>
                            <Check size={13} />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <button
                        type="button"
                        onClick={() => toggle(p.id)}
                        className="checkout-remove"
                        aria-label={'Remove ' + p.name}
                      >
                        <Trash2 size={13} />
                        Remove
                      </button>
                    </div>
                    <strong className="checkout-price">
                      {money(p.unitAmount)}
                      <small>one time</small>
                    </strong>
                  </article>
                ))}
                {!items.length && (
                  <div className="checkout-empty">
                    <BookOpen size={28} />
                    <h3>Your next skill starts here.</h3>
                    <p>Add a workshop below to build your order.</p>
                  </div>
                )}
              </div>
              {remaining.map((p) => (
                <article className="checkout-add" key={p.id}>
                  <div>
                    <span>
                      {items.length
                        ? 'Build on what you learn'
                        : 'Choose your workshop'}
                    </span>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                  </div>
                  <button type="button" onClick={() => toggle(p.id)}>
                    <Plus size={16} />
                    Add · {money(p.unitAmount)}
                  </button>
                </article>
              ))}
            </section>
            {items.length > 0 && (
              <aside className="checkout-academy-upgrade" aria-labelledby="academy-upgrade-title">
                <p className="checkout-eyebrow">WANT THE COMPLETE PROGRAM?</p>
                <h2 id="academy-upgrade-title">Upgrade to the full Freightskills Academy.</h2>
                <p>
                  Academy includes <strong>both the Quote Workshop and Drayage Workshop</strong>,
                  plus the full Freightskills Academy learning path for freight agents and
                  brokerage owners. Both workshops are included in the Academy price.
                </p>
                <p className="checkout-upgrade-extras">
                  You also get one group call per month, full course updates and lifetime access*.
                </p>
                <p className="checkout-upgrade-price">
                  <strong>$625 paid in full — save $75</strong> Or 2 payments of $350 ($700 total), with the second payment due 30 days later.
                </p>
                <a href="/academy#enrollment" className="button">
                  Explore the Academy upgrade <ArrowRight size={17} />
                </a>
                <p className="checkout-upgrade-note">
                  Review the Academy offer before choosing your program. This link does not change your workshop order.
                  *Access for the lifetime of the Freightskills business, guaranteed for at least one year.
                </p>
              </aside>
            )}
            <section className="checkout-section"><div className="checkout-section-title"><span>02</span><h2>Your email connects your access</h2></div><p className="checkout-help">Whop collects your payment and email securely. If you already have a Freightskills account, use that email address. New members create an account and verify their checkout email.</p></section>
            <section className="checkout-after">
              <h2>What happens after payment?</h2>
              <ol>
                <li>
                  <span>1</span>
                  <div>
                    <strong>Payment confirmed</strong>
                    <p>Whop securely processes your payment.</p>
                  </div>
                </li>
                <li>
                  <span>2</span>
                  <div>
                    <strong>Your portal access opens</strong>
                    <p>We add the purchased workshops to your account.</p>
                  </div>
                </li>
                <li>
                  <span>3</span>
                  <div>
                    <strong>Check your inbox and start</strong>
                    <p>
                      New members get account setup and email verification instructions. Returning
                      members use their existing login.
                    </p>
                  </div>
                </li>
              </ol>
            </section>
          </div>
          <aside className="checkout-summary">
            <p className="checkout-eyebrow">YOUR NEXT CHAPTER</p>
            <h2>Order summary</h2>
            <div className="checkout-summary-lines">
              {items.map((p) => (
                <div key={p.id}>
                  <span>{p.name}</span>
                  <strong>{money(p.unitAmount)}</strong>
                </div>
              ))}
            </div>
            <div className="checkout-total">
              <div>
                <span>Subtotal</span>
                <small>One-time payment · USD</small>
              </div>
              <strong>{money(total)}</strong>
            </div>
            <p className="checkout-tax">
              Any applicable taxes are shown on the payment page before you pay.
            </p>
            <ul className="checkout-benefits">
              <li>
                <Check size={16} />
                Lifetime access* to your purchased workshops
              </li>
              <li>
                <Check size={16} />
                Recorded training and practical tools
              </li>
              <li>
                <Check size={16} />
                Access through your Freight Skills Portal
              </li>
            </ul>
            <p className="checkout-tax">Review the <a href="/purchase-terms">purchase terms</a>, including lifetime access, before completing checkout.</p>
            {hydrated && items.map(p=><a key={p.id} className="checkout-pay" href={whopCheckout[p.id]}>Buy {p.name} · {money(p.unitAmount)} <ArrowRight size={18}/></a>)}
            {items.length>1&&<p className="checkout-tax">Each button opens a separate Whop checkout. Both workshops will appear in the same portal account.</p>}
            <p className="checkout-secure"><ShieldCheck size={15}/>Secure payment via Whop</p>
            <p className="checkout-lifetime">*{lifetimeDefinition}</p>
          </aside>
        </div>
      </main>
      <footer className="checkout-footer">
        <span>© {new Date().getFullYear()} Freight Skills</span>
        <a href="/purchase-terms">Workshop purchase terms</a>
        <a href="mailto:support@freightskills.com">Questions? Contact us</a>
      <MarketingDisclosure /></footer>
    </div>
  );
}
