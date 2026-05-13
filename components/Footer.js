import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800 py-8">
      <div className="container-shell flex flex-col gap-4 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} The Uncomfortable Narrative. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/socials" className="hover:text-brandAccent">Our Socials</Link>
          <a href="#spotify" className="hover:text-brandAccent">Spotify</a>
          <Link href="/contact" className="hover:text-brandAccent">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
