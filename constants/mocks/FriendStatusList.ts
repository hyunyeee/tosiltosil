interface FriendStatus {
  memberId: string;
  nickname: string;
  profileImg: string;
  totalTime: string;
  status: "ACTIVE" | "INACTIVE";
}

export const friendStatusList: FriendStatus[] = [
  {
    memberId: "1",
    nickname: "김하늘",
    profileImg: "",
    totalTime: "PT1H30M45S",
    status: "ACTIVE",
  },
  {
    memberId: "2",
    nickname: "최준호",
    profileImg: "https://randomuser.me/api/portraits/men/43.jpg",
    totalTime: "PT45M15S",
    status: "INACTIVE",
  },
  {
    memberId: "3",
    nickname: "이서연",
    profileImg: "https://randomuser.me/api/portraits/women/44.jpg",
    totalTime: "PT2H5M10S",
    status: "ACTIVE",
  },
  {
    memberId: "4",
    nickname: "박지후",
    profileImg: "",
    totalTime: "PT30M",
    status: "INACTIVE",
  },
  {
    memberId: "5",
    nickname: "정민지",
    profileImg: "",
    totalTime: "PT1H10M",
    status: "ACTIVE",
  },
  {
    memberId: "6",
    nickname: "오세훈",
    profileImg: "https://randomuser.me/api/portraits/men/65.jpg",
    totalTime: "PT55M40S",
    status: "ACTIVE",
  },
  {
    memberId: "7",
    nickname: "유다은",
    profileImg: "https://randomuser.me/api/portraits/women/37.jpg",
    totalTime: "PT1H",
    status: "INACTIVE",
  },
  {
    memberId: "8",
    nickname: "한지민",
    profileImg: "https://randomuser.me/api/portraits/women/66.jpg",
    totalTime: "PT25M15S",
    status: "ACTIVE",
  },
  {
    memberId: "9",
    nickname: "서강준",
    profileImg: "",
    totalTime: "PT1H20M5S",
    status: "INACTIVE",
  },
  {
    memberId: "10",
    nickname: "장보라",
    profileImg: "",
    totalTime: "PT40M",
    status: "ACTIVE",
  },
];
