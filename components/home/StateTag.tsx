import { StateTagProps, STATE_TAG_MAP } from "@/constants/stateStyleMap";

const StateTag = ({ state }: StateTagProps) => {
  const { bg, text, border } = STATE_TAG_MAP[state];

  return (
    <p
      className={`caption2 flex h-[18px] w-[42px] items-center justify-center rounded-[2px] ${bg} ${text} ${border}`}
    >
      {state}
    </p>
  );
};

export default StateTag;
