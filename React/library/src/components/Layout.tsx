import React, { useState } from "react";
import styled, { css } from "styled-components";

import Button from "./../components/Button";
import Header from "./Header";
import Modal from "./Modal";
import FormMain from "./FormMain";
import FormRow from "./FormRow";
import FormCell from "./FormCell";
import FormInputText from "./FormInputText";
import { ReactComponent as Logo } from "./../assets/logo.svg";
import { ReactComponent as IconProfile } from "./../assets/icons/icon-profile.svg";

const PageContainer = styled.main(
  (props) => css`
    padding: 16px 16px 98px 16px;
    @media all and (min-width: ${props.theme.breakpoints.sm}) {
      padding: 32px 32px 98px 32px;
    }
  `
);

type ILayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: ILayoutProps) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onModalSubmitHandler = (action: string) => {
    if (action === "confirm" || action === "close") {
      setModalVisibility(false);
      setUserName("");
      setPassword("");
    }
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
            onClick={() => setModalVisibility(true)}
            startIcon={<IconProfile />}
          />
        }
      ></Header>
      {modalVisibility && (
        <Modal
          heading="Login"
          content={
            <FormMain onSubmit={() => {}}>
              <FormRow>
                <FormCell>
                  <FormInputText
                    name="username"
                    label="Username"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                  />
                </FormCell>
              </FormRow>
              <FormRow>
                <FormCell>
                  <FormInputText
                    name="password"
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </FormCell>
              </FormRow>
            </FormMain>
          }
          animationType="grow"
          onSubmit={onModalSubmitHandler}
        />
      )}
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default Layout;
