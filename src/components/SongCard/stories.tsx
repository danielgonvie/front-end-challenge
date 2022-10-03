import type { Meta, Story } from '@storybook/react';

import { SongCard } from '.';
import { Props } from './types';

export default {
  component: SongCard,
  title: 'Core/SongCard',
} as Meta;

const Template: Story<Props> = (args) => <SongCard {...args}></SongCard>;

export const Default = Template.bind({});
Default.args = {
  songData: {
    audio: { url: 'https://d2s139ebbsksc4.cloudfront.net/Minstrel.mp3' },
    author: { name: 'Daniel Hayden' },
    description:
      'Use ready long law. Sound choice picture across recent.\nTheory them picture maintain history. Fly with network boy buy forward center. Push without quickly population away.',
    genre: 'DARKSIDE_JUNGLE',
    id: 13,
    image:
      'https://images.unsplash.com/photo-1526900913101-88c16676ca02?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=MnwxfDB8MXxyYW5kb218MHx8aW1nfHx8fHx8MTY2MjEwOTczNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
    name: 'John Evans',
  },
};
