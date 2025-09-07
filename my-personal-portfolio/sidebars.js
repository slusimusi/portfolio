// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // But you can create a sidebar manually
  tutorialSidebar: [
      {
        type: 'doc',
        id: 'intro',
        label: 'Introduction',
      },
      {
          type: 'category',
          label: 'Knowledge base documentation',
          link: {type: 'generated-index'},
          items: ['knowledge-base-documentation/text-about-git-pull', 'knowledge-base-documentation/text-about-RTK-working'],
      },
      {
        type: 'category',
        label: 'Guides',
        link: {type: 'generated-index'},
        items: ['guides/how-to-make-an-online-payment', 'guides/quick-start-guide-in-admitad'],
      },
      {
        type: 'category',
        label: 'Product documentation',
        link: {type: 'generated-index'},
        items: ['product-documentation/description-of-a-browser-extension'],
      },
      {
        type: 'category',
        label: 'Tutorials',
        link: {type: 'generated-index'},
        items: ['tutorials/instruction-for-Allure-Report-generation'],
      },
  ],
};

export default sidebars;
