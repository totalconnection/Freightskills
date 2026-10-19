import Link from 'next/link';
export default function NotFound() {
  return (
    <main id="main" className="wrap not-found">
      <p className="eyebrow" style={{ justifyContent: 'center' }}>
        404 / LET’S GET YOU BACK ON TRACK
      </p>
      <h1>This page isn’t here.</h1>
      <p style={{ marginTop: 20 }}>
        Find a lesson in the journal or start with the free community.
      </p>
      <Link className="button" href="/community">
        Explore the free community ↗
      </Link>
    </main>
  );
}
