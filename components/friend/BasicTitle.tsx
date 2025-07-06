interface TitleProps {
  iconSrc: string;
  text: string;
}

const BasicTitle = ({ iconSrc, text }: TitleProps) => {
  return (
    <div className="mt-[21px] mb-[17px] flex items-center gap-[6px] border-b-1 border-black/10 pb-[5px]">
      <img src={iconSrc} alt="제목 아이콘" />
      <h2 className="subhead2">{text}</h2>
    </div>
  );
};

export default BasicTitle;
