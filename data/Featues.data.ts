interface FeatuesData {
  category: string;
  title: string;
  description: string;
  category_color: string;
  full_width: boolean;
}

export const Features: FeatuesData[] = [
  {
    category: "Capture Ideas Swiftly",
    title: "Turn Ideas into Reality with a Single Touch",
    description:
      "Never miss important moments! With Avion, you can effortlessly add tasks and to-dos in an\n" +
      "instant. Whether it's a note, a deadline, or crucial milestones, we'll help you input\n" +
      "everything into your task list.",
    category_color: "rgb(221,49,7)",
    full_width: true,
  },
  {
    category: "Prioritize with Precision",
    title: "Your World, Your Order",
    description:
      "Organize your tasks as you prefer. Avion enables you to create categories. Sort tasks by date, priority, or category to always stay in the loop about what matters today.",
    category_color: "rgb(235,153,0)",
    full_width: false,
  },
  {
    category: "Style Your Workspace",
    title: "Design Reflects Your Style",
    description:
      "Your workspace, your style. Avion offers you a range of themes to choose from, ensuring your eyes always delight in the convenience and beauty of the interface.",
    category_color: "rgb(83,188,42)",
    full_width: false,
  },
  {
    category: "Details Make Triumphs",
    title: "Details: The Key to Success",
    description:
      "Details matter! Evaluate tasks by priority, attach notes and files to ensure nothing escapes your attention. Avion allows you to focus on the finer points, enabling you to achieve great results.",
    category_color: "rgb(120,58,245)",
    full_width: true,
  },
];
