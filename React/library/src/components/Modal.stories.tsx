import { Story } from "@storybook/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "./Modal";

export default {
  title: "UI/Modal",
  component: Modal,
  argTypes: {
    animationType: {
      options: ["grow", "top", "bottom", "left", "right", "fadeIn"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  heading: "Modal heading 1",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
};
export const WithAnimation = Template.bind({});
WithAnimation.args = {
  heading: "Modal heading 1",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  animate: true,
  animationType: "grow",
};
export const LongContent = Template.bind({});
LongContent.args = {
  heading: "Modal heading 2",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis orci a massa congue mattis. Sed viverra congue mauris et aliquam. Quisque viverra dolor nunc, ut semper sem interdum at. Proin porttitor, justo sit amet dictum placerat, quam nisi finibus sem, sed consectetur ex diam sed metus. Phasellus nibh dui, bibendum sit amet fermentum vel, sagittis sit amet erat. Sed sed pretium nisl, vel facilisis mauris. Praesent in dolor facilisis, varius libero eu, mattis lacus. Ut nunc lectus, vulputate ac consequat et, vehicula sit amet magna. Nullam et urna accumsan, rutrum sapien eu, viverra lacus. Proin scelerisque suscipit fringilla. Vestibulum pulvinar leo sit amet semper blandit. Nunc vel consectetur sem. Etiam congue orci non nulla imperdiet dapibus et eget elit. Morbi a nisi nec nulla porta interdum at sed ipsum. Proin aliquet metus leo, in finibus justo facilisis a. In rhoncus eget metus sit amet pretium.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis orci a massa congue mattis. Sed viverra congue mauris et aliquam. Quisque viverra dolor nunc, ut semper sem interdum at. Proin porttitor, justo sit amet dictum placerat, quam nisi finibus sem, sed consectetur ex diam sed metus. Phasellus nibh dui, bibendum sit amet fermentum vel, sagittis sit amet erat. Sed sed pretium nisl, vel facilisis mauris. Praesent in dolor facilisis, varius libero eu, mattis lacus. Ut nunc lectus, vulputate ac consequat et, vehicula sit amet magna. Nullam et urna accumsan, rutrum sapien eu, viverra lacus. Proin scelerisque suscipit fringilla. Vestibulum pulvinar leo sit amet semper blandit. Nunc vel consectetur sem. Etiam congue orci non nulla imperdiet dapibus et eget elit. Morbi a nisi nec nulla porta interdum at sed ipsum. Proin aliquet metus leo, in finibus justo facilisis a. In rhoncus eget metus sit amet pretium.",
};
export const NestedModal = Template.bind({});
NestedModal.args = {
  heading: "Modal heading",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  nested: true,
  childHeading: "Child Modal heading",
  childContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
};
