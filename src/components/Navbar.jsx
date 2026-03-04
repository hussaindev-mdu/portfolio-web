const links = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Skills', 'skills'],
  ['Contact', 'contact']
];

function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-300/70 bg-white/75 backdrop-blur-lg dark:border-white/10 dark:bg-midnight/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="font-manrope text-lg font-extrabold tracking-wide text-slate-900 dark:text-mist">
          PORTFOLIO
        </a>
        <ul className="hidden gap-6 text-sm font-semibold text-slate-700 md:flex dark:text-mist/90">
          {links.map(([label, id]) => (
            <li key={id}>
              <a className="transition hover:text-sky-600 dark:hover:text-glacier" href={`#${id}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={onToggleTheme}
          className="rounded-lg border border-slate-300 bg-white/70 px-3 py-2 text-xs font-semibold text-slate-800 transition hover:bg-white md:text-sm dark:border-white/25 dark:bg-white/10 dark:text-mist dark:hover:bg-white/20"
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
