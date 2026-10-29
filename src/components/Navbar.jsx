import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setToggle(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 border-b transition-all duration-300 ${
        scrolled
          ? "border-navy/10 bg-white/95 shadow-[0_12px_35px_rgba(20,36,60,0.08)] backdrop-blur-xl"
          : "border-transparent bg-white/80 backdrop-blur-lg"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16"
      >
        <a
          href="#top"
          onClick={closeMenu}
          className="group flex items-center gap-3"
          aria-label="Badr El Ghazaoui, home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-sm font-semibold tracking-tight text-accent transition-colors group-hover:bg-accent/15">
            BG
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-navy sm:text-base">
              Badr El Ghazaoui
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.18em] text-secondary">
              Portfolio
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className="nav-link text-[13px] font-medium text-secondary transition-colors hover:text-navy xl:text-sm"
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy/10 text-navy transition-colors hover:border-accent/40 hover:bg-navy/5 lg:hidden"
          aria-label={toggle ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={toggle}
          aria-controls="mobile-navigation"
          onClick={() => setToggle((isOpen) => !isOpen)}
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-transform ${
                toggle ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-opacity ${
                toggle ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-transform ${
                toggle ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {toggle && (
        <div
          id="mobile-navigation"
          className="border-t border-navy/10 bg-white/98 px-6 py-5 shadow-2xl backdrop-blur-xl sm:px-10 lg:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-secondary transition-colors hover:bg-navy/5 hover:text-navy"
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
