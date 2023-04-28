import type { Preview } from "@storybook/web-components";

import '../src/globals';
import '../src/components';
import '../src/styles/styles.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
