import PrimaryButton from "@/components/commons/button/PrimaryButton";
import Image from "next/image";
import Link from "next/link";

export default function SignupComplete() {
  return (
    <div className="flex flex-col items-center pt-[138px]">
      <header className="flex flex-col items-center gap-[22px]">
        <img
          src="/icons/check-icon.svg"
          className="h-[36px] w-[36px]"
          alt="체크 이모지"
        />
        <h1 className="title2 text-primary-mainText mb-[50px]">
          회원가입을 완료했습니다
        </h1>
      </header>
      <section className="mb-[42px] flex w-[150px] flex-col items-center gap-[14px]">
        <Image
          src="/images/signup-rabbit.png"
          alt="회원가입 완료 토끼"
          width={140}
          height={140}
          className="self-baseline"
          priority
        />
        <p className="subhead2 text-primary-mainText text-center">
          회원가입을 완료했습니다
          <br />
          목표를 설정해보세요
        </p>
      </section>
      <Link href="/" className="contents">
        <PrimaryButton type="button" text="완료하기" size="main" isActive />
      </Link>
    </div>
  );
}
