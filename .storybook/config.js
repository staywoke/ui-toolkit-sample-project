import Vue from 'vue';

import { configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from 'storybook-addon-vue-info'

setOptions({
  name: 'UI Toolkit',
  url: 'https://ui-toolkit.staywoke.org',
  hierarchyRootSeparator: /\|/
});

setDefaults({
  header: false
});

function loadStories () {
  // Welcome Page
  require('../src/index.stories.js');

  // Load Components from Smallest to Largest
  const stories = require.context('../src/components', true, /\.stories\.js$/);
  stories.keys().forEach(filename => pages(filename));
}

configure(loadStories, module)
