import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f8f8;
  padding: 16px 32px;
  border-bottom: 1px solid lightgrey;
`;

const LogoContainer = styled.div(
  (props) => css`
    width: 120px;
    margin-right: 12px;
  `
);

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TitleText = styled.h1(
  (props) => css`
    display: none;
    @media all and (min-width: ${props.theme.breakpoints.md}) {
      display: block;
    }
  `
);

interface IHeaderProps {
  title: string;
  logo?: ReactNode;
  children?: ReactNode;
}

const Header = ({ title, logo, children }: IHeaderProps) => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <LogoContainer>{logo}</LogoContainer>
        <TitleText>{title}</TitleText>
      </TitleContainer>
      {children}
    </HeaderContainer>
  );
};

export default Header;
