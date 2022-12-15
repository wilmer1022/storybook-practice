import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { JAW_Textarea } from './JAW_Textarea';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/JAW_Textarea',
  component: JAW_Textarea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as ComponentMeta<typeof JAW_Textarea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof JAW_Textarea> = (args) => <JAW_Textarea {...args} />;

export const Enable = Template.bind({});
Enable.args = {
  label: 'Post content',
  name: 'content',
  obligatory: true,
  placeholder: 'JAW_Textarea enabled for editing',
  onChange: (event) => console.log(event.target.value, event.target.name),
};

export const Disable = Template.bind({});
Disable.args = {
  label: 'Post comment',
  disable: true,
  placeholder: 'JAW_Textarea disabled',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Post comment',
  rows: 10,
  placeholder: 'JAW_Textarea with 10 rows',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Post comment',
  rows: 2,
  placeholder: 'JAW_Textarea with 2 rows',
};
