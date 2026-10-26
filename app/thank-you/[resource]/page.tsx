import { MarketingDisclosure } from '@/components/marketing-disclosure';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Download, ArrowUpRight, Check } from 'lucide-react';
import { resources, skoolCommunityUrl } from '@/lib/resources';
import { Logo, Eyebrow } from '@/components/site';
export const metadata={title:'Your free FreightSkills resource',robots:{index:false,follow:false}};
export function generateStaticParams(){return resources.map(r=>({resource:r.slug}));}
export default async function ThankYou({params}:{params:Promise<{resource:string}>}){
 const {resource}=await params;const r=resources.find(r=>r.slug===resource);if(!r)notFound();
 return <main id="main" className="resource-thanks"><section className="wrap thanks-grid"><div><Eyebrow><Check size={16} aria-hidden="true"/> YOUR FREE RESOURCE</Eyebrow><h1>Thank you.<br/>Your guide is ready.</h1><p className="lead">Get the {r.title} below and put it to work at your own pace.</p><a href={r.file.href} download={r.file.filename} className="button"><Download size={19} aria-hidden="true"/> Download your free PDF</a><p className="thanks-file">{r.file.pages} pages · PDF · {r.file.sizeLabel}</p><p className="thanks-help">If the PDF opens in your browser, use its download button to save a copy.</p></div><img className="thanks-cover" src={r.file.cover} alt={`${r.title} cover`} width="800" height="448"/></section><section className="wrap thanks-community"><div><Eyebrow>KEEP LEARNING TOGETHER</Eyebrow><h2>Join the free FreightSkills community.</h2><p>Discuss what you’re learning, connect with other freight professionals and find the resource library in Skool.</p><a href={skoolCommunityUrl} target="_blank" rel="noopener noreferrer" className="button">Join the free community <ArrowUpRight size={18} aria-hidden="true"/></a><p className="thanks-help">Your download is yours to keep. Joining the community is optional.</p></div></section><footer className="wrap magnet-footer"><Logo/><Link href="/resources">Explore the other free guides ↗</Link><Link href="/privacy">Privacy</Link><MarketingDisclosure /></footer></main>;
}
