import styled, { css } from 'styled-components';

export const RegisterForm = styled.div(
  () => css`
    width: 100%;
    background: red;
  `,
);

export const PageHeader = styled.p`
  padding: 32px 0 64px 0;
`;

export const NavLinks = styled.div(
  (props) => css`
    background-color: ${props.theme.bgWhite};
    padding: 12px 24px;
    border-bottom: 1px solid #dfe3e6;
  `,
);

export const HomeWrapper = styled.div`
  padding: 12px 24px;
`;
