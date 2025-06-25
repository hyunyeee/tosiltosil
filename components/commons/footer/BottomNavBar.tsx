"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// 스토리북에서 강제로 pathname 전달할 수 있도록 props 추가
const BottomNavBar = ({ mockPathname }: { mockPathname?: string }) => {
  const pathname = mockPathname || usePathname();

  const navItems = [
    {
      label: "홈",
      href: "/home",
      icon: "/icons/nav-home-icon-default.svg",
      activeIcon: "/icons/nav-home-icon-current.svg",
    },
    {
      label: "검색",
      href: "/friend/search",
      icon: "/icons/nav-search-icon-default.svg",
      activeIcon: "/icons/nav-search-icon-current.svg",
    },
    {
      label: "캘린더",
      href: "/calendar",
      icon: "/icons/nav-calendar-icon-default.svg",
      activeIcon: "/icons/nav-calendar-icon-current.svg",
    },
    {
      label: "친구목록",
      href: "/friend/list",
      icon: "/icons/nav-friend-list-icon-default.svg",
      activeIcon: "/icons/nav-friend-list-icon-current.svg",
    },
  ];

  return (
    <nav className="fixed bottom-0 z-10 flex w-full max-w-[430px] items-center justify-around border-t border-black/30 bg-white py-[10px]">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            className="relative flex flex-col items-center justify-center"
          >
            <img
              src={isActive ? item.activeIcon : item.icon}
              alt={item.label}
            />
            <span
              className={`caption2 mt-[2px] text-[12px] ${
                isActive ? "text-primary-mainText" : "text-primary-gray"
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNavBar;
