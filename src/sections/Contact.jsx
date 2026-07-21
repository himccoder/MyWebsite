import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { HandArrow } from "../components/Doodles";
import { identity } from "../data/content";
import { GitHubIcon, LinkedInIcon, ArrowIcon } from "../components/Icons";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export default function Contact() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // No form key configured — hand the message off to their mail client instead.
    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(`Portfolio message from ${formData.get("name")}`);
      const body = encodeURIComponent(
        `${formData.get("message")}\n\n— ${formData.get("name")} (${formData.get("email")})`
      );
      window.location.href = `mailto:${identity.email}?subject=${subject}&body=${body}`;
      setStatus({ state: "success", message: "Opening your email app with the message ready to send." });
      return;
    }

    setStatus({ state: "sending", message: "" });
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
    "w-full rounded-lg border border-edge bg-surface px-4 py-3 text-fog placeholder:text-faint focus:border-amber focus:outline-none transition-colors";

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-28">
      <SectionHeading title="Contact" />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        {/* direct channels */}
        <div>
          <p className="max-w-sm text-lg leading-relaxed text-fog/85">
            Open to research collaborations, internships and genuinely interesting problems. The
            fastest way in:
          </p>
          <HandArrow className="ml-4 mt-2 h-12 w-20" />
          <a
            href={`mailto:${identity.email}`}
            className="group mt-6 inline-flex items-center gap-2 break-all text-xl font-semibold text-amber transition-colors hover:text-fog sm:text-2xl"
          >
            {identity.email}
            <ArrowIcon className="size-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <div className="mt-8 flex gap-4">
            <a href={identity.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="panel rounded-xl p-3 text-mist transition-colors hover:border-fog/40 hover:text-fog">
              <GitHubIcon className="size-6" />
            </a>
            <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="panel rounded-xl p-3 text-mist transition-colors hover:border-[#0a66c2]/50 hover:text-[#0a66c2]">
              <LinkedInIcon className="size-6" />
            </a>
          </div>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input type="text" name="name" placeholder="Your name" required className={inputCls} />
            <input type="email" name="email" placeholder="Your email" required className={inputCls} />
          </div>
          <textarea name="message" placeholder="Your message" required rows="6" className={inputCls} />
          <button
            type="submit"
            disabled={status.state === "sending"}
            className="inline-flex items-center gap-2 rounded-full bg-amber px-8 py-3 text-sm font-semibold text-ink transition-all hover:bg-ember hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {status.state === "sending" ? "Sending…" : "Send message"}
          </button>

          {status.message && (
            <p
              role="status"
              className={`font-mono text-sm ${status.state === "success" ? "text-amber" : "text-ember"}`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
