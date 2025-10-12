'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold">Lunyco</Link>
        <nav className="flex gap-4 text-sm">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-md px-3 py-1.5 hover:bg-white/10 ${pathname === l.href ? 'bg-white/10' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}