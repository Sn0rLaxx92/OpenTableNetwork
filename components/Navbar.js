import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About the Show' },
  { href: '/hosts', label: 'Hosts' },
  { href: '/contact', label: 'Contact' },
  { href: '/socials', label: 'Our Socials' },
];

export default function Navbar() {
  return (
    <header className="border-b border-zinc-800 bg-black/40 backdrop-blur">
      <nav className="container-shell flex flex-wrap items-center justify-between gap-3 py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide">The Uncomfortable Narrative</Link>
        <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-brandAccent">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
