import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getUserAsync, selectUser } from 'features/user/userSlice';

import { PageContainer } from './styles';
import { ILayoutProps } from './types';
import { FormRow } from 'components/FormMain/styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as IconProfile } from 'assets/icons/icon-profile.svg';
import { lightTheme } from 'theme';
import { Avatar, Button, FormCell, FormInputText, FormMain, Header, Modal, Icon } from 'components';

const Layout = ({ children }: ILayoutProps) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const [modalVisibility, setModalVisibility] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onModalSubmitHandler = (action: string) => {
    if (action === 'confirm' || action === 'close') {
      setModalVisibility(false);
      setUserName('');
      setPassword('');
    }
  };

  const headerMenu = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Register',
      path: '/register',
    },
    {
      label: 'My Profile',
      path: '/profile',
    },
  ];

  return (
    <>
      <Header
        title="React Accelerator Showcase"
        logo={<Logo />}
        menu={headerMenu}
        endElement={
          user.isLogged ? (
            <Avatar name={`${user.identity.firstName} ${user.identity.lastName}`} />
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