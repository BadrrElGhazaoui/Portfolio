import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { resume } from "../assets";

const highlights = [
  { label: "Based in", value: "Lille, France" },
  { label: "Currently studying", value: "International Management" },
  { label: "Interested in", value: "Technology & cybersecurity" },
  { label: "Languages", value: "Arabic · French · English · Spanish" },
];

const About = () => (
  <div className="about-layout">
    <motion.div variants={fadeIn("right", "spring", 0.1, 0.7)}>
      <p className={styles.sectionSubText}>A little about me</p>
      <h2 className={styles.sectionHeadText}>More than one perspective.</h2>
      <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-secondary sm:text-lg">
        <p>
          I&apos;m Badr El Ghazaoui, an international management student at
          ESTICE, Université Catholique de Lille. My path has taken me from
          Morocco to France, and I&apos;m at my best when I can connect
          different perspectives.
        </p>
        <p>
          I&apos;m drawn to the way business, technology, and human stories
          shape one another. That curiosity takes form in hands-on projects,
          learning about cybersecurity, and writing on{" "}
          <a
            href="https://moondiscoveries.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-navy"
          >
            Moon Discoveries
          </a>
          .
        </p>
      </div>

      <div className="mt-9 flex flex-wrap gap-3">
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary"
        >
          View my résumé <span aria-hidden="true">↗</span>
        </a>
        <a
          href="https://www.linkedin.com/in/badr-el-ghazaoui"
          target="_blank"
          rel="noopener noreferrer"
          className="button-secondary"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/BadrrElGhazaoui"
          target="_blank"
          rel="noopener noreferrer"
          className="button-secondary"
        >
          GitHub
        </a>
      </div>
    </motion.div>

    <motion.aside
      variants={fadeIn("left", "spring", 0.2, 0.7)}
      className="about-facts"
      aria-label="Profile highlights"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        The essentials
      </p>
      <dl className="mt-5 divide-y divide-navy/10">
        {highlights.map(({ label, value }) => (
          <div
            key={label}
            className="grid gap-1 py-4 sm:grid-cols-[minmax(120px,0.7fr)_1fr] sm:gap-5"
          >
            <dt className="text-sm text-secondary">{label}</dt>
            <dd className="text-sm font-medium leading-6 text-navy">{value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-4 rounded-xl border border-accent/20 bg-accent/[0.06] p-4">
        <p className="text-sm leading-6 text-secondary">
          Rooted in Morocco. Learning and building a life in France.
        </p>
      </div>
    </motion.aside>
  </div>
);

export default SectionWrapper(About, "about");
