"use client";

import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/commons/button/PrimaryButton";

interface GoalPercentageProps {
  percentage: number;
  hasButton: boolean;
}
const GoalPercentage = ({ percentage, hasButton }: GoalPercentageProps) => {
  const router = useRouter();

  const navigateToCreateGoalPage = () => {
    router.push("/goal/create");
  };

  return (
    <div className="mx-[20px] mt-[22px] mb-[17px] flex items-center justify-between">
      <p className="body2 text-primary-deepGray">
        오늘 목표량까지
        <b className="body1 text-primary-mainText"> {percentage}%</b>
      </p>
      {hasButton && (
        <PrimaryButton
          size="sub"
          text="목표생성"
          isActive
          onButtonClick={navigateToCreateGoalPage}
        />
      )}
    </div>
  );
};
export default GoalPercentage;
