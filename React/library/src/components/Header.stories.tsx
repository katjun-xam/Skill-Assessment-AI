import React from "react";
import { Story } from "@storybook/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Button from "./../components/Button";
import GlobalStyles from "./../globalStyles";

import { ReactComponent as Logo } from "./../assets/logo.svg";
import { ReactComponent as IconProfile } from "./../assets/icons/icon-profile.svg";

export default {
  title: "Common/Header",
  component: Header,
};

const headerMenu = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "What’s New",
    path: "/news",
  },
  {
    label: "My Profile",
    path: "/profile",
  },
];

const Template: Story = (args) => (
  <MemoryRouter initialEntries={["/"]}>
    <GlobalStyles />
    <Header
      title={args.title}
      logo={args.logo}
      menu={args.menu}
      endElement={args.endElement}
      {...args}
    />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  title: "Storybook showcase",
  logo: <Logo />,
  menu: headerMenu,
  endElement: (
    <Button
      label="Login"
      color="primary"
      variant="outlined"
      wide
      startIcon={<IconProfile />}
    />
  ),
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  logo: <Logo />,
  menu: headerMenu,
  endElement: (
    <Button
      label="Login"
      color="primary"
      variant="outlined"
      wide
      startIcon={<IconProfile />}
    />
  ),
};

export const WithoutLogin = Template.bind({});
WithoutLogin.args = {
  title: "Storybook showcase",
  logo: <Logo />,
  menu: headerMenu,
};
