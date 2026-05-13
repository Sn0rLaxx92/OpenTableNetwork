import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800 py-10">
      <div className="container-shell flex flex-col gap-5 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p className="leading-relaxed">© {new Date().getFullYear()} The Uncomfortable Narrative. Independent journalism and analysis.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/socials" className="transition hover:text-zinc-100">Our Socials</Link>
          <a href="#spotify" className="transition hover:text-zinc-100">Spotify</a>
          <Link href="/contact" className="transition hover:text-zinc-100">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
