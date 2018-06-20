import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered';

import { storiesOf } from '@storybook/vue';

import Index from './components/Index.vue';

const stories = storiesOf('UI Toolkit | Welcome', module);

stories.addDecorator(Centered);

stories.add('Getting Started', () => ({
  render: h => h(Index),
}));
