export interface Category {
  categoryId: number;
  title: string;
  color: string;
}

export interface GoalCardProps {
  categoryId: number;
  categoryName: string;
  color: string;
  title: string;
  state: "진행전" | "진행중" | "완료" | "실패";
  totalTime: string;
  duration: string;
  percentage: number;
  hasButton: boolean;
}
