export interface GoalCardData {
  categoryId: number;
  categoryName: string;
  color: string;
  title: string;
  state: "진행전" | "진행중" | "완료" | "실패";
  totalTime: string;
  duration: string;
  percentage: number;
}

export interface GoalCardProps extends GoalCardData {
  hasButton?: boolean;
}
