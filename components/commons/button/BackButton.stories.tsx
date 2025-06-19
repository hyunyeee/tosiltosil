import type { Meta, StoryObj } from "@storybook/react";
import BackButtonComponent from "./BackButton";

const meta: Meta<typeof BackButtonComponent> = {
  title: "Components/Button",
  component: BackButtonComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BackButton: Story = {};
