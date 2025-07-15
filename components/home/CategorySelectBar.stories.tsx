import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import CategorySelectBar from "./CategorySelectBar";
import { CategoryList } from "@/constants/mocks/CategoryList";

const meta: Meta<typeof CategorySelectBar> = {
  title: "Components/CategorySelectBar",
  component: CategorySelectBar,
  tags: ["autodocs"],
  argTypes: {
    selectedCategoryId: { control: "number" },
    onCategorySelect: { action: "onCategorySelect" },
  },
};

export default meta;
type Story = StoryObj<typeof CategorySelectBar>;

export const Default: Story = {
  args: {
    categoryList: CategoryList,
    selectedCategoryId: null,
    onCategorySelect: (categoryId) => console.log("Selected:", categoryId),
  },
};

const InteractiveCategorySelect = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  return (
    <CategorySelectBar
      categoryList={CategoryList}
      selectedCategoryId={selectedCategoryId}
      onCategorySelect={setSelectedCategoryId}
    />
  );
};

export const Interactive: Story = {
  render: () => <InteractiveCategorySelect />,
};
