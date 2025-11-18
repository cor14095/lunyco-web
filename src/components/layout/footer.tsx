export function Footer() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Lunyco • Built with Next.js 16 & Tailwind CSS 4
      </div>
    </footer>
  );
}