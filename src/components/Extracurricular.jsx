import { motion } from "framer-motion";

import { styles } from "../styles";
import { extracurricular } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const CertificationCard = ({
  title,
  icon,
  type,
  date,
  points,
  credential,
  pdf,
  requestEmail,
}) => (
  <article className="certification-card flex h-full flex-col rounded-2xl p-6">
    <div className="flex items-start gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-navy/10 bg-white p-2">
        <img
          src={icon}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain"
        />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          {date}
        </p>
        <p className="certification-type mt-1 text-xs leading-5 text-secondary">
          {type}
        </p>
      </div>
    </div>

    <h3 className="mt-5 text-lg font-semibold leading-6 tracking-tight text-navy">
      {title}
    </h3>
    <ul className="mt-4 flex-1 space-y-2 border-t border-navy/10 pt-4">
      {points.slice(0, 2).map((point) => (
        <li key={point} className="flex gap-2 text-sm leading-6 text-secondary">
          <span
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
          />
          <span>{point}</span>
        </li>
      ))}
    </ul>

    {(credential || pdf || requestEmail) && (
      <div className="mt-5 flex flex-wrap gap-2">
        {credential && (
          <a
            href={credential}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary min-h-10 rounded-lg px-4 py-2 text-xs"
          >
            View credential <span aria-hidden="true">↗</span>
          </a>
        )}
        {pdf && (
          <a
            href={pdf}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary min-h-10 rounded-lg px-4 py-2 text-xs"
          >
            PDF
          </a>
        )}
        {requestEmail && (
          <a
            href={`mailto:badr@badrelghazaoui.com?subject=${encodeURIComponent(
              `Certificate request: ${title}`,
            )}&body=${encodeURIComponent(
              `Hello Badr,\n\nI would like to request a copy of your ${title} certificate.\n\nThank you.`,
            )}`}
            className="button-secondary min-h-10 rounded-lg px-4 py-2 text-xs"
          >
            Request certificate <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    )}
  </article>
);

const Extracurricular = () => (
  <div>
    <motion.div variants={fadeIn("up", "spring", 0.1, 0.65)}>
      <p className={`${styles.sectionSubText} text-center`}>
        Continuous learning
      </p>
      <h2 className={`${styles.sectionHeadText} mt-2 text-center`}>
        Certifications
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-secondary sm:text-base">
        Selected professional, language, and international learning
        achievements.
      </p>
    </motion.div>

    <div className="mt-10 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {extracurricular.map((certification) => (
        <div
          key={`${certification.title}-${certification.date}`}
          className="min-w-0"
        >
          <CertificationCard {...certification} />
        </div>
      ))}
    </div>
  </div>
);

export default SectionWrapper(Extracurricular, "extracurricular");
