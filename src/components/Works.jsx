import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_project_link,
  live_project_label,
  trailer_link,
  animate,
}) => {
  return (
    <motion.div variants={animate}>
      <Tilt
        options={{
          max: 7,
          scale: 1,
          speed: 350,
        }}
        className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-4 shadow-card transition-colors duration-300 hover:border-accent/40"
      >
        <div className="relative h-[220px] w-full overflow-hidden rounded-xl border border-navy/5 bg-[#eef2f7]">
          <img
            src={image}
            alt={name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
          />

          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${name} source code on GitHub`}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-navy shadow-md transition-all duration-300 hover:scale-105 hover:bg-accent"
              >
                <img
                  src={github}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-5 w-5 object-contain"
                />
              </a>
            </div>
          )}
        </div>

        <div className="mt-5 flex-1">
          <h3 className="text-[21px] font-semibold tracking-tight text-navy">
            {name}
          </h3>
          <p className="mt-2 min-h-[72px] text-sm leading-6 text-secondary">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p
              key={index}
              className="rounded-full border border-navy/10 bg-primary px-2.5 py-1 text-[11px] font-medium text-secondary"
            >
              {tag.name}
            </p>
          ))}
        </div>

        {(live_project_link || trailer_link) && (
          <div className="mt-auto flex flex-wrap gap-3 pt-4">
            {live_project_link && (
              <a
                href={live_project_link}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary min-h-10 rounded-lg px-4 py-2 text-xs"
              >
                {live_project_label || "Live Project"}
              </a>
            )}

            {trailer_link && (
              <a
                href={trailer_link}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary min-h-10 rounded-lg px-4 py-2 text-xs"
              >
                ▶ Trailer
              </a>
            )}
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h3 className={styles.sectionSubText}>Selected work</h3>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h3 className={styles.sectionHeadText}>Projects</h3>
          <p className="max-w-xl text-sm leading-6 text-secondary sm:text-right">
            A few ways I bring business, technology, and creativity together.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
        className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            animate={fadeIn("up", "spring", 0, 0.55)}
            {...project}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
