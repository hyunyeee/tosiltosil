import type { Meta, StoryObj } from "@storybook/react";
import PrimaryButtonComponent from "./PrimaryButton";

const meta: Meta<typeof PrimaryButtonComponent> = {
  title: "Components/Button",
  component: PrimaryButtonComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    type: "button",
    size: "main",
    text: "primary 버튼입니다",
    isActive: true,
  },
};
