import { motion } from "framer-motion";

import { heroPortrait } from "../assets";

const Hero = () => (
  <section className="hero-section relative isolate overflow-hidden px-6 pb-24 pt-36 sm:px-10 sm:pt-40 lg:px-16 lg:pb-32">
    <div className="hero-glow hero-glow-one" aria-hidden="true" />
    <div className="hero-glow hero-glow-two" aria-hidden="true" />

    <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <p className="mb-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_rgba(49,90,130,0.3)]" />
          International Management · Lille, France
        </p>

        <h1 className="max-w-3xl text-[clamp(2.5rem,5.2vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-navy">
          Business-minded.
          <br />
          <span className="hero-title-accent">Technology curious.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-secondary sm:text-xl sm:leading-9">
          I&apos;m Badr El Ghazaoui — an international management student with a
          lasting curiosity for technology, cybersecurity, and the ideas that
          bring people together.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a className="button-primary" href="#projects">
            Explore my work
            <span aria-hidden="true">↗</span>
          </a>
          <a className="button-secondary" href="#contact">
            Let&apos;s connect
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-navy/10 pt-6 text-sm text-secondary">
          <span>Morocco&nbsp; → &nbsp;France</span>
          <span>Arabic · French · English · Spanish</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-[430px] lg:ml-auto"
      >
        <div className="hero-photo-frame relative aspect-[0.82] overflow-hidden rounded-[2rem] border border-white/10 p-2">
          <img
            src={heroPortrait}
            alt="Portrait of Badr El Ghazaoui"
            className="h-full w-full rounded-[1.55rem] object-cover object-[50%_32%]"
          />
          <div className="hero-photo-shade absolute inset-2 rounded-[1.55rem]" />
          <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-white/15 bg-navy/90 p-5 backdrop-blur-md sm:inset-x-9 sm:bottom-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              A curious mind, always learning
            </p>
            <p className="mt-2 text-sm leading-6 text-white/80">
              From business and technology to culture, creativity, and beyond.
            </p>
          </div>
        </div>
        <div className="hero-photo-outline absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[2rem] border border-accent/20" />
        <span className="absolute -left-7 top-10 hidden rounded-full border border-white/10 bg-[#121b18] px-4 py-2 text-xs font-medium tracking-wide text-white/80 shadow-xl sm:block">
          MOROCCO · FRANCE
        </span>
      </motion.div>
    </div>
  </section>
);

export default Hero;
