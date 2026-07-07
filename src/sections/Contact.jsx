import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { identity } from "../data/content";
import { GitHubIcon, LinkedInIcon, ArrowIcon } from "../components/Icons";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export default function Contact() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!WEB3FORMS_KEY) {
      setStatus({
        state: "error",
        message: `Form isn't wired up yet — email me directly at ${identity.email}`,
      });
      return;
    }

    setStatus({ state: "sending", message: "" });
    const formData = new FormData(e.target);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", "Portfolio contact form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ state: "success", message: "Message received. I'll get back to you soon." });
        e.target.reset();
      } else {
        throw new Error(data.message);
      }
    } catch {
      setStatus({
        state: "error",
        message: `Something broke — reach me directly at ${identity.email}`,
      });
    }
  };

  const inputCls =
    "w-full border border-edge bg-surface px-4 py-3 text-fog placeholder:text-mist/60 focus:border-neon focus:outline-none transition-colors";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-28 scroll-mt-20">
      <SectionHeading index="05" label="Signal" title="Get In Touch" />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        {/* direct channels */}
        <div>
          <p className="text-lg text-fog/85 leading-relaxed max-w-sm">
            Open to research collaborations, internships, and interesting problems.
            Fastest way in:
          </p>
          <a
            href={`mailto:${identity.email}`}
            className="group mt-6 inline-flex items-center gap-2 text-xl sm:text-2xl font-bold text-neon hover:text-fog transition-colors break-all"
          >
            {identity.email}
            <ArrowIcon className="size-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <div className="mt-8 flex gap-5">
            <a href={identity.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="panel p-3 text-mist hover:text-neon hover:border-neon/50 transition-colors">
              <GitHubIcon className="size-6" />
            </a>
            <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="panel p-3 text-mist hover:text-neon hover:border-neon/50 transition-colors">
              <LinkedInIcon className="size-6" />
            </a>
          </div>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input type="text" name="name" placeholder="Name" required className={inputCls} />
            <input type="email" name="email" placeholder="Email" required className={inputCls} />
          </div>
          <textarea name="message" placeholder="Message" required rows="6" className={inputCls} />
          <button
            type="submit"
            disabled={status.state === "sending"}
            className="inline-flex items-center gap-2 bg-neon px-8 py-3 font-mono text-sm font-bold tracking-widest text-ink uppercase transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)" }}
          >
            {status.state === "sending" ? "Sending..." : "Send it"}
          </button>

          {status.message && (
            <p
              role="status"
              className={`font-mono text-sm ${status.state === "success" ? "text-neon" : "text-hot"}`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
