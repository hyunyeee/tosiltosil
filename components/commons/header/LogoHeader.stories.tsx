import type { Meta, StoryObj } from "@storybook/react";
import LogoHeaderComponent from "./LogoHeader";

const meta: Meta<typeof LogoHeaderComponent> = {
  title: "Components/Header",
  component: LogoHeaderComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoHeader: Story = {
  args: {
    hasNotification: false,
  },
};
