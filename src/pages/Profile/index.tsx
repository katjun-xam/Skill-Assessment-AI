import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { selectUser, updateUser } from 'store/user/slice';
import { theme } from 'theme';
import { FormInputText, PageTitle, Table, Else, If } from 'components';
import { ProfileSettings, ProfileWrapper, StyledButton } from './styles';
import avatar1 from 'assets/images/avatar1.png';

import { Avatar, IconButton } from '@mui/material';
import { EditOutlined } from '@mui/icons-material';

const Profile: React.FunctionComponent = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [firstName, setFirstName] = useState<string>(user?.identity?.firstName || '');
  const [lastName, setLastName] = useState<string>(user?.identity?.lastName || '');
  const [isEditFirstName, setIsEditFirstName] = useState<boolean>(false);
  const [isEditLastName, setIsEditLastName] = useState<boolean>(false);
  const isDisabledSaveBtn: boolean = firstName === user.identity.firstName && lastName === user.identity.lastName;

  const handleClickLogoutBtn = (): void => {
    window.location.reload();
  };

  const handleClickSaveChanges = (): void => {
    if (isEditFirstName) {
      setIsEditFirstName(false);
    }

    if (isEditLastName) {
      setIsEditLastName(false);
    }

    dispatch(updateUser({ firstName, lastName }));
  };

  const handleToggleFirstNameField = (): void => {
    setIsEditFirstName(!isEditFirstName);
  };

  const handleToggleLastNameField = (): void => {
    setIsEditLastName(!isEditLastName);
  };

  useEffect(() => {
    setFirstName(user?.identity?.firstName);
    setLastName(user?.identity?.lastName);
  }, [user?.identity?.firstName, user?.identity?.lastName]);

  return (
    <ProfileWrapper>
      <div className="profileHeader">
        <PageTitle text="Profile" />
        <If condition={user?.isLogged}>
          <StyledButton
            variant="contained"
            size="large"
            onClick={handleClickLogoutBtn}
            disableElevation
            sx={{ width: '120px' }}
          >
            Logout
          </StyledButton>
        </If>
      </div>
      <If condition={user?.status === 'idle'}>
        <If condition={user?.isLogged}>
          <ProfileSettings>
            <div>
              <Avatar src={avatar1} variant="square" sx={{ width: 150, height: 150 }} />
              <h2>{`${user.identity.firstName} ${user.identity.lastName}`}</h2>
            </div>
            <div>
              <Table
                tableData={[
                  {
                    label: 'First Name',
                    text: (
                      <If condition={isEditFirstName}>
                        <FormInputText
                          id="firstName"
                          value={firstName}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setFirstName(e.target.value);
                          }}
                        />
                        <Else>
                          <span>{firstName}</span>
                        </Else>
                      </If>
                    ),
                    icon: (
                      <IconButton onClick={handleToggleFirstNameField} sx={{ color: theme.colors.primary }}>
                        <EditOutlined />
                      </IconButton>
                    ),
                  },
                  {
                    label: 'Last Name',
                    text: (
                      <If condition={isEditLastName}>
                        <FormInputText
                          id="lastName"
                          value={lastName}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setLastName(e.target.value);
                          }}
                        />
                        <Else>
                          <span>{lastName}</span>
                        </Else>
                      </If>
                    ),
                    icon: (
                      <IconButton onClick={handleToggleLastNameField} sx={{ color: theme.colors.primary }}>
                        <EditOutlined />
                      </IconButton>
                    ),
                  },
                ]}
                labels={true}
                columnWidth={['40%', '40%', '20%']}
              />
              <StyledButton
                variant="contained"
                size="large"
                onClick={handleClickSaveChanges}
                disabled={isDisabledSaveBtn}
                fullWidth
                disableElevation
              >
                Save changes
              </StyledButton>
            </div>
          </ProfileSettings>
          <Else>
            <p>Please login to see this page.</p>
          </Else>
        </If>
      </If>
    </ProfileWrapper>
  );
};

export default Profile;
