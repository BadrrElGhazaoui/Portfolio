import { motion } from "framer-motion";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const Education = () => (
  <div>
    <motion.div variants={fadeIn("up", "spring", 0.1, 0.65)}>
      <p className={styles.sectionSubText}>Academic background</p>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className={styles.sectionHeadText}>Education</h2>
        <p className="max-w-xl text-sm leading-6 text-secondary sm:text-right">
          From foundational studies in Morocco to international management in
          France.
        </p>
      </div>
    </motion.div>

    <div className="mt-10 grid gap-4 lg:grid-cols-3">
      {education.map((item, index) => (
        <motion.article
          key={`${item.company_name}-${item.date}`}
          variants={fadeIn("up", "spring", index * 0.1, 0.65)}
          className="education-card"
        >
          <div className="flex items-start justify-between gap-4">
            <span className="education-icon">
              <img
                src={item.icon}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-8 w-8 object-contain"
              />
            </span>
            <span className="education-date">{item.date}</span>
          </div>

          <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-navy">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-secondary">
            {item.company_name}
          </p>

          <ul className="mt-5 space-y-3 border-t border-navy/10 pt-5">
            {item.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-6 text-secondary"
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

export default SectionWrapper(Education, "education");
