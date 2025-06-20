import IconButton from "@/components/commons/button/IconButton";
import PolicyFooter from "@/components/commons/footer/PolicyFooter";
import Link from "next/link";

export default function EntryPage() {
  return (
    <div className="flex flex-col items-center px-[20px] pt-[120px] pb-[58px]">
      <header className="flex w-full flex-col items-baseline">
        <h1 className="title2 text-primary-mainText mb-[12px]">
          목표를 이루고 싶은 예비 갓생러
        </h1>
        <p className="text-primary-mainText subhead2 mb-[74px]">
          <span className="subhead1">1분 이내</span>로 간단하게 로그인을 하고
          <br />
          목표를 세우러 가보세요!
        </p>
      </header>
      <main className="mb-[142px] flex w-full flex-col items-center gap-[16px]">
        <Link href="/login" className="contents">
          <IconButton type="button" text="이메일로 계속하기" sort="email" />
        </Link>
        <div className="text-primary-deepGray my-[16px] flex w-full items-center gap-[20px]">
          <span className="bg-primary-gray h-[1px] grow"></span>또는
          <span className="bg-primary-gray h-[1px] grow"></span>
        </div>
        {/* <Link href="/" className="contents"> */}
        <IconButton type="button" text="카카오로 계속하기" sort="kakao" />
        {/* </Link> */}
        {/* <Link href="/" className="contents"> */}
        <IconButton type="button" text="네이버로 계속하기" sort="naver" />
        {/* </Link> */}
      </main>
      <PolicyFooter />
    </div>
  );
}
