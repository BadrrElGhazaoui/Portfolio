import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import {
  python,
  trojan,
  tor,
  metasploit,
  javascript,
  java,
  cplusplus,
  typescript,
  reactjs,
  threejs,
  powershell,
  virtualbox,
  kalilinux,
  wireshark,
  hydra,
  nmap,
  html,
  mysql,
  linux,
  johntheripper,
  encgsettat,
  estice,
  pedroPieces,
} from "../assets";

const skillGroups = [
  {
    number: "01",
    title: "Business & professional",
    institutions: [
      {
        name: "ENCG Settat",
        icon: encgsettat,
        skills: ["Commerce & management foundations"],
      },
      {
        name: "Pedro Pièces",
        icon: pedroPieces,
        skills: [
          "Accounting support",
          "Data entry & reporting",
          "Excel & Word",
          "Document organization",
          "Email & appointment coordination",
        ],
      },
      {
        name: "ESTICE Lille",
        icon: estice,
        skills: [
          "International management",
          "French–English communication",
          "Cross-cultural awareness",
        ],
      },
    ],
  },
  {
    number: "02",
    title: "Development & data",
    skills: [
      { name: "Python", icon: python },
      { name: "HTML", icon: html },
      { name: "MySQL", icon: mysql },
      { name: "Java", icon: java },
      { name: "C++", icon: cplusplus },
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "React", icon: reactjs },
      { name: "Three.js", icon: threejs },
    ],
  },
  {
    number: "03",
    title: "Cybersecurity & IT",
    skills: [
      { name: "Tor", icon: tor, link: "https://moondiscoveries.com/2026-05-21-Tor/" },
      { name: "Metasploit", icon: metasploit },
      { name: "PowerShell", icon: powershell },
      {
        name: "Linux",
        icon: linux,
        link: "https://www.scribd.com/document/1060878547/Kali-Linux-Cheat-Sheet",
      },
      { name: "VirtualBox", icon: virtualbox },
      { name: "Kali Linux", icon: kalilinux, link: "https://moondiscoveries.com/2026-05-22-Kali-Linux/" },
      { name: "Hydra", icon: hydra },
      { name: "Trojans", icon: trojan, link: "https://moondiscoveries.com/2026-06-01-Trojans/" },
      { name: "Wireshark", icon: wireshark },
      { name: "Nmap", icon: nmap, link: "https://moondiscoveries.com/2026-04-30-Nmap/" },
      { name: "John the Ripper", icon: johntheripper },
    ],
  },
];

const Tech = () => (
  <div className="skills">
    <motion.div variants={fadeIn("up", "spring", 0.1, 0.65)}>
      <p className={styles.sectionSubText}>A practical toolkit</p>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className={styles.sectionHeadText}>Skills &amp; tools</h2>
        <p className="max-w-xl text-sm leading-6 text-secondary sm:text-right">
          A mix of business foundations, workplace experience, and technical
          skills shaped by study and hands-on practice.
        </p>
      </div>
    </motion.div>

    <div className="mt-8">
      {skillGroups.map((group, index) => (
        <motion.div
          key={group.number}
          variants={fadeIn("up", "spring", index * 0.1, 0.65)}
          className="skill-group"
        >
          <div className="flex items-start gap-4">
            <span className="pt-1 text-xs font-medium tracking-widest text-accent">
              {group.number}
            </span>
            <h3 className="text-sm font-semibold text-navy sm:text-base">
              {group.title}
            </h3>
          </div>

          {group.institutions ? (
            <ul className="business-skill-list">
              {group.institutions.map((institution) => (
                <li key={institution.name} className="business-skill-card">
                  <span className="business-skill-logo">
                    <img
                      src={institution.icon}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="business-skill-source">{institution.name}</span>
                    <span className="business-skill-description">
                      {institution.skills.join(" · ")}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => {
                const content = (
                  <>
                    {skill.icon ? (
                      <span className="skill-icon">
                        <img
                          src={skill.icon}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-contain"
                        />
                      </span>
                    ) : null}
                    <span>{skill.name}</span>
                  </>
                );

                return (
                  <li key={skill.name}>
                    {skill.link ? (
                      <a
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="skill-chip"
                      >
                        {content}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      <span className="skill-chip">{content}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  </div>
);

export default SectionWrapper(Tech, "skills");
