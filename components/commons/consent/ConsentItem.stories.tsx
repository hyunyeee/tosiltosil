import type { Meta, StoryObj } from "@storybook/react";
import ConsentItemComponent from "./ConsentItem";

const meta: Meta<typeof ConsentItemComponent> = {
  title: "Components/Consent",
  component: ConsentItemComponent,
  argTypes: {
    onCheckClick: { action: "onCheckClick" },
    onDetailInfoClick: { action: "onDetailInfoClick" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ConsentItem: Story = {
  args: {
    id: "1",
    label: "서비스 이용약관 동의",
    required: true,
    checked: false,
  },
};
