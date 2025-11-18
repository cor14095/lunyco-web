export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
] as const;

export type NavLink = typeof navLinks[number];
