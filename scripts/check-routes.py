import urllib.request,urllib.error,json,re,pathlib
from html.parser import HTMLParser
from urllib.parse import urlsplit
class Page(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.images=[];self.robots=[];self.canon=[];self.h1=0
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='a':self.links.append(a.get('href',''))
  if tag=='img':self.images.append(a.get('src',''))
  if tag=='h1':self.h1+=1
  if tag=='meta' and a.get('name')=='robots':self.robots.append(a.get('content',''))
  if tag=='link' and a.get('rel')=='canonical':self.canon.append(a.get('href'))
base='http://localhost:3000'
queue=['/','/learn','/blog','/about','/community','/resources'];seen={};assets=set();fail=[]
while queue:
 path=queue.pop(0)
 if path in seen:continue
 try:
  r=urllib.request.urlopen(base+path,timeout=45);body=r.read().decode();status=r.status
 except urllib.error.HTTPError as e:status=e.code;body=e.read().decode()
 p=Page();p.feed(body);seen[path]={'status':status,'h1':p.h1,'robots':p.robots,'canonical':p.canon}
 if status!=200 or p.h1!=1 or not any('noindex' in x for x in p.robots) or len(p.canon)!=1:fail.append(path)
 for href in p.links:
  if href.startswith('/') and not href.startswith('//'):
   dest=urlsplit(href).path
   if dest not in seen:queue.append(dest)
 assets.update(src for src in p.images if src.startswith('/'))
for a in assets:
 try:
  r=urllib.request.urlopen(base+a,timeout=20)
  if r.status!=200:fail.append(a)
 except Exception:fail.append(a)
for p in ['/missing-page-for-qa','/learn/not-a-topic','/blog/not-an-article']:
 try:r=urllib.request.urlopen(base+p,timeout=20);fail.append(p+' expected 404')
 except urllib.error.HTTPError as e:
  if e.code!=404:fail.append(p+' status '+str(e.code))
for p in ['/robots.txt','/sitemap.xml']:
 try:
  r=urllib.request.urlopen(base+p,timeout=20);seen[p]={'status':r.status,'body':r.read().decode()[:500]}
 except Exception as e:fail.append(str(e))
pathlib.Path('docs/HTTP-CHECKS.json').write_text(json.dumps({'pages':seen,'assets':sorted(assets),'failures':fail},indent=2)+'\n')
print(json.dumps({'routes':len(seen),'assets':len(assets),'failures':fail},indent=2))
if fail:raise SystemExit(1)
