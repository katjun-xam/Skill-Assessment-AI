import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { selectUser, updateUser } from 'store/user/slice';
import { IUnknown } from 'components/FormInputText/types';
import { theme } from 'theme';
import { FormInputText, PageTitle, Else, If } from 'components';
import { CellDiv, ProfileSettings, ProfileWrapper, RowDiv, StyledButton } from './styles';
import avatar1 from 'assets/images/avatar1.png';
import { useForm, UseFormRegister } from 'react-hook-form';

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
  const { register } = useForm({ defaultValues: { firstName, lastName } });

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
              <div style={{ marginBottom: '12px' }}>
                <RowDiv isFirstRow={true}>
                  <CellDiv isHeader={true}>First Name</CellDiv>
                  <CellDiv>
                    <If condition={isEditFirstName}>
                      <FormInputText
                        id="firstName"
                        value={firstName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setFirstName(e.target.value);
                        }}
                        register={register as unknown as UseFormRegister<Partial<IUnknown>>}
                      />
                      <Else>
                        <span>{firstName}</span>
                      </Else>
                    </If>
                  </CellDiv>
                  <CellDiv isButton={true}>
                    <IconButton onClick={handleToggleFirstNameField} sx={{ color: theme.colors.primary }}>
                      <EditOutlined />
                    </IconButton>
                  </CellDiv>
                </RowDiv>
                <RowDiv>
                  <CellDiv isHeader={true}>Last Name</CellDiv>
                  <CellDiv>
                    <If condition={isEditLastName}>
                      <FormInputText
                        id="lastName"
                        value={lastName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setLastName(e.target.value);
                        }}
                        register={register as unknown as UseFormRegister<Partial<IUnknown>>}
                      />
                      <Else>
                        <span>{lastName}</span>
                      </Else>
                    </If>
                  </CellDiv>
                  <CellDiv isButton={true}>
                    <IconButton onClick={handleToggleLastNameField} sx={{ color: theme.colors.primary }}>
                      <EditOutlined />
                    </IconButton>
                  </CellDiv>
                </RowDiv>
              </div>
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
