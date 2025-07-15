import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import FriendStatusBoard from "./FriendStatusBoard";

const meta: Meta<typeof FriendStatusBoard> = {
  title: "Components/FriendStatusBoard",
  component: FriendStatusBoard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FriendStatusBoard>;

export const Default: Story = {
  render: () => <FriendStatusBoard />,
};
