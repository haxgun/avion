import { CalendarDate, CheckSquareBroken, HomeSmile } from "untitledui-js/vue";

interface TSidebarData {
  icon: object;
  label: string;
  count: number;
}

export const SidebarData: TSidebarData[] = [
  {
    icon: HomeSmile,
    label: "Home",
    count: 1,
  },
  {
    icon: CheckSquareBroken,
    label: "Completed",
    count: 7,
  },
  {
    icon: CalendarDate,
    label: "Today",
    count: 0,
  },
];
