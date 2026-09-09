import Link from 'next/link';
import type {Metadata} from 'next';
import {ArrowUpRight} from 'lucide-react';
import {Eyebrow,CommunityBand} from '@/components/site';
import {resources} from '@/lib/resources';
export const metadata:Metadata={title:'Free freight resources',description:'Explore Freightskills guides for drayage, carrier onboarding, shipper objections, follow-up and freight niches.'};
export default function Resources(){return <main id="main"><section className="page-hero wrap"><Eyebrow>THE FREIGHTSKILLS RESOURCE LIBRARY</Eyebrow><h1>A useful guide.<br/>A better next step.</h1><p className="lead">Practical tools from the Freightskills library. Explore a topic, then bring the conversation into the free community.</p></section><section className="wrap resource-grid" style={{paddingBottom:90}}>{resources.map(r=><article className="resource-card" key={r.slug}><Link href={`/${r.slug}`} tabIndex={-1} aria-hidden="true"><div className="resource-art"><span>{r.category}</span><strong>{r.cover}</strong></div></Link><div className="resource-body"><p className="eyebrow">{r.format}</p><h3>{r.title}</h3><p>{r.description}</p><Link className="text-link" href={`/${r.slug}`}>Explore the guide <ArrowUpRight size={17}/></Link></div></article>)}</section><CommunityBand/></main>}
