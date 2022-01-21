import { Story } from "@storybook/react";

import ButtonGroup from "./ButtonGroup";

import Button from "./Button";

export default {
  title: "UI/ButtonGroup",
  component: ButtonGroup,
};

const Template: Story = (args) => (
  <ButtonGroup {...args}>{args.children}</ButtonGroup>
);

export const Stacked = Template.bind({});
Stacked.args = {
  gap: 20,
  children: (
    <>
      <Button
        label="Button One"
        variant="contained"
        wide
        centered
        color="primary"
      />
      <Button
        label="Button Two"
        variant="contained"
        wide
        centered
        color="primary"
      />
      <Button
        label="Button Three"
        variant="contained"
        wide
        centered
        color="primary"
      />
    </>
  ),
};

export const Inline = Template.bind({});
Inline.args = {
  inline: true,
  gap: 20,
  children: (
    <>
      <Button
        label="Button One"
        variant="contained"
        wide
        centered
        color="primary"
      />
      <Button
        label="Button Two"
        variant="contained"
        wide
        centered
        color="primary"
      />
      <Button
        label="Button Three"
        variant="contained"
        wide
        centered
        color="primary"
      />
    </>
  ),
};
