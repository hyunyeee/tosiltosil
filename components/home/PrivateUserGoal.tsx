const PrivateUserGoal = () => {
  return (
    <div className="bg-gray-card flex h-full items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col items-center">
        <img src="/images/private-rabbit.svg" alt="목표 리스트 비공개" />
        <p className="subhead1 mt-[9px]">친구에게만 공개하고 있어요</p>
        <p className="footnote mt-[3px]">
          서로 친구가 되어야 목표를 볼 수 있습니다!
        </p>
      </div>
    </div>
  );
};

export default PrivateUserGoal;
