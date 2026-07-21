export const GitHubIcon = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export const LinkedInIcon = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

export const ArrowIcon = ({ className = "size-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className} aria-hidden="true">
    <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ===== small stroke icons (domains & extracurriculars) ===== */

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

export const SparkIcon = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden="true">
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
    <path d="M19 15.5l.75 2 2 .75-2 .75-.75 2-.75-2-2-.75 2-.75.75-2z" />
  </svg>
);

export const CodeIcon = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden="true">
    <path d="M8 7l-5 5 5 5" />
    <path d="M16 7l5 5-5 5" />
    <path d="M13.5 4.5l-3 15" />
  </svg>
);

export const ServerIcon = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden="true">
    <rect x="3" y="4.5" width="18" height="6.5" rx="1.8" />
    <rect x="3" y="13" width="18" height="6.5" rx="1.8" />
    <path d="M7 7.75h.01M7 16.25h.01M11 7.75h.01M11 16.25h.01" />
  </svg>
);

export const DatabaseIcon = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden="true">
    <ellipse cx="12" cy="5.2" rx="7" ry="2.7" />
    <path d="M5 5.2v13.6c0 1.5 3.1 2.7 7 2.7s7-1.2 7-2.7V5.2" />
    <path d="M5 12c0 1.5 3.1 2.7 7 2.7s7-1.2 7-2.7" />
  </svg>
);

export const TrophyIcon = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden="true">
    <path d="M7 3.5h10v6.5a5 5 0 0 1-10 0V3.5z" />
    <path d="M7 5.5H4.2c-.4 0-.7.3-.7.7 0 2.3 1.6 4.1 3.7 4.4" />
    <path d="M17 5.5h2.8c.4 0 .7.3.7.7 0 2.3-1.6 4.1-3.7 4.4" />
    <path d="M12 15v3.5M8.5 21h7M12 18.5c-1.6 0-2.5 1-2.7 2.5M12 18.5c1.6 0 2.5 1 2.7 2.5" />
  </svg>
);

export const UsersIcon = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden="true">
    <circle cx="9" cy="8" r="3.4" />
    <path d="M2.8 20c.4-3.4 3-5.5 6.2-5.5s5.8 2.1 6.2 5.5" />
    <circle cx="16.8" cy="9.2" r="2.6" />
    <path d="M17.6 14.6c2.3.5 3.8 2.1 4.1 4.4" />
  </svg>
);

export const CompassIcon = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="8.7" />
    <path d="M15.6 8.4l-2.2 5-5 2.2 2.2-5 5-2.2z" />
  </svg>
);

export const TennisIcon = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="8.7" />
    <path d="M5.2 6.2c3.2 2.2 3.2 9.4 0 11.6" />
    <path d="M18.8 6.2c-3.2 2.2-3.2 9.4 0 11.6" />
  </svg>
);
