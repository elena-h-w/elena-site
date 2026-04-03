export default function Footer() {
  return (
    <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-8 text-sm text-neutral-600">
      <p>© {new Date().getFullYear()} Elena Wang</p>
      <div className="flex gap-4">
        <a
          className="text-neutral-600 hover:text-neutral-900"
          href="mailto:elenawong1031@gmail.com"
        >
          Email
        </a>
        <a
          className="text-neutral-600 hover:text-neutral-900"
          href="https://www.linkedin.com/in/elenawang/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="text-neutral-600 hover:text-neutral-900"
          href="https://github.com/elena-h-w"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="text-neutral-600 hover:text-neutral-900"
          href="https://www.instagram.com/elena.h.w/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
