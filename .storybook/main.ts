import type { StorybookConfig } from "@storybook/nextjs";
import type { Configuration, RuleSetRule } from "webpack";

const config: StorybookConfig = {
  stories: [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/**/*.mdx",
    "../components/**/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../assets"],

  webpackFinal: async (
    webpackConfig: Configuration,
  ): Promise<Configuration> => {
    // 1) module.rules가 존재하면 RuleSetRule[]로 간주
    const rules = (webpackConfig.module?.rules ?? []) as RuleSetRule[];

    // 2) 기본 SVG 처리 룰 제거
    const svgRuleIndex = rules.findIndex(
      (rule) => rule.test instanceof RegExp && rule.test.test(".svg"),
    );
    if (svgRuleIndex > -1) {
      rules.splice(svgRuleIndex, 1);
    }

    // 3) SVGR 로더 추가
    rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: require.resolve("@svgr/webpack"),
          options: {
            icon: true,
            svgoConfig: {
              plugins: [{ name: "removeViewBox", active: false }],
            },
          },
        },
      ],
    });

    // 4) 수정한 rules를 다시 할당
    if (webpackConfig.module) {
      webpackConfig.module.rules = rules;
    }

    return webpackConfig;
  },
};

export default config;
