import {NextResponse,type NextRequest} from 'next/server';
export function middleware(request:NextRequest){
 const url=new URL(request.url);
 const response=url.hostname==='www.freightskills.com'?NextResponse.redirect(new URL(url.pathname+url.search,'https://freightskills.com'),308):NextResponse.next();
 response.headers.set('X-Content-Type-Options','nosniff');response.headers.set('X-Frame-Options','DENY');response.headers.set('Referrer-Policy','strict-origin-when-cross-origin');response.headers.set('Permissions-Policy','camera=(), microphone=(), geolocation=(), payment=()');
 if(request.nextUrl.protocol==='https:')response.headers.set('Strict-Transport-Security','max-age=31536000');
 response.headers.set('Content-Security-Policy',"default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.google-analytics.com; font-src 'self'; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com; frame-src https://www.youtube-nocookie.com; object-src 'none'; base-uri 'self'; form-action 'self' https://*.activehosted.com; frame-ancestors 'none'");
 if(request.nextUrl.pathname.startsWith('/api/') || request.nextUrl.pathname.startsWith('/thank-you/'))response.headers.set('Cache-Control','private, no-store');
 return response;
}
export const config={matcher:['/((?!_next/static|_next/image|assets/).*)']};
