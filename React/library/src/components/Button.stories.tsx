import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ReactComponent as IconProfile } from "./../assets/icons/icon-profil.svg";

import Button from "./Button";

export default {
  title: "UI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "primary",
};
export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: "secondary",
};
export const Disabled = Template.bind({});
Disabled.args = {
  variant: "disabled",
  label: "disabled",
};
export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
  variant: "outlinePrimary",
  label: "outlinePrimary",
};
export const outlineSecondary = Template.bind({});
outlineSecondary.args = {
  variant: "outlineSecondary",
  label: "outlineSecondary",
};
export const outlineDisabled = Template.bind({});
outlineDisabled.args = {
  variant: "outlineDisabled",
  label: "outlineDisabled",
};
export const startIcon = Template.bind({});
startIcon.args = {
  variant: "primary",
  startIcon: <IconProfile />,
  label: "startIcon",
};
export const endIcon = Template.bind({});
endIcon.args = {
  variant: "primary",
  endIcon: <IconProfile />,
  label: "endIcon",
};
