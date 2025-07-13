interface StateTagProps {
  state: "진행전" | "진행중" | "완료" | "실패";
}

const STATE_STYLE_MAP: Record<
  StateTagProps["state"],
  { bg: string; text: string; border: string }
> = {
  진행전: {
    bg: "",
    text: "text-primary-darkGray",
    border: "border-[1px] border-primary-darkGray",
  },
  진행중: {
    bg: "",
    text: "text-primary-mainText",
    border: "border-[1px] border-primary-mainText",
  },
  완료: {
    bg: "bg-black/70",
    text: "text-white",
    border: "",
  },
  실패: {
    bg: "",
    text: "text-black/70",
    border: "border-[1px] border-black/70",
  },
};

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
