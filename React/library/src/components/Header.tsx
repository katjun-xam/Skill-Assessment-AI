import React, { ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";
import styled, { css } from "styled-components";

import ButtonGroup from "./../components/ButtonGroup";
import Button from "./../components/Button";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f8f8;
  padding: 16px 32px;
  min-height: 52px;
  border-bottom: 1px solid lightgrey;
`;

const HeaderContent = styled.div`
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-end;
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
    margin: 0;
    @media all and (min-width: ${props.theme.breakpoints.md}) {
      display: block;
    }
  `
);

const HeaderNavigationSticky = styled.nav(
  (props) => css`
    display: block;
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    height: 85px;
    width: 100%;
    @media all and (min-width: ${props.theme.breakpoints.md}) {
      display: none;
    }
  `
);

const HeaderNavigationStickyItem = styled.div<{ selected: boolean }>(
  (props) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 33%;
    background-color: ${props.selected
      ? props.theme.primary
      : props.theme.primaryAccent};
    &:not(:first-child):not(:last-child) {
      border-left: 2px solid ${props.theme.bgWhite};
      border-right: 2px solid ${props.theme.bgWhite};
    }
    & a {
      color: ${props.theme.textExtraLight};
      text-decoration: none;
    }
  `
);

const HeaderNavigation = styled.nav(
  (props) => css`
    display: none;
    @media all and (min-width: ${props.theme.breakpoints.md}) {
      display: block;
    }
  `
);

const HeaderEndElement = styled.div`
  margin-left: 36px;
  flex: 0 1 200px;
`;

interface IHeaderProps {
  title: string;
  logo?: ReactNode;
  menu: IHeaderMenuItem[];
  children?: ReactNode;
  endElement?: ReactNode;
}

export interface IHeaderMenuItem {
  label: string;
  path: string;
}

const Header = ({ title, logo, menu, endElement }: IHeaderProps) => {
  const { pathname } = useLocation();

  return (
    <HeaderContainer>
      <TitleContainer>
        <LogoContainer>{logo}</LogoContainer>
        {title && <TitleText>{title}</TitleText>}
      </TitleContainer>
      <HeaderContent>
        {/* NAVIGATION */}
        <HeaderNavigationSticky>
          {menu.map((item) => (
            <HeaderNavigationStickyItem
              key={item.path}
              selected={
                (pathname === "/" && item.path === "/") ||
                (item.path !== "/" && pathname.includes(item.path))
              }
            >
              <Link to={item.path}>{item.label}</Link>
            </HeaderNavigationStickyItem>
          ))}
        </HeaderNavigationSticky>
        {/* NAVIGATION WIDE SCREENS */}
        <HeaderNavigation>
          <ButtonGroup gap={0} inline>
            <>
              {menu.map((item) => (
                <Link to={item.path} key={item.path}>
                  <Button label={item.label} color="primary"></Button>
                </Link>
              ))}
            </>
          </ButtonGroup>
        </HeaderNavigation>
        {/* HEADER END ELEMENT */}
        {endElement && <HeaderEndElement>{endElement}</HeaderEndElement>}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
