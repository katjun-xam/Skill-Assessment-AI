import React, { ReactChildren } from "react";
import styled, { css } from "styled-components";

const FormMainContainer = styled.form(
  (props) => css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 30px 40px;
    border-radius: ${props.theme.borderRadiusMd};
    background-color: ${props.theme.bgLight};
  `
);

interface Props {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const FormMain = ({ children, onSubmit }: Props) => {
  return <FormMainContainer onSubmit={onSubmit}>{children}</FormMainContainer>;
};

export default FormMain;
