import { pretendard } from "../styles/font";
import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "storybook/viewport";

import "../styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
  },
  decorators: [
    (Story) => (
      <div className={`${pretendard.variable} font-pretendard`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
