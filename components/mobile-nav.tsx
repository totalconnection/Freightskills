'use client';
import {useState} from 'react';
import Link from 'next/link';
import {Menu,X} from 'lucide-react';
export function MobileNav(){const[open,setOpen]=useState(false);return <div className="mobile-nav"><button className="menu-toggle" aria-expanded={open} aria-controls="mobile-links" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>{open&&<nav id="mobile-links" aria-label="Mobile navigation"><Link onClick={()=>setOpen(false)} href="/about">Our mission</Link><Link onClick={()=>setOpen(false)} href="/blog">The journal</Link><Link onClick={()=>setOpen(false)} href="/resources">Free resources</Link><Link onClick={()=>setOpen(false)} href="/community">Join the free community ↗</Link></nav>}</div>}
