import React from "react";
import { Link } from "react-router-dom";

import Button from "./../components/Button";
import ButtonGroup from "./../components/ButtonGroup";

type ILayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div>
      <header>
        <ButtonGroup inline>
          <>
            <Link to="/">
              <Button label="Home" color="primary"></Button>
            </Link>
            <Link to="/news">
              <Button label="What’s New" color="primary"></Button>
            </Link>
            <Link to="/profile">
              <Button label="My Profile" color="primary"></Button>
            </Link>
          </>
        </ButtonGroup>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
