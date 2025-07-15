import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import WeekDateSelector from "./WeekDateSelector";

const meta: Meta<typeof WeekDateSelector> = {
  title: "Components/WeekDateSelector",
  component: WeekDateSelector,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WeekDateSelector>;

export const Default: Story = {
  render: () => <WeekDateSelector />,
};
