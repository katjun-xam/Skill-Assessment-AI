import React, { FormEvent, useState } from 'react';
import styled, { css } from 'styled-components';

import { lightTheme } from '../theme';
import PageTitle from '../components/PageTitle';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ButtonGroup from '../components/ButtonGroup/ButtonGroup';
import FormCell from '../components/FormCell';
import FormInputText from '../components/FormInputText';
import FormMain from '../components/FormMain';
import FormRow from '../components/FormRow';
import Layout from '../components/Layout';
import Button from './../components/Button/Button';
import Icon from '../components/Icon';

import { ReactComponent as IconSearch } from './../assets/icons/icon-search.svg';
import { ReactComponent as IconSuccess } from './../assets/icons/icon-success.svg';

const RegisterForm = styled.div(
  (props) => css`
    width: 100%;
    @media all and (min-width: ${props.theme.breakpoints.md}) {
      width: 80%;
      min-width: 830px;
      max-width: 1000px;
    }
  `,
);

const PageHeader = styled.p(
  (props) => css`
    padding: 32px 0 64px 0;
  `,
);

type IRegisterProps = {};

const Register = (props: IRegisterProps) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  function formSubmitHandler(pEvent: React.FormEvent) {
    console.log('submitting form...');
  }

  function firstNameChangeHandler(pEvent: React.ChangeEvent<HTMLInputElement>) {
    setFirstname(pEvent.target.value);
  }
  function lastnameChangeHandler(pEvent: React.ChangeEvent<HTMLInputElement>) {
    setLastname(pEvent.target.value);
  }
  function emailChangeHandler(pEvent: React.ChangeEvent<HTMLInputElement>) {
    setEmail(pEvent.target.value);
  }
  function addressChangeHandler(pEvent: React.ChangeEvent<HTMLInputElement>) {
    setAddress(pEvent.target.value);
  }
  function cityChangeHandler(pEvent: React.ChangeEvent<HTMLInputElement>) {
    setCity(pEvent.target.value);
  }
  function countryChangeHandler(pEvent: React.ChangeEvent<HTMLInputElement>) {
    setCountry(pEvent.target.value);
  }

  return (
    <Layout>
      <PageTitle text="Register" />
      <Breadcrumb
        links={[
          { label: 'Register', url: '/register' },
          { label: 'Breadcrumb1', url: '#' },
          { label: 'Breadcrumb2', url: '#' },
        ]}
      />

      <PageHeader>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, molestias delectus facere quaerat repudiandae
        totam perspiciatis rem, nesciunt suscipit nobis provident accusantium animi officiis cum commodi tempore
        perferendis quam ut?
      </PageHeader>

      <RegisterForm>
        <FormMain onSubmit={formSubmitHandler}>
          <FormRow>
            <FormCell cellWidth="15%">
              <label htmlFor="firstname">Firstname</label>
            </FormCell>
            <FormCell>
              <FormInputText name="firstname" onChange={firstNameChangeHandler} value={firstname} />
            </FormCell>
          </FormRow>
          <FormRow>
            <FormCell cellWidth="15%">
              <label htmlFor="lastname">Lastname</label>
            </FormCell>
            <FormCell>
              <FormInputText name="lastname" onChange={lastnameChangeHandler} value={lastname} />
            </FormCell>
          </FormRow>
          {/* ----------------------------- FULL WIDTH ----------------------------- */}
          <FormRow>
            <FormCell cellWidth="100%">
              <FormInputText name="lastname" onChange={emailChangeHandler} value={email} label="Email*" floatingLabel />
            </FormCell>
          </FormRow>
          {/* ----------------------------- MULTIPLE ----------------------------- */}
          <FormRow>
            <FormCell cellWidth="66%">
              <FormInputText
                name="address"
                onChange={addressChangeHandler}
                value={address}
                label="Residential address"
                floatingLabel
              />
            </FormCell>
            <FormCell cellWidth="32%">
              <Button
                label="lookup"
                color="primary"
                startIcon={
                  <Icon fillColor={lightTheme.textWhite}>
                    <IconSearch />
                  </Icon>
                }
                wide
                variant="contained"
                onClick={() => alert('lookup')}
              />
            </FormCell>
          </FormRow>
          <FormRow>
            <FormCell cellWidth="32%">
              <FormInputText name="street" value={''} onChange={(e) => console.log(e.target.value)}></FormInputText>
            </FormCell>
            <FormCell cellWidth="32%">
              <FormInputText name="postcode" value={''} onChange={(e) => console.log(e.target.value)}></FormInputText>
            </FormCell>
            <FormCell cellWidth="32%">
              <FormInputText name="state" value={''} onChange={(e) => console.log(e.target.value)}></FormInputText>
            </FormCell>
          </FormRow>
          {/* ---------------------------- INCLUDE LABEL ---------------------------- */}
          <FormRow>
            <FormCell cellWidth="100%">
              <FormInputText name="city" onChange={cityChangeHandler} value={city} label="City"></FormInputText>
            </FormCell>
          </FormRow>
          <FormRow>
            <FormCell cellWidth="100%">
              <FormInputText
                name="country"
                onChange={countryChangeHandler}
                value={country}
                label="Country"
              ></FormInputText>
            </FormCell>
          </FormRow>
          {/* ------------------------------ BUTTONS ------------------------------ */}
          <FormRow>
            <FormCell cellWidth="30%" />
            <FormCell>
              <ButtonGroup gap={20} inline wide>
                <>
                  <Button label="Cancel" color="primary" variant="outlined" onClick={() => alert('Canceled')}></Button>
                  <Button
                    label="Confirm"
                    color="primary"
                    wide
                    headIcon={
                      <Icon fillColor={lightTheme.textWhite}>
                        <IconSuccess />
                      </Icon>
                    }
                    variant="contained"
                    onClick={() => alert('Confirmed!')}
                  ></Button>
                </>
              </ButtonGroup>
            </FormCell>
          </FormRow>
        </FormMain>
      </RegisterForm>
    </Layout>
  );
};

export default Register;
