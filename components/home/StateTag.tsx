import { StateTagProps, STATE_STYLE_MAP } from "@/constants/stateTagMap";

const StateTag = ({ state }: StateTagProps) => {
  const { bg, text, border } = STATE_STYLE_MAP[state];

  return (
    <p
      className={`caption2 flex h-[18px] w-[42px] items-center justify-center rounded-[2px] ${bg} ${text} ${border}`}
    >
      {state}
    </p>
  );
};

export default StateTag;
