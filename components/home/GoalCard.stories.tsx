import { Meta, StoryObj } from "@storybook/react";
import GoalCard from "./GoalCard";

const meta: Meta<typeof GoalCard> = {
  title: "Components/GoalCard",
  component: GoalCard,
  tags: ["autodocs"],
  argTypes: {
    categoryName: { control: "text" },
    color: { control: "text" },
    title: { control: "text" },
    state: {
      control: "select",
      options: ["진행전", "진행중", "완료", "실패"],
    },
    duration: { control: "text" },
    totalTime: { control: "text" },
    percentage: { control: "number", min: 0, max: 100 },
    hasButton: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof GoalCard>;

export const Default: Story = {
  args: {
    categoryName: "운동",
    color: "blue",
    title: "매일 아침 30분 걷기",
    state: "진행중",
    duration: "PT30M",
    totalTime: "PT1H",
    percentage: 50,
    hasButton: true,
  },
};

export const Before: Story = {
  args: {
    categoryName: "매일할 것",
    color: "coral",
    title: "기상 후 스트레칭",
    state: "진행전",
    totalTime: "PT0S",
    duration: "PT0S",
    percentage: 0,
    hasButton: true,
  },
};

export const Completed: Story = {
  args: {
    categoryName: "독서",
    color: "red",
    title: "한 달에 책 2권 읽기",
    state: "완료",
    duration: "PT20H",
    totalTime: "PT20H",
    percentage: 100,
    hasButton: false,
  },
};

export const Failed: Story = {
  args: {
    categoryName: "명상",
    color: "green",
    title: "하루 10분 명상하기",
    state: "실패",
    duration: "PT0H",
    totalTime: "PT10M",
    percentage: 20,
    hasButton: false,
  },
};
