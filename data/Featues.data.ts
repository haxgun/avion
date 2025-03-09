interface FeatuesData {
  category: string;
  title: string;
  description: string;
  category_color: string;
  full_width: boolean;
}

export const Features: FeatuesData[] = [
  {
    category: "landing.features.first.category",
    title: "landing.features.first.title",
    description: "landing.features.first.description",
    category_color: "rgb(221,49,7)",
    full_width: true,
  },
  {
    category: "landing.features.second.category",
    title: "landing.features.second.title",
    description: "landing.features.second.description",
    category_color: "rgb(235,153,0)",
    full_width: false,
  },
  {
    category: "landing.features.third.category",
    title: "landing.features.third.title",
    description: "landing.features.third.description",
    category_color: "rgb(83,188,42)",
    full_width: false,
  },
  {
    category: "landing.features.fourth.category",
    title: "landing.features.fourth.title",
    description: "landing.features.fourth.description",
    category_color: "rgb(120,58,245)",
    full_width: true,
  },
];
