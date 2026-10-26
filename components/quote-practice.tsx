 'use client';
import { useState } from 'react';
export default function QuotePractice() {
 const [cost,setCost]=useState('1000'),[markup,setMarkup]=useState('15');
 const buy=Number(cost),pct=Number(markup),valid=cost!==''&&markup!==''&&Number.isFinite(buy)&&Number.isFinite(pct)&&buy>0&&buy<=1000000&&pct>=0&&pct<=100;
 const profit=buy*pct/100,sell=buy+profit;
 const usd=(n:number)=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2}).format(n);
 return <div className="sales-case"><p className="eyebrow">Interactive pricing example</p><div className="sales-inputs"><label>Total carrier cost ($)<input type="number" min="0.01" max="1000000" step="0.01" value={cost} onChange={e=>setCost(e.target.value)}/></label><label>Markup (%)<input type="number" min="0" max="100" step="0.1" value={markup} onChange={e=>setMarkup(e.target.value)}/></label></div><div aria-live="polite" aria-atomic="true">{valid?<><div className="sales-result"><span>Customer sell rate</span><strong>{usd(sell)}</strong></div><dl className="sales-math"><div><dt>Expected gross profit</dt><dd>{usd(profit)}</dd></div><div><dt>Gross margin</dt><dd>{(profit/sell*100).toFixed(1)}%</dd></div></dl></>:<p>Enter a carrier cost above $0, up to $1,000,000, and a markup between 0% and 100%.</p>}</div><p className="sales-caption">Example only; excludes overhead and any costs omitted from your total. The workshop calculator uses your inputs, not live market rates.</p></div>;
}
