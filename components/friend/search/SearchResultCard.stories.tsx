import type { Meta, StoryObj } from "@storybook/react";
import SearchResultCard from "@/components/friend/search/SearchResultCard";

const meta: Meta<typeof SearchResultCard> = {
  title: "Search/SearchResultCard",
  component: SearchResultCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Friend: Story = {
  args: {
    nickname: "김하늘",
    profileImg: "https://randomuser.me/api/portraits/women/68.jpg",
    code: "100001",
    relationship: "FRIEND",
  },
};

export const Pending: Story = {
  args: {
    nickname: "박지민",
    profileImg: "https://randomuser.me/api/portraits/men/75.jpg",
    code: "100002",
    relationship: "PENDING",
  },
};

export const NoRelationship: Story = {
  args: {
    nickname: "이수연",
    profileImg: "",
    code: "100003",
    relationship: undefined,
  },
};

export const Profile: Story = {
  args: {
    nickname: "정예린",
    profileImg: "https://randomuser.me/api/portraits/women/55.jpg",
    code: "100004",
    relationship: 'FRIEND',
  },
};

export const NoProfile: Story = {
  args: {
    nickname: "한세린",
    profileImg: "",
    code: "100005",
    relationship: "FRIEND",
  },
};
