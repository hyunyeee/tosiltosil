import {
  StateTagProps,
  PROGRESSBAR_LABEL_MAP,
} from "@/constants/stateStyleMap";

interface ProgressBarLabelProps {
  state: StateTagProps["state"];
  percentage: number;
}

const ProgressBarLabel = ({ state, percentage }: ProgressBarLabelProps) => {
  const { title, amount } = PROGRESSBAR_LABEL_MAP[state];

  return (
    <>
      <p className={`${title} caption2 text-nowrap`}>진행률</p>
      <p className={`${amount} caption2 text-nowrap`}>{percentage}%</p>
    </>
  );
};

export default ProgressBarLabel;
