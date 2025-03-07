import { IconsDiscord, IconsGithub, IconsInstagram, IconsVK, IconsX } from "#components";

interface FooterNav {
  title: string;
  items: {
    title: string;
    link: string;
  }[];
}

interface FooterData {
  title: string;
  link: string;
}

interface FooterSocialData {
  title: string;
  icon: any;
  link: string;
}

export const FooterNavData: FooterNav[] = [
  {
    title: "Avion",
    items: [
      {
        title: "About Us",
        link: "/about",
      },
      {
        title: "Contact Us",
        link: "/contact",
      },
    ],
  },
  {
    title: "Resourses",
    items: [
      {
        title: "Download app",
        link: "/download",
      },
      {
        title: "Support",
        link: "/support",
      },
      {
        title: "Productivity",
        link: "/productivity",
      },
      {
        title: "Techniques",
        link: "/techniques",
      },
      {
        title: "Status",
        link: "/status",
      },
    ],
  },
  {
    title: "Possibilities",
    items: [
      {
        title: "How it work",
        link: "/how",
      },
      {
        title: "For team",
        link: "/team",
      },
    ],
  },
];

export const FooterData: FooterData[] = [
  {
    title: "Security",
    link: "/security",
  },
  {
    title: "Privacy",
    link: "/privacy",
  },
  {
    title: "Conditions",
    link: "/conditions",
  },
];

export const FooterSocialData: FooterSocialData[] = [
  {
    title: "X",
    icon: IconsX,
    link: "https://www.x.com",
  },
  {
    title: "Instagram",
    icon: IconsInstagram,
    link: "https://www.instagram.com",
  },
  {
    title: "Github",
    icon: IconsGithub,
    link: "https://www.github.com",
  },
  {
    title: "Discord",
    icon: IconsDiscord,
    link: "https://discord.com",
  },
  {
    title: "VK",
    icon: IconsVK,
    link: "https://vk.com",
  },
];
