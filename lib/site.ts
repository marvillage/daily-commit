// Who runs this paper, and where it lives.

export const OWNER = {
  name: "Kushagra Srivastava",
  github: "marvillage",
  x: "MaveStorm",
  portfolio: "https://portfolio3-kappa-rosy.vercel.app",
};

// host shown in the share pictures; set NEXT_PUBLIC_SITE_HOST for a custom domain
export const SITE_HOST = process.env.NEXT_PUBLIC_SITE_HOST ?? process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "localhost:3000";
