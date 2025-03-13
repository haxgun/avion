import { CalendarDate, CheckSquareBroken, HomeSmile } from "untitledui-js/vue";

interface TSidebarData {
  icon: object;
  label: string;
  count: number;
}

export const SidebarData: TSidebarData[] = [
  {
    icon: HomeSmile,
    label: "app.sidebar.home",
    count: 1,
  },
  {
    icon: CheckSquareBroken,
    label: "app.sidebar.completed",
    count: 7,
  },
  {
    icon: CalendarDate,
    label: "app.sidebar.today",
    count: 0,
  },
];
