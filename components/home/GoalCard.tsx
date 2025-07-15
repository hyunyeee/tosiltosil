import { GoalCardProps } from "@/types/Category";
import StateTag from "@/components/home/StateTag";
import { formatISODurationToTime } from "@/utils/time";

const GoalCard = ({
  categoryName,
  color,
  title,
  state,
  duration,
  totalTime,
  percentage,
  hasButton,
}: GoalCardProps) => {
  const backgroundColor = `var(--color-sub-${color})`;
  const borderColor = `var(--color-primary-${color})`;

  return (
    <div className="flex w-full flex-col items-start gap-[11px]">
      <div
        className="footnote text-primary-mainText flex-shrink-0 cursor-pointer rounded-[2px] border-[1px] px-[12px] py-[4px] text-center"
        style={{
          backgroundColor,
          borderColor,
        }}
      >
        {categoryName}
      </div>

      <div
        className={`relative flex w-full overflow-hidden rounded-[6px] bg-white ${
          state === "실패" || state === "완료" ? "opacity-70" : ""
        }`}
        style={{ filter: "drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.1))" }}
      >
        <div
          className="h-full w-[8px]"
          style={{
            backgroundColor: `var(--color-primary-${color})`,
          }}
        />
        <div className="flex-1 py-[15px] pr-[20px] pl-[13px]">
          <div className="flex w-full gap-[13px]">
            <div
              className="flex h-[38px] w-[38px] items-center justify-center rounded-[4px]"
              style={{
                backgroundColor: `var(--color-primary-${color})`,
              }}
            >
              <img src="/images/goal-rabbit.svg" />
            </div>
            <div className="flex flex-grow flex-col">
              <div className="flex justify-between">
                <p className="text-primary-deepGray subhead1">{title}</p>
                {hasButton && (
                  <button>
                    <img src="/icons/more-icon.svg" />
                  </button>
                )}
              </div>
              <div className="mt-[6px] flex items-center justify-between">
                <StateTag state={state} />
                <p
                  className={`${
                    state === "진행전" || state === "실패"
                      ? "text-primary-gray"
                      : "text-black/70"
                  } subhead2`}
                >
                  {`${formatISODurationToTime(duration)} / ${formatISODurationToTime(totalTime)}`}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[11px] mb-[6px] h-[1px] w-full bg-black/20" />
          <div className="flex items-center gap-[10px]">
            <p
              className={`${state === "진행전" ? "text-primary-darkGray" : "text-primary-deepGray"} caption2 text-nowrap`}
            >
              진행률
            </p>
            <p
              className={`${state === "진행전" ? "text-primary-darkGray" : "text-primary-mainText"} caption2 text-nowrap`}
            >
              {percentage}%
            </p>
            <div className="bg-gray-card h-[18px] w-full overflow-hidden rounded-[2px]">
              <div
                className="h-full rounded-[2px] bg-blue-500"
                style={{
                  width: `${percentage}%`,
                  backgroundColor: `var(--color-primary-${color})`,
                }}
              />
            </div>
            <img src="/icons/start-icon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalCard;
