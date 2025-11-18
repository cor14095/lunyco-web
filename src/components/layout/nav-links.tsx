'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navLinks } from '@/config/navigation';

interface NavLinksProps {
  onLinkClick?: () => void;
  className?: string;
}

export function NavLinks({ onLinkClick, className }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className={cn(
            'rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground',
            pathname === link.href && 'bg-accent',
            className
          )}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
