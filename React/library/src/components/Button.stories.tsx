import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ReactComponent as IconProfile } from "./../assets/icons/icon-profile.svg";
import { ReactComponent as IconChevron } from "./../assets/icons/icon-chevron.svg";

import Button from "./Button";

export default {
  title: "UI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const textPrimary = Template.bind({});
textPrimary.args = {
  color: "primary",
  label: "Text primary",
};
export const textPrimaryStartIcon = Template.bind({});
textPrimaryStartIcon.args = {
  color: "primary",
  label: "Text primary",
  startIcon: <IconProfile />,
};
export const textPrimaryEndIcon = Template.bind({});
textPrimaryEndIcon.args = {
  color: "primary",
  label: "Text primary",
  endIcon: <IconProfile />,
};
export const textSecondary = Template.bind({});
textSecondary.args = {
  color: "secondary",
  label: "Text secondary",
};
export const textSecondaryStartIcon = Template.bind({});
textSecondaryStartIcon.args = {
  color: "secondary",
  label: "Text secondary",
  startIcon: <IconProfile />,
};
export const textSecondaryEndIcon = Template.bind({});
textSecondaryEndIcon.args = {
  color: "secondary",
  label: "Text secondary",
  endIcon: <IconProfile />,
};
export const containedPrimary = Template.bind({});
containedPrimary.args = {
  color: "primary",
  variant: "contained",
  label: "Contained primary",
};
export const containedPrimaryStartIcon = Template.bind({});
containedPrimaryStartIcon.args = {
  color: "primary",
  variant: "contained",
  label: "Contained primary with Start Icon",
  startIcon: <IconProfile />,
};
export const containedPrimaryEndIcon = Template.bind({});
containedPrimaryEndIcon.args = {
  color: "primary",
  variant: "contained",
  label: "Contained primary with End Icon",
  endIcon: <IconProfile />,
};
export const containedPrimaryWide = Template.bind({});
containedPrimaryWide.args = {
  color: "primary",
  variant: "contained",
  label: "Contained primary wide",
  wide: true,
};
export const containedPrimaryWideCentered = Template.bind({});
containedPrimaryWideCentered.args = {
  color: "primary",
  variant: "contained",
  label: "Contained primary wide centered",
  wide: true,
  centered: true,
};
export const containedPrimaryWideHeadIcon = Template.bind({});
containedPrimaryWideHeadIcon.args = {
  color: "primary",
  variant: "contained",
  label: "Contained primary wide with head Icon",
  wide: true,
  headIcon: <IconChevron />,
};
export const containedPrimaryWideStartIconHeadIcon = Template.bind({});
containedPrimaryWideStartIconHeadIcon.args = {
  color: "primary",
  variant: "contained",
  label: "Contained primary wide with Start Icon & Head Icon",
  wide: true,
  headIcon: <IconChevron />,
  startIcon: <IconProfile />,
};
export const containedPrimaryWideCenteredStartIcon = Template.bind({});
containedPrimaryWideCenteredStartIcon.args = {
  color: "primary",
  variant: "contained",
  label: "Contained primary wide with Start Icon",
  wide: true,
  centered: true,
  startIcon: <IconProfile />,
};
export const containedPrimaryWideCenteredEndIcon = Template.bind({});
containedPrimaryWideCenteredEndIcon.args = {
  color: "primary",
  variant: "contained",
  label: "Contained primary wide with End Icon",
  wide: true,
  centered: true,
  endIcon: <IconProfile />,
};
export const containedSecondary = Template.bind({});
containedSecondary.args = {
  color: "secondary",
  variant: "contained",
  label: "Contained secondary",
};
export const containedSecondaryStartIcon = Template.bind({});
containedSecondaryStartIcon.args = {
  color: "secondary",
  variant: "contained",
  label: "Contained secondary",
  startIcon: <IconProfile />,
};
export const containedSecondaryEndIcon = Template.bind({});
containedSecondaryEndIcon.args = {
  color: "secondary",
  variant: "contained",
  label: "Contained secondary",
  endIcon: <IconProfile />,
};
export const containedSecondaryWide = Template.bind({});
containedSecondaryWide.args = {
  color: "secondary",
  variant: "contained",
  label: "Contained secondary wide",
  wide: true,
};
export const containedSecondaryWideCentered = Template.bind({});
containedSecondaryWideCentered.args = {
  color: "secondary",
  variant: "contained",
  label: "Contained secondary wide",
  wide: true,
  centered: true,
};
export const containedSecondaryWideHeadIcon = Template.bind({});
containedSecondaryWideHeadIcon.args = {
  color: "secondary",
  variant: "contained",
  label: "Contained secondary wide with head Icon",
  wide: true,
  headIcon: <IconChevron />,
};
export const containedSecondaryWideStartIconHeadIcon = Template.bind({});
containedSecondaryWideStartIconHeadIcon.args = {
  color: "secondary",
  variant: "contained",
  label: "Contained secondary wide with Start Icon & head Icon",
  wide: true,
  startIcon: <IconProfile />,
  headIcon: <IconChevron />,
};
export const containedSecondaryWideCenteredStartIcon = Template.bind({});
containedSecondaryWideCenteredStartIcon.args = {
  color: "secondary",
  variant: "contained",
  label: "Contained secondary wide",
  centered: true,
  wide: true,
  startIcon: <IconProfile />,
};
export const containedSecondaryWideCenteredEndIcon = Template.bind({});
containedSecondaryWideCenteredEndIcon.args = {
  color: "secondary",
  variant: "contained",
  label: "Contained secondary wide",
  centered: true,
  wide: true,
  endIcon: <IconProfile />,
};
export const containedDisabled = Template.bind({});
containedDisabled.args = {
  color: "secondary",
  variant: "contained",
  label: "Contained disabled",
  disabled: true,
};
export const containedDisabledStartIcon = Template.bind({});
containedDisabledStartIcon.args = {
  color: "secondary",
  variant: "contained",
  disabled: true,
  label: "Contained disabled",
  startIcon: <IconProfile />,
};
export const containedDisabledEndIcon = Template.bind({});
containedDisabledEndIcon.args = {
  color: "secondary",
  variant: "contained",
  disabled: true,
  label: "Contained disabled",
  endIcon: <IconProfile />,
};
export const containedDisabledWide = Template.bind({});
containedDisabledWide.args = {
  color: "secondary",
  variant: "contained",
  disabled: true,
  label: "Contained disabled wide",
  wide: true,
};
export const containedDisabledWideCentered = Template.bind({});
containedDisabledWideCentered.args = {
  color: "secondary",
  variant: "contained",
  disabled: true,
  label: "Contained disabled wide",
  wide: true,
  centered: true,
};
export const containedDisabledWideHeadIcon = Template.bind({});
containedDisabledWideHeadIcon.args = {
  color: "secondary",
  variant: "contained",
  label: "Contained disabled wide with head Icon",
  disabled: true,
  wide: true,
  headIcon: <IconChevron />,
};
export const containedDisabledWideStartIconHeadIcon = Template.bind({});
containedDisabledWideStartIconHeadIcon.args = {
  color: "secondary",
  variant: "contained",
  disabled: true,
  label: "Contained disabled wide with Start Icon & head Icon",
  wide: true,
  startIcon: <IconProfile />,
  headIcon: <IconChevron />,
};
export const containedDisabledWideCenteredStartIcon = Template.bind({});
containedDisabledWideCenteredStartIcon.args = {
  color: "secondary",
  variant: "contained",
  disabled: true,
  label: "Contained disabled wide",
  wide: true,
  centered: true,
  startIcon: <IconProfile />,
};
export const containedDisabledWideCenteredEndIcon = Template.bind({});
containedDisabledWideCenteredEndIcon.args = {
  color: "secondary",
  variant: "contained",
  label: "Contained disabled wide",
  disabled: true,
  wide: true,
  centered: true,
  endIcon: <IconProfile />,
};
export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
  color: "primary",
  variant: "outlined",
  label: "Outline primary",
};
export const OutlinePrimaryStartIcon = Template.bind({});
OutlinePrimaryStartIcon.args = {
  color: "primary",
  variant: "outlined",
  label: "Outline primary",
  startIcon: <IconProfile />,
};
export const OutlinePrimaryEndIcon = Template.bind({});
OutlinePrimaryEndIcon.args = {
  color: "primary",
  variant: "outlined",
  label: "Outline primary",
  endIcon: <IconProfile />,
};
export const OutlinePrimaryWide = Template.bind({});
OutlinePrimaryWide.args = {
  color: "primary",
  variant: "outlined",
  label: "Outline primary wide",
  wide: true,
};
export const OutlinePrimaryWideCentered = Template.bind({});
OutlinePrimaryWideCentered.args = {
  color: "primary",
  variant: "outlined",
  label: "Outline primary wide",
  wide: true,
  centered: true,
};
export const OutlinePrimaryWideHeadIcon = Template.bind({});
OutlinePrimaryWideHeadIcon.args = {
  color: "primary",
  variant: "outlined",
  label: "Outline primary wide",
  wide: true,
  headIcon: <IconChevron />,
};
export const OutlinePrimaryWideStartIconHeadIcon = Template.bind({});
OutlinePrimaryWideStartIconHeadIcon.args = {
  color: "primary",
  variant: "outlined",
  label: "Outline primary wide",
  wide: true,
  headIcon: <IconChevron />,
  startIcon: <IconProfile />,
};
export const OutlinePrimaryWideCenteredStartIcon = Template.bind({});
OutlinePrimaryWideCenteredStartIcon.args = {
  color: "primary",
  variant: "outlined",
  label: "Outline primary wide",
  wide: true,
  startIcon: <IconProfile />,
};
export const OutlinePrimaryWideCenteredEndIcon = Template.bind({});
OutlinePrimaryWideCenteredEndIcon.args = {
  color: "primary",
  variant: "outlined",
  label: "Outline primary wide",
  wide: true,
  endIcon: <IconProfile />,
};
export const outlineSecondary = Template.bind({});
outlineSecondary.args = {
  color: "secondary",
  variant: "outlined",
  label: "Outline secondary",
};
export const outlineSecondaryStartIcon = Template.bind({});
outlineSecondaryStartIcon.args = {
  color: "secondary",
  variant: "outlined",
  label: "Outline secondary",
  startIcon: <IconProfile />,
};
export const outlineSecondaryEndIcon = Template.bind({});
outlineSecondaryEndIcon.args = {
  color: "secondary",
  variant: "outlined",
  label: "Outline secondary",
  endIcon: <IconProfile />,
};
export const outlineSecondaryWide = Template.bind({});
outlineSecondaryWide.args = {
  color: "secondary",
  variant: "outlined",
  label: "Outline secondary wide",
  wide: true,
};
export const outlineSecondaryWideCentered = Template.bind({});
outlineSecondaryWideCentered.args = {
  color: "secondary",
  variant: "outlined",
  label: "Outline secondary wide",
  wide: true,
  centered: true,
};
export const outlineSecondaryWideHeadIcon = Template.bind({});
outlineSecondaryWideHeadIcon.args = {
  color: "secondary",
  variant: "outlined",
  label: "Outline secondary wide",
  wide: true,
  headIcon: <IconChevron />,
};
export const outlineSecondaryWideStartIconHeadIcon = Template.bind({});
outlineSecondaryWideStartIconHeadIcon.args = {
  color: "secondary",
  variant: "outlined",
  label: "Outline secondary wide",
  wide: true,
  startIcon: <IconProfile />,
  headIcon: <IconChevron />,
};
export const outlineSecondaryWideCenteredStartIcon = Template.bind({});
outlineSecondaryWideCenteredStartIcon.args = {
  color: "secondary",
  variant: "outlined",
  label: "Outline secondary wide",
  wide: true,
  startIcon: <IconProfile />,
};
export const outlineSecondaryWideCenteredEndIcon = Template.bind({});
outlineSecondaryWideCenteredEndIcon.args = {
  color: "secondary",
  variant: "outlined",
  label: "Outline secondary wide",
  wide: true,
  endIcon: <IconProfile />,
};
export const outlineDisabled = Template.bind({});
outlineDisabled.args = {
  color: "secondary",
  variant: "outlined",
  label: "Outline disabled",
  disabled: true,
};
export const outlineDisabledStartIcon = Template.bind({});
outlineDisabledStartIcon.args = {
  color: "secondary",
  variant: "outlined",
  label: "Outline disabled",
  disabled: true,
  startIcon: <IconProfile />,
};
export const outlineDisabledEndIcon = Template.bind({});
outlineDisabledEndIcon.args = {
  color: "secondary",
  variant: "outlined",
  label: "Outline disabled",
  disabled: true,
  endIcon: <IconProfile />,
};
export const outlineDisabledWide = Template.bind({});
outlineDisabledWide.args = {
  color: "secondary",
  variant: "outlined",
  label: "Outline disabled wide",
  disabled: true,
  wide: true,
};
export const outlineDisabledWideCentered = Template.bind({});
outlineDisabledWideCentered.args = {
  color: "secondary",
  variant: "outlined",
  label: "Outline disabled wide",
  disabled: true,
  wide: true,
  centered: true,
};
export const outlineDisabledWideHeadIcon = Template.bind({});
outlineDisabledWideHeadIcon.args = {
  color: "secondary",
  variant: "outlined",
  disabled: true,
  label: "Outline disabled wide",
  wide: true,
  headIcon: <IconChevron />,
};
export const outlineDisabledWideStartIconHeadIcon = Template.bind({});
outlineDisabledWideStartIconHeadIcon.args = {
  color: "secondary",
  variant: "outlined",
  disabled: true,
  label: "Outline disabled wide",
  wide: true,
  startIcon: <IconProfile />,
  headIcon: <IconChevron />,
};
export const outlineDisabledWideCenteredStartIcon = Template.bind({});
outlineDisabledWideCenteredStartIcon.args = {
  color: "secondary",
  variant: "outlined",
  disabled: true,
  label: "Outline disabled wide",
  wide: true,
  centered: true,
  startIcon: <IconProfile />,
};
export const outlineDisabledWideCenteredEndIcon = Template.bind({});
outlineDisabledWideCenteredEndIcon.args = {
  color: "secondary",
  variant: "outlined",
  disabled: true,
  label: "Outline disabled wide",
  wide: true,
  centered: true,
  endIcon: <IconProfile />,
};
