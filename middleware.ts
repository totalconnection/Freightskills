import {NextResponse,type NextRequest} from 'next/server';
export function middleware(request:NextRequest){
 const url=new URL(request.url);
 if(url.hostname==='www.freightskills.com')return NextResponse.redirect(new URL(url.pathname+url.search,'https://freightskills.com'),308);
 return NextResponse.next();
}
