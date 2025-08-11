import type { Meta, StoryObj } from "@storybook/react";
import PolicyFooterComponent from "./PolicyFooter";

const meta: Meta<typeof PolicyFooterComponent> = {
  title: "Components/Footer",
  component: PolicyFooterComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PolicyFooter: Story = {};
