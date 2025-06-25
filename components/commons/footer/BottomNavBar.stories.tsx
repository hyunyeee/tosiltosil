import type { Meta, StoryObj } from "@storybook/react";
import BottomNavBar from "./BottomNavBar";

const meta: Meta<typeof BottomNavBar> = {
  title: "Components/BottomNavBar",
  component: BottomNavBar,
  args: {
    mockPathname: "/home",
  },
};

export default meta;

type Story = StoryObj<typeof BottomNavBar>;

export const HomeActive: Story = {
  args: {
    mockPathname: "/home",
  },
};

export const SearchActive: Story = {
  args: {
    mockPathname: "/friend/search",
  },
};

export const CalendarActive: Story = {
  args: {
    mockPathname: "/calendar",
  },
};

export const FriendListActive: Story = {
  args: {
    mockPathname: "/friend/list",
  },
};
