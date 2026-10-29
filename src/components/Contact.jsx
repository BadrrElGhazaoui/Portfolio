import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEnvelope,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/badr-el-ghazaoui",
    icon: faLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/BadrrElGhazaoui",
    icon: faGithub,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/badr.elghazaoui",
    icon: faInstagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Badr-El-Ghazaoui",
    icon: faYoutube,
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "" });

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!accessKey) {
      console.error("Contact form is missing VITE_WEB3FORMS_KEY.");
      setStatus({
        type: "error",
        message: "The contact form is temporarily unavailable. Please email me directly.",
      });
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New message from ${form.name} via portfolio`,
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || `Request failed (${response.status}).`);
      }

      setForm({ name: "", email: "", message: "" });
      setStatus({ type: "success", message: "Thanks — your message has been sent." });
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus({
        type: "error",
        message: "Your message could not be sent. Please email me directly.",
      });
    }
  };

  return (
    <div className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
      <motion.aside
        variants={slideIn("right", "tween", 0.1, 0.65)}
        className="contact-intro flex flex-col justify-between rounded-3xl p-7 sm:p-9"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Get in touch
          </p>
          <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Let&apos;s start a conversation.
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
            Have an opportunity, a question, or an idea to share? I&apos;d be
            glad to hear from you.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          <a
            href="mailto:badr@badrelghazaoui.com"
            className="contact-detail"
          >
            <span className="contact-detail-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span>
              <span className="contact-detail-label">Email</span>
              <span className="contact-detail-value">badr@badrelghazaoui.com</span>
            </span>
            <FontAwesomeIcon icon={faArrowRight} className="ml-auto text-sm text-white/60" />
          </a>
          <a href="tel:+33776450955" className="contact-detail">
            <span className="contact-detail-icon">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <span>
              <span className="contact-detail-label">Phone</span>
              <span className="contact-detail-value">+33 7 76 45 09 55</span>
            </span>
            <FontAwesomeIcon icon={faArrowRight} className="ml-auto text-sm text-white/60" />
          </a>
          <a
            href="https://wa.me/33776450955"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-detail"
          >
            <span className="contact-detail-icon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </span>
            <span>
              <span className="contact-detail-label">WhatsApp</span>
              <span className="contact-detail-value">Send me a message</span>
            </span>
            <FontAwesomeIcon icon={faArrowRight} className="ml-auto text-sm text-white/60" />
          </a>
        </div>

        <div className="mt-9 border-t border-white/15 pt-6">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/60">
            Find me online
          </p>
          <div className="mt-4 flex gap-3">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="contact-social-link"
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </motion.aside>

      <motion.div
        variants={slideIn("left", "tween", 0.15, 0.65)}
        className="contact-form-card rounded-3xl p-6 sm:p-9"
      >
        <div>
          <p className={styles.sectionSubText}>Send a message</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            How can I help?
          </h3>
          <p className="mt-2 text-sm leading-6 text-secondary">
            I&apos;ll get back to you as soon as I can.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="contact-field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </label>
            <label className="contact-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </label>
          </div>

          <label className="contact-field">
            <span>Message</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me a little about what you have in mind..."
              required
            />
          </label>

          {status.message && (
            <p
              role={status.type === "error" ? "alert" : "status"}
              className={`text-sm leading-6 ${
                status.type === "error" ? "text-red-700" : "text-navy"
              }`}
            >
              {status.message}
            </p>
          )}

          <div className="flex flex-col gap-4 border-t border-navy/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-secondary">
              Your details are only used to reply to your message.
            </p>
            <button
              type="submit"
              disabled={status.type === "loading"}
              className="button-primary min-w-[170px] disabled:cursor-wait disabled:opacity-65"
            >
              <span>
                {status.type === "loading" ? "Sending..." : "Send message"}
              </span>
              <FontAwesomeIcon icon={faPaperPlane} aria-hidden="true" />
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
