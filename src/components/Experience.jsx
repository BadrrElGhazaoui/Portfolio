import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const Experience = () => (
  <div>
    <motion.div variants={fadeIn("up", "spring", 0.1, 0.65)}>
      <p className={`${styles.sectionSubText} text-center`}>
        Professional experience
      </p>
      <h2 className={`${styles.sectionHeadText} mt-2 text-center`}>
        Work Experience
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-secondary sm:text-base">
        Practical experience supporting business operations and working with
        people, information, and everyday office tools.
      </p>
    </motion.div>

    <div className="mt-10 space-y-5">
      {experiences.map((experience, index) => (
        <motion.article
          key={`${experience.company_name}-${experience.date}`}
          variants={fadeIn("up", "spring", index * 0.1, 0.6)}
          className="experience-card grid gap-7 p-6 sm:p-8 lg:grid-cols-[minmax(220px,0.7fr)_minmax(0,1.3fr)] lg:gap-10"
        >
          <div className="flex items-start gap-4 lg:flex-col lg:gap-5">
            <span className="experience-logo">
              <img
                src={experience.icon}
                alt={`${experience.company_name} logo`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain"
              />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {experience.date}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-navy">
                {experience.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-secondary">
                {experience.company_name}
              </p>
            </div>
          </div>

          <ul className="space-y-3 border-t border-navy/10 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-1">
            {experience.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-6 text-secondary sm:text-base"
              >
                <span
                  aria-hidden="true"
                  className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </div>
);

export default SectionWrapper(Experience, "work");
