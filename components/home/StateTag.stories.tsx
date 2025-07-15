import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import StateTag from "./StateTag";
import { STATE_STYLE_MAP, StateTagProps } from "@/constants/stateTagMap";

const stateList = Object.keys(STATE_STYLE_MAP) as StateTagProps["state"][];

const meta: Meta<typeof StateTag> = {
  title: "Components/StateTag",
  component: StateTag,
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: stateList,
    },
  },
};

export default meta;
type Story = StoryObj<typeof StateTag>;

export const Default: Story = {
  args: {
    state: stateList[0],
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {stateList.map((state) => (
        <StateTag key={state} state={state} />
      ))}
    </div>
  ),
};
