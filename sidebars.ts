import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  foundationSidebar: [
    {
      type: 'doc',
      id: 'getting-started',
      label: 'Getting Started',
    },
    {
      type: 'category',
      label: 'Foundation',
      items: [
        {
          type: 'category',
          label: 'English 2',
          items: [
            {
              type: 'doc',
              id: 'Foundation/English 2/overview',
              label: 'Overview',
            },
          ],
        },
        {
          type: 'category',
          label: 'Mathematics 1',
          items: [
            {
              type: 'doc',
              id: 'Foundation/Mathematics 1/overview',
              label: 'Overview',
            },
          ],
        },
        {
          type: 'category',
          label: 'Programming in Python',
          items: [
            {
              type: 'doc',
              id: 'Foundation/Programming in Python/overview',
              label: 'Overview',
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;