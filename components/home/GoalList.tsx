import GoalCard from "@/components/home/GoalCard";
import { GoalCardProps } from "@/types/goal";

interface GoalListProps {
  goalList: GoalCardProps[];
}

const GoalList = ({ goalList }: GoalListProps) => {
  return (
    <div className="bg-gray-card flex w-full flex-1 flex-col gap-[20px] border-t-[1px] border-t-black/10 py-[20px] pr-[18px] pl-[17px]">
      {goalList.map((goal, index) => (
        <GoalCard key={index} {...goal} />
      ))}
    </div>
  );
};

export default GoalList;
