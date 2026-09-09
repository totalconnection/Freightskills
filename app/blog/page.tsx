import type {Metadata} from 'next';
import Link from 'next/link';
import {Play} from 'lucide-react';
import {posts} from '@/lib/posts';
import {Eyebrow,CommunityBand} from '@/components/site';
export const metadata:Metadata={title:'The journal | Freight, technology & growth',description:'Watch Freightskills videos and explore practical articles on freight operations, shipper relationships, technology and growing a team.'};
export default function Blog(){return <main id="main"><section className="page-hero wrap"><Eyebrow>THE FREIGHTSKILLS JOURNAL</Eyebrow><h1>Real freight.<br/>Fresh thinking.</h1><p className="lead">Ideas from the work itself. Watch the lesson, explore the takeaways and bring a better approach to your next working day.</p></section><section className="wrap blog-list" style={{paddingBottom:100}}>{posts.map(p=><Link className="article-card" key={p.slug} href={`/blog/${p.slug}`}><div className={`article-cover cover-${p.theme}`}><span className="cover-label">FREIGHTSKILLS / FIELD NOTES</span><strong>{p.cover}</strong><span className="play-circle"><Play size={19}/></span></div><div className="article-meta">{p.category.toUpperCase()}<span>{p.minutes} MIN READ</span></div><h3>{p.title}</h3><p>{p.excerpt}</p></Link>)}</section><CommunityBand/></main>}
