import type { Meta, StoryObj } from "@storybook/react";
import PrimaryButton from "./PrimaryButton";

const meta: Meta<typeof PrimaryButton> = {
  title: "Components/PrimaryButton",
  component: PrimaryButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "button",
    size: "main",
    text: "primary버튼입니다",
    isActive: true,
  },
};
