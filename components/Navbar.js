import Image from 'next/image';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About the Show' },
  { href: '/hosts', label: 'Hosts' },
  { href: '/contact', label: 'Contact' },
  { href: '/socials', label: 'Our Socials' }
];

export default function Navbar() {
  return (
    <header className="border-b border-zinc-800/90 bg-zinc-950/95 backdrop-blur">
      <nav className="container-shell flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" aria-label="The Uncomfortable Narrative home">
          <Image src="https://i.imgur.com/VWeCHXP.png" alt="The Uncomfortable Narrative logo" width={42} height={42} className="rounded" />
          <span className="text-base font-semibold tracking-wide sm:text-lg">The Uncomfortable Narrative</span>
        </Link>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-zinc-300">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded px-1 py-1 transition hover:text-brandAccent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandAccent">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
