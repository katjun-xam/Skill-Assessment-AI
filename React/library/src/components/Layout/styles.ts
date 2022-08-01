import styled from "styled-components";

export const PageContainer = styled.main`
  padding: 16px 16px 98px 16px;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 32px 32px 98px 32px;
    max-width: ${({ theme }) => theme.pageWidth};
    margin: 0 auto;
  }
`;