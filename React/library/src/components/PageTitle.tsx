import { ReactNode } from "react";
import styled, { css } from "styled-components";

const PageTitleContainer = styled.div(
  (props) => css`
    display: flex;
    flex-direction: column;
  `
);

const Title = styled.div(
  (props) => css`
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: baseline;
    font-size: 23px;
    font-weight: 300;
    margin: 24px 0 44px 0;
    color: ${props.theme.primary};
    @media all and (min-width: ${props.theme.breakpoints.md}) {
      flex-direction: row;
      font-size: 39px;
    }
  `
);

const EndElement = styled.div(
  (props) => css`
    font-size: 16px;
    margin-top: 8px;
    @media all and (min-width: ${props.theme.breakpoints.md}) {
      font-size: 20px;
      margin-top: 0;
    }
  `
);

export const Icon = styled.div(
  (props) => css`
    text-align: center;
    border-radius: 50%;
    background-color: ${props.theme.primaryAccent};
    color: ${props.theme.primary};
    width: 75px;
    height: 75px;
    line-height: 75px;
    font-size: 29px;
  `
);

interface PageTitleProps {
  text: string;
  icon?: string;
  endElement?: ReactNode;
}

const PageTitle = ({ text, icon, endElement }: PageTitleProps) => {
  return (
    <PageTitleContainer>
      {icon && (
        <div>
          <Icon className="xs-show">{icon}</Icon>
        </div>
      )}
      <Title>
        <div>{text}</div>
        {endElement && <EndElement />}
      </Title>
    </PageTitleContainer>
  );
};

export default PageTitle;
