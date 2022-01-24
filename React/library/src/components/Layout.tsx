import React from "react";
import { Link } from "react-router-dom";

import Button from "./../components/Button";
import ButtonGroup from "./../components/ButtonGroup";
import Header from "./Header";
import { ReactComponent as Logo } from "./../assets/logo.svg";

type ILayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header title="React Components Showcase" logo={<Logo />}>
        <nav>
          <ButtonGroup inline>
            <Link to="/">
              <Button label="Home" color="primary"></Button>
            </Link>
            <Link to="/news">
              <Button label="What’s New" color="primary"></Button>
            </Link>
            <Link to="/profile">
              <Button label="My Profile" color="primary"></Button>
            </Link>
          </ButtonGroup>
        </nav>
      </Header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
