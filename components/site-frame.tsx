'use client';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

export function SiteFrame({ children, header, footer, privacy }: { children: ReactNode; header: ReactNode; footer: ReactNode; privacy: ReactNode }) {
  const watching = usePathname().replace(/\/$/, '') === '/webinar-watch';
  return <>{!watching && header}{children}{!watching && footer}{!watching && privacy}</>;
}
