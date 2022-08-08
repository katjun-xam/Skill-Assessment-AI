import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { getUserAsync, selectUser } from 'store/user/slice';
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

  const [isShowModal, setIsShowModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onModalSubmitHandler = (action: string) => {
    if (action === 'confirm' || action === 'close') {
      setIsShowModal(false);
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
      label: 'Profile',
      path: '/profile',
    },
  ];

  const renderModalContent = (): JSX.Element => {
    const handleSubmitModal = (e: React.ChangeEvent<HTMLFormElement>): void => {
      e.preventDefault();
    };

    const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setUserName(e.target.value);
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setPassword(e.target.value);
    };

    const handleClickLoginBtn = (): void => {
      dispatch(getUserAsync());
      setIsShowModal(false);
    };

    return (
      <FormMain onSubmit={handleSubmitModal}>
        <FormRow>
          <FormCell>
            <FormInputText name="username" label="Username" onChange={handleChangeUserName} value={userName} />
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell>
            <FormInputText name="password" label="Password" onChange={handleChangePassword} value={password} />
          </FormCell>
        </FormRow>
        <FormRow>
          <Button color="primary" variant="contained" label="Login" wide centered onClick={handleClickLoginBtn} />
        </FormRow>
      </FormMain>
    );
  };

  const handleClickLoginBtn = (): void => {
    setIsShowModal(true);
  };

  const getUserInitials = (): string => {
    const firstNameInitial = user?.identity?.firstName[0]?.toUpperCase();
    const lastNameInitial = user?.identity?.lastName[0]?.toUpperCase();

    return `${firstNameInitial}${lastNameInitial}`;
  };

  return (
    <React.Fragment>
      <Header
        title="React Accelerator Showcase"
        logo={<Logo />}
        menu={headerMenu}
        endElement={
          user.isLogged ? (
            <Avatar initials={getUserInitials()} />
          ) : (
            <Button
              label="Login"
              color="primary"
              variant="outlined"
              wide
              onClick={handleClickLoginBtn}
              startIcon={
                <Icon fillColor={lightTheme.primary}>
                  <IconProfile />
                </Icon>
              }
            />
          )
        }
      />
      {isShowModal && (
        <Modal
          heading="Login"
          content={renderModalContent()}
          animationType="grow"
          onSubmit={onModalSubmitHandler}
          modalFooter={false}
        />
      )}
      <PageContainer>{children}</PageContainer>
    </React.Fragment>
  );
};

export default Layout;
