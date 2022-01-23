import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

const BreadcrumbContainer = styled.div<{ customSeparator?: boolean }>(
  (props) => css`
    display: flex;
    color: ${props.theme.primary};
    list-style-type: none;
    text-align: center;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        cursor: pointer;
        margin: 0px 5px;
        &:hover {
          text-decoration: underline;
        }
      }
      svg {
        fill: ${props.theme.primary};
      }
      span {
        position: relative;
        margin: 0 5px;
        svg {
          position: absolute;
          width: 20px;
          height: 20px;
          left: -18px;
          top: -10px;
        }
      }
      &:last-child {
        span {
          display: none;
        }
      }
      &:last-of-type {
        pointer-events: none;
        color: ${props.theme.textExtraDark};
      }
    }
    ${props.customSeparator &&
    css`
      li {
        background: ${props.theme.secondaryAccent};
        position: relative;
        p {
          color: ${props.theme.textBlack};
          padding: 8px 0px 8px 20px;
          margin-right: 0px;
          &:hover {
            text-decoration: none;
          }
        }
        &:not(:first-child) {
          p::before {
            position: absolute;
            top: 0px;
            width: 0;
            height: 0;
            content: "";
            border-top: 17px solid transparent;
            border-bottom: 17px solid transparent;
            z-index: 3;
            border-left-color: ${props.theme.secondaryAccent};
            border-left-style: solid;
            border-left-width: 18px;
            left: -1px;
          }
        }
        &:not(:last-child) {
          p::after {
            position: absolute;
            top: 0px;
            width: 0;
            height: 0;
            content: "";
            z-index: 2;
            border-top: 17px solid transparent;
            border-bottom: 17px solid transparent;
            border-left: 19px solid white;
            margin-left: 10px;
          }
        }
      }
      li:last-child {
        background: transparent;
      }
    `}
  `
);
interface IBreadCrumbProps {
  links: IBreadCrumbLink[];
  separator?: string | ReactNode;
  customSeparator?: boolean;
}
interface IBreadCrumbLink {
  label: string;
  url: string;
  image?: ReactNode;
}

const Breadcrumb = ({
  links,
  separator,
  customSeparator,
}: IBreadCrumbProps) => {
  return (
    <BreadcrumbContainer customSeparator={customSeparator}>
      {links.map((item, index) => {
        return (
          <li key={index}>
            {item.image ? item.image : ""}
            <p>{item.label}</p>
            <span>{!customSeparator ? (separator ? separator : "/") : ""}</span>
          </li>
        );
      })}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
