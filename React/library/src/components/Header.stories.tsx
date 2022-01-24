import React from "react";
import { Story } from "@storybook/react";

import Header from "./Header";

export default {
  title: "Common/Header",
  component: Header,
};

const Template: Story = (args) => <Header title={args.title} {...args} />;

export const Default = Template.bind({});
Default.args = { title: "Storybook" };
