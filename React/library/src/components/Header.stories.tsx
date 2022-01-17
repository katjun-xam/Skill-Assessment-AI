import React from 'react'
import { Story } from '@storybook/react';

import Header from './Header'


export default {
  title: 'Common/Header',
  component: Header,
}

const Template: Story = args => <Header {...args} />;

export const Default = Template.bind({});