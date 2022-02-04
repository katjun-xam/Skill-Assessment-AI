import { useState } from "react";
import Avatar from "../components/Avatar";
import Layout from "../components/Layout";
import avatar1 from "../assets/images/avatar1.png";
import Table from "../components/Table";
import FormInputText from "../components/FormInputText";
import ButtonGroup from "../components/ButtonGroup";
import Button from "../components/Button";
import styled, { css } from "styled-components";
import Icon from "../components/Icon";
import { ReactComponent as IconPencil } from "./../assets/icons/icon-pencil.svg";
import { lightTheme } from "./../theme";

const ProfileSettings = styled.div(
  (props) => css`
    & > div:first-child {
      display: flex;
      h2 {
        align-self: center;
        margin: 0px 0px 0px 20px;
      }
    }
    & > div:nth-child(2) {
      margin: 20px 0px;
      & > div:nth-child(2) {
        margin-top: 20px;
        width: 25%;
        @media all and (max-width: ${props.theme.breakpoints.sm}) {
          width: 100%;
        }
      }
    }
  `
);

type IProfileProps = {};

const Profile = (props: IProfileProps) => {
  const [firstName, setFirstName] = useState("Ferrara");
  const [lastName, setLastName] = useState("Clifford");
  const [city, setCity] = useState("Canberra");
  const [profile, setProfile] = useState({
    firstname: false,
    lastname: false,
    city: false,
  });
  const editProfile = (type: "firstname" | "lastname" | "city") => {
    if (type === "firstname") {
      setProfile({
        lastname: false,
        city: false,
        firstname: !profile.firstname,
      });
    } else if (type === "lastname") {
      setProfile({
        lastname: !profile.lastname,
        city: false,
        firstname: false,
      });
    } else {
      setProfile({ lastname: false, city: !profile.city, firstname: false });
    }
  };

  return (
    <Layout>
      <ProfileSettings>
        <div>
          <Avatar
            avatars={[avatar1]}
            variant="square"
            width="150px"
            height="150px"
          />
          <h2>Ferrara Clifford</h2>
        </div>
        <div>
          <Table
            tableData={[
              {
                label: "First Name",
                text: profile.firstname ? (
                  <FormInputText
                    name="firstName"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                ) : (
                  firstName
                ),
                icon: (
                  <Button
                    color="primary"
                    startIcon={
                      <Icon strokeColor={lightTheme.primary}>
                        <IconPencil />
                      </Icon>
                    }
                    onClick={() => editProfile("firstname")}
                  />
                ),
              },
              {
                label: "Last Name",
                text: profile.lastname ? (
                  <FormInputText
                    name="lastName"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                ) : (
                  lastName
                ),
                icon: (
                  <Button
                    color="primary"
                    startIcon={
                      <Icon strokeColor={lightTheme.primary}>
                        <IconPencil />
                      </Icon>
                    }
                    onClick={() => editProfile("lastname")}
                  />
                ),
              },
              {
                label: "City",
                text: profile.city ? (
                  <FormInputText
                    name="city"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                ) : (
                  city
                ),
                icon: (
                  <Button
                    color="primary"
                    startIcon={
                      <Icon strokeColor={lightTheme.primary}>
                        <IconPencil />
                      </Icon>
                    }
                    onClick={() => editProfile("city")}
                  />
                ),
              },
            ]}
            labels={true}
            columnWidth={["30%", "50%", "20%"]}
          />
          <ButtonGroup gap={20} inline={true}>
            <>
              <Button
                label="Save Profile"
                variant="contained"
                color="primary"
                wide
                centered
                onClick={() => {
                  alert("details saved");
                  window.location.reload();
                }}
              />
              <Button
                label="Cancel"
                variant="outlined"
                wide
                centered
                color="primary"
              />
            </>
          </ButtonGroup>
        </div>
      </ProfileSettings>
    </Layout>
  );
};

export default Profile;
