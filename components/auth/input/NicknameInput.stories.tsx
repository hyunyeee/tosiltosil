import type { Meta, StoryObj } from "@storybook/react";
import NicknameInput from "@/components/auth/input/NicknameInput";
import { AUTH_ERROR_MESSAGE } from "@/constants/authErrorMessage";

const meta: Meta<typeof NicknameInput> = {
  title: "Auth/NicknameInput",
  component: NicknameInput,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyNickname: Story = {
  args: {
    value: "",
    onInputChange: (value: string) => console.log("Input changed:", value),
  },
};

export const ValidNickname: Story = {
  args: {
    value: "사용자123",
    onInputChange: (value: string) => console.log("Input changed:", value),
  },
};

export const ErrorNickname: Story = {
  args: {
    value: "ㅇ",
    errorMessage: AUTH_ERROR_MESSAGE.NICKNAME,
    onInputChange: (value: string) => console.log("Input changed:", value),
  },
};
