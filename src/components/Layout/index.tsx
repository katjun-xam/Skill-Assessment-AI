import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { selectUser } from 'store/user/slice';
import { getUserAsync } from 'store/user/actions';
import { PageContainer, StyledButton, StyledOutlinedButton } from './styles';
import { ILayoutProps } from './types';
import { FormRow } from 'components/FormMain/styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { theme } from 'theme';
import { FormCell, FormInputText, FormMain, Header, Modal } from 'components';
import { isNotEmptyString } from 'utils/helpers/strings';
import { useNavigate } from 'react-router-dom';

import { Avatar } from '@mui/material';
import { Person } from '@mui/icons-material';

const Layout = ({ children }: ILayoutProps) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

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
    const isDisabledLoginBtn = !(isNotEmptyString(userName) && isNotEmptyString(password));

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
      navigate('/profile');
    };

    return (
      <FormMain onSubmit={handleSubmitModal}>
        <div style={{ marginBottom: '12px' }}>
          <span>Username</span>
        </div>
        <FormRow>
          <FormCell>
            <FormInputText id="username" onChange={handleChangeUserName} value={userName} />
          </FormCell>
        </FormRow>
        <div style={{ marginTop: '12px', marginBottom: '12px' }}>
          <span>Password</span>
        </div>
        <FormRow>
          <FormCell>
            <FormInputText id="password" onChange={handleChangePassword} value={password} />
          </FormCell>
        </FormRow>
        <FormRow>
          <StyledButton
            variant="contained"
            onClick={handleClickLoginBtn}
            disabled={isDisabledLoginBtn}
            fullWidth
            disableElevation
            sx={{ marginTop: '8px' }}
          >
            Login
          </StyledButton>
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
            <Avatar sx={{ bgcolor: theme.colors.primary }}>{getUserInitials()}</Avatar>
          ) : (
            <StyledOutlinedButton
              variant="outlined"
              onClick={handleClickLoginBtn}
              size="large"
              startIcon={<Person sx={{ color: theme.colors.primary }} />}
              disableElevation
            >
              Login
            </StyledOutlinedButton>
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
