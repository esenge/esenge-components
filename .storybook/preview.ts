import type { Preview } from '@storybook/react';
import '../src/variables/colors.scss';
import '../src/variables/bgColors.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" }, // Automatically match event handlers
    controls: { expanded: true }, // Automatically expand controls in the UI
    a11y: {
      // Optional: Customize axe-core options
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true, // Customize specific rules
          },
          // You can disable specific rules as well
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
      // Optionally set the scope of checks, e.g. only "screen" or "headless"
      manual: false,  // Default is false, which auto-runs the checks
    },
  },
  tags: ["autodocs", "autodocs"]
};

export default preview;
