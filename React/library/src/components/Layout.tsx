import React from "react";
import styled, { css } from "styled-components";

import Button from "./../components/Button";
import Header from "./Header";
import { ReactComponent as Logo } from "./../assets/logo.svg";
import { ReactComponent as IconProfile } from "./../assets/icons/icon-profile.svg";

type ILayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: ILayoutProps) => {
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

  return (
    <>
      <Header
        title="React Components Showcase"
        logo={<Logo />}
        menu={headerMenu}
        endElement={
          <Button
            label="Login"
            color="primary"
            variant="outlined"
            wide
            startIcon={<IconProfile />}
          />
        }
      ></Header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
