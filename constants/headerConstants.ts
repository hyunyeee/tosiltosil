type HeaderConfig = {
  component: "LogoHeader" | "BackHeader" | null;
  withAlarm?: boolean;
};

type ExactPathConfigMap = {
  [path: string]: HeaderConfig;
};
type PatternPathConfig = {
  test: (p: string) => boolean;
  config: HeaderConfig;
};

export const EXACT_PATH_CONFIGS: ExactPathConfigMap = {
  // 헤더 없음
  "/entry": { component: null },
  "/landing": { component: null },
  "/signup": { component: null },
  "/find-password": { component: null },

  // 로고 헤더
  "/": { component: "LogoHeader" },
  "/home": { component: "LogoHeader", withAlarm: true },
  "/friend/list": { component: "LogoHeader", withAlarm: true },
  "/friend/search": { component: "LogoHeader", withAlarm: true },

  //뒤로가기 헤더
  "/alarm": { component: "BackHeader" },
  "/login": { component: "BackHeader" },
  "/profile/eidt": { component: "BackHeader", withAlarm: true },
  "/friend/pending": { component: "BackHeader", withAlarm: true },
  "/friend/request": { component: "BackHeader", withAlarm: true },
  "/category/edit": { component: "BackHeader", withAlarm: true },
};

export const PATTERN_PATH_CONFIGS: PatternPathConfig[] = [
  {
    test: (p: string) => /^\/home\/.+/.test(p),
    config: { component: "BackHeader", withAlarm: true },
  },
];
