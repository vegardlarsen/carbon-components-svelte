import { withKnobs, text } from '@storybook/addon-knobs';
import Component from './UIShell.Story.svelte';

export default { title: 'UIShell', decorators: [withKnobs] };

export const WithActionsAndSidenav = () => ({
  Component,
  props: {
    story: 'with-actions-sidenav',
    href: text('The link href (href)', '#'),
    company: text('Company name', 'IBM'),
    platformName: text('Platform name', 'Platform Name')
  }
});
