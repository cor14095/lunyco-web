export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-8 text-xs text-gray-400">
        © {new Date().getFullYear()} Lunyco • Built with Next.js 15 & Tailwind
      </div>
    </footer>
  );
}