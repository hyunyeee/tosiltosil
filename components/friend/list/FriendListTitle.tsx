const FriendListTitle = () => {
  return (
    <div className="bg-gray-card mt-[21px] flex flex-col gap-[5px] px-[20px] pt-[12px]">
      <div className="flex gap-[6px]">
        <img src="/icons/friend-list-icon.svg" alt="친구 목록 아이콘" />
        <p className="subhead2">친구 목록</p>
      </div>
      <div className="h-[1px] w-full bg-black/10" />
    </div>
  );
};
export default FriendListTitle;
