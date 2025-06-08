import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Components/Button",
  component: IconButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const IconBtn: Story = {
  args: {
    type: "button",
    text: "button",
    sort: "email",
  },
};
