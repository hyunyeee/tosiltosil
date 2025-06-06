import type { Meta, StoryObj } from "@storybook/react";
import ConsentItem from "./ConsentItem";

const meta: Meta<typeof ConsentItem> = {
  title: "Components/Consent",
  component: ConsentItem,
  argTypes: {
    onCheckClick: { action: "onCheckClick" },
    onDetailInfoClick: { action: "onDetailInfoClick" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const IconBtn: Story = {
  args: {
    id: "1",
    label: "서비스 이용약관 동의",
    required: true,
    checked: false,
  },
};
