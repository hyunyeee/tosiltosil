interface FriendListFrameProps {
  isEmpty: boolean;
  children: React.ReactNode;
}

const FriendListFrame = ({ isEmpty, children }: FriendListFrameProps) => {
  return (
    <div className="bg-gray-card h-full min-h-[calc(100vh-146px)]">
      {isEmpty ? (
        <div className="flex h-full flex-col items-center justify-center gap-[12px]">
          <img className="mt-[214px]" src="/images/result-empty.svg" />
          <p className="subhead2 text-primary-darkGray">검색결과가 없습니다.</p>
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default FriendListFrame;
