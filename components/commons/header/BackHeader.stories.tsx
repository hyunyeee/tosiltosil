import type { Meta, StoryObj } from "@storybook/react";
import BackHeaderComponent from "./BackHeader";

const meta: Meta<typeof BackHeaderComponent> = {
  title: "Components/Header",
  component: BackHeaderComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BackHeader: Story = {
  args: {
    hasNotification: false,
  },
};
