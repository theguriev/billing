const siteConfig = {
  name: "Blls",
  url: "https://blls.me",
  ogImage: "https://blls.me/og.png",
  title:
    '"Create your own cryptocurrency or points system in minutes | Easy and secure",',
  description:
    "Effortlessly design and launch your custom cryptocurrency, points, or credits system with our user-friendly platform. Enjoy quick setup, enhanced security, and complete control without the need for distributed servers. Start creating your digital currency today!",
  links: {
    twitter: "https://twitter.com/theguriev",
    instagram: "https://www.instagram.com/theguriev",
    github: "https://github.com/theguriev",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export default siteConfig;
