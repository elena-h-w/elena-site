type NavProps = {
  activePage?: "home" | "writing";
};

export default function Nav({ activePage = "home" }: NavProps) {
  const base = activePage === "writing" ? "/" : "";

  return (
    <nav className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
      <div className="mx-auto max-w-3xl px-6 py-3 flex items-center justify-between">
        <a href="/" className="text-sm font-medium text-neutral-900">
          Elena Wang
        </a>
        <div className="hidden sm:flex gap-4 text-sm text-neutral-500">
          <a href={`${base}/#about`} className="hover:text-neutral-900 transition-colors">About</a>
          <a href={`${base}/#product`} className="hover:text-neutral-900 transition-colors">Product</a>
          <a href={`${base}/#strategy`} className="hover:text-neutral-900 transition-colors">Strategy</a>
          <a
            href="/writing"
            className={activePage === "writing"
              ? "text-neutral-900 font-medium"
              : "hover:text-neutral-900 transition-colors"}
          >
            Writing
          </a>
          <a href={`${base}/#contact`} className="hover:text-neutral-900 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
