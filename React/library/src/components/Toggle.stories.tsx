import { ComponentStory, ComponentMeta } from "@storybook/react";

import GlobalStyles from "./../globalStyles";
import { lightTheme } from "./../theme";

import Toggle from "./Toggle";
export default {
  title: "Forms/Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => (
  <>
    <GlobalStyles />
    <Toggle {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {};
