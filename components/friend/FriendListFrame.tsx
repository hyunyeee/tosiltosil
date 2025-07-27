interface FriendListFrameProps {
  isEmpty: boolean;
  content: string;
  children: React.ReactNode;
}

const FriendListFrame = ({
  isEmpty,
  content,
  children,
}: FriendListFrameProps) => {
  return (
    <div className="bg-gray-card h-full py-5">
      {isEmpty ? (
        <div className="flex h-full flex-col items-center gap-[12px] pt-[197px]">
          <img className="h-[58px] w-[58px]" src="/images/result-empty.svg" />
          <p className="subhead2 text-primary-darkGray">{content}</p>
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default FriendListFrame;
