import React, { useState } from "react";
import styled, { css } from "styled-components";

// Implementation
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  getUser,
  getUserAsync,
  selectUser,
} from "./../features/user/userSlice";

import Button from "./../components/Button";
import Header from "./Header";
import Modal from "./Modal";
import FormMain from "./FormMain";
import FormRow from "./FormRow";
import FormCell from "./FormCell";
import FormInputText from "./FormInputText";
import { ReactComponent as Logo } from "./../assets/logo.svg";
import { ReactComponent as IconProfile } from "./../assets/icons/icon-profile.svg";
import Icon from "./Icon";
import { lightTheme } from "./../theme";
import Avatar from "./Avatar";

const PageContainer = styled.main(
  (props) => css`
    padding: 16px 16px 98px 16px;
    @media all and (min-width: ${props.theme.breakpoints.sm}) {
      padding: 32px 32px 98px 32px;
      max-width: ${props.theme.pageWidth};
      margin: 0 auto;
    }
  `
);

type ILayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: ILayoutProps) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

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
      label: "Register",
      path: "/register",
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
          user.isLogged ? (
            <Avatar
              name={`${user.identity.firstName} ${user.identity.lastName}`}
            />
          ) : (
            <Button
              label="Login"
              color="primary"
              variant="outlined"
              wide
              onClick={() => setModalVisibility(true)}
              startIcon={
                <Icon fillColor={lightTheme.primary}>
                  <IconProfile />
                </Icon>
              }
            />
          )
        }
      ></Header>
      {modalVisibility && (
        <Modal
          heading="Login"
          content={
            <FormMain
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
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
              <FormRow>
                <FormCell cellWidth="20%">
                  <Button
                    color="primary"
                    variant="contained"
                    label="Login"
                    wide
                    centered
                    onClick={() => {
                      dispatch(getUserAsync(userName));
                      setModalVisibility(false);
                    }}
                  />
                </FormCell>
              </FormRow>
            </FormMain>
          }
          animationType="grow"
          onSubmit={onModalSubmitHandler}
          modalFooter={false}
        />
      )}
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default Layout;
