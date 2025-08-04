import { Meta, StoryObj } from "@storybook/react";
import GoalList from "./GoalList";
import { GoalListData } from "@/constants/mocks/GoalList";

const meta: Meta<typeof GoalList> = {
  title: "Components/GoalList",
  component: GoalList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof GoalList>;

export const Default: Story = {
  args: {
    goalList: GoalListData,
  },
};
