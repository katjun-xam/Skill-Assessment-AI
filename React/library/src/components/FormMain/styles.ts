import styled from "styled-components";

export const FormMainContainer = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 30px 40px;
  border-radius: ${({ theme }) => theme.borderRadiusMd};
  background-color: ${({ theme }) => theme.bgLight};
`;