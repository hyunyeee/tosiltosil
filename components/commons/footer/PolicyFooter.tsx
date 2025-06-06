import Link from "next/link";

const PolicyFooter = () => {
  return (
    <footer className="footnote flex gap-[30px] text-gray-600">
      <Link href="/terms">이용약관</Link>
      <span>|</span>
      <Link href="/privacy">개인정보처리방침</Link>
    </footer>
  );
};

export default PolicyFooter;
