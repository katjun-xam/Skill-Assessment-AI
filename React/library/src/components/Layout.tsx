import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "./../components/Button";
import ButtonGroup from "./../components/ButtonGroup";
import Header from "./Header";
import { ReactComponent as Logo } from "./../assets/logo.svg";
import { ReactComponent as IconProfile } from "./../assets/icons/icon-profile.svg";

const HeaderContent = styled.div`
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-end;
  & > :nth-child(1) {
    margin-right: 36px;
  }
  & > :nth-child(2) {
    flex: 0 1 220px;
  }
`;

type ILayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header title="React Components Showcase" logo={<Logo />}>
        <HeaderContent>
          {/* NAVIGATION */}
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
          {/* LOGIN */}
          <Button
            label="Login"
            color="primary"
            variant="outlined"
            wide
            startIcon={<IconProfile />}
          />
        </HeaderContent>
      </Header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
