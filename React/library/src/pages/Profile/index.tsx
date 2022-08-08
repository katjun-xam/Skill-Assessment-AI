import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { selectUser, updateUser } from 'store/user/slice';
import { lightTheme } from 'theme';
import { Avatar, Button, FormInputText, Icon, PageTitle, Table, Else, If } from 'components';
import { ReactComponent as IconPencil } from 'assets/icons/icon-pencil.svg';
import { ProfileSettings, ProfileWrapper } from './styles';
import avatar1 from 'assets/images/avatar1.png';

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
          <Button label="Logout" variant="contained" color="primary" centered onClick={handleClickLogoutBtn} />
        </If>
      </div>
      <If condition={user?.status === 'idle'}>
        <If condition={user?.isLogged}>
          <ProfileSettings>
            <div>
              <Avatar avatars={[avatar1]} variant="square" width="150px" height="150px" />
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
                          name="firstName"
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
                      <Button
                        color="primary"
                        startIcon={
                          <Icon strokeColor={lightTheme.primary}>
                            <IconPencil />
                          </Icon>
                        }
                        onClick={handleToggleFirstNameField}
                      />
                    ),
                  },
                  {
                    label: 'Last Name',
                    text: (
                      <If condition={isEditLastName}>
                        <FormInputText
                          name="lastName"
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
                      <Button
                        color="primary"
                        startIcon={
                          <Icon strokeColor={lightTheme.primary}>
                            <IconPencil />
                          </Icon>
                        }
                        onClick={handleToggleLastNameField}
                      />
                    ),
                  },
                ]}
                labels={true}
                columnWidth={['40%', '40%', '20%']}
              />
              <Button
                label="Save Changes"
                variant="contained"
                color="primary"
                centered
                wide
                onClick={handleClickSaveChanges}
                disabled={isDisabledSaveBtn}
              />
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
