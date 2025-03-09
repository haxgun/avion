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
  color: string;
}

export const FooterNavData: FooterNav[] = [
  {
    title: "landing.footer.nav.first.title",
    items: [
      {
        title: "landing.footer.nav.first.items.first",
        link: "/about",
      },
      {
        title: "landing.footer.nav.first.items.second",
        link: "/contact",
      },
    ],
  },
  {
    title: "landing.footer.nav.second.title",
    items: [
      {
        title: "landing.footer.nav.second.items.first",
        link: "/download",
      },
      {
        title: "landing.footer.nav.second.items.second",
        link: "/support",
      },
      {
        title: "landing.footer.nav.second.items.third",
        link: "/productivity",
      },
      {
        title: "landing.footer.nav.second.items.fourth",
        link: "/techniques",
      },
      {
        title: "landing.footer.nav.second.items.fifth",
        link: "/status",
      },
    ],
  },
  {
    title: "landing.footer.nav.third.title",
    items: [
      {
        title: "landing.footer.nav.third.items.first",
        link: "/how",
      },
      {
        title: "landing.footer.nav.third.items.second",
        link: "/team",
      },
    ],
  },
];

export const FooterData: FooterData[] = [
  {
    title: "landing.footer.under.nav.security",
    link: "/security",
  },
  {
    title: "landing.footer.under.nav.privacy",
    link: "/privacy",
  },
  {
    title: "landing.footer.under.nav.conditions",
    link: "/conditions",
  },
];

export const FooterSocialData: FooterSocialData[] = [
  {
    title: "X",
    icon: IconsX,
    link: "https://www.x.com",
    color: "#000"
  },
  {
    title: "Instagram",
    icon: IconsInstagram,
    link: "https://www.instagram.com",
    color: "#DD2A7B"
  },
  {
    title: "Github",
    icon: IconsGithub,
    link: "https://www.github.com",
    color: "#211F1F"
  },
  {
    title: "Discord",
    icon: IconsDiscord,
    link: "https://discord.com",
    color: "#738ADB"
  },
  {
    title: "VK",
    icon: IconsVK,
    link: "https://vk.com",
    color: "#5181B8"
  },
];
