import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "./Button";
import { ReactComponent as IconClose } from "./../assets/icons/icon-close.svg";
import ButtonGroup from "./ButtonGroup";

const ModalContainer = styled.div(
  (props) => css`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props.theme.bgDark};
    overflow: auto;
  `
);

const ModalBody = styled.div<{
  animate?: string;
  nested?: boolean;
  animationType?: string;
}>(
  (props) =>
    css`
      background: ${props.theme.bgWhite};
      height: auto;
      margin: auto;
      width: 41.7%;
      @media all and (max-width: ${props.theme.breakpoints.sm}) {
        width: 100%;
        margin: 0px;
        height: 100vh;
        border-radius: 0px;
        padding: 0px 28px 0px 28px;
        border-top: none;
      }
      padding: 28px 28px 0px 28px;
      border-radius: ${props.theme.borderRadiusMd};
      border-top: ${props.theme.borderRadiusSm} solid ${props.theme.primary};
      position: relative;
      ${props.animationType &&
      css`
        animation: ${props.animationType} 0.8s;
        @keyframes grow {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes top {
          0% {
            top: -300px;
            opacity: 0;
          }
          100% {
            top: 0;
            opacity: 1;
          }
        }
        @keyframes bottom {
          0% {
            bottom: -300px;
            opacity: 0;
          }
          100% {
            bottom: 0;
            opacity: 1;
          }
        }
        @keyframes left {
          0% {
            left: -300px;
            opacity: 0;
          }
          100% {
            left: 0;
            opacity: 1;
          }
        }
        @keyframes right {
          0% {
            right: -300px;
            opacity: 0;
          }
          100% {
            right: 0;
            opacity: 1;
          }
        }
      `}
      ${props.animate === "animateChild" &&
      css`
        animation: grow 0.5s;
        @keyframes grow {
          0% {
            transform: translate(-50%, -50%) scale(0);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}
      ${props.nested &&
      css`
        & > div:last-child {
          position: absolute;
          width: 62%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 1px solid ${props.theme.textBlack};
          padding: 28px 28px 0px 28px;
        }
      `}
    `
);

const ModalHeader = styled.div(
  (props) => css`
    display: flex;
    justify-content: space-between;
    h2 {
      margin-bottom: 0px;
    }
    svg {
      cursor: pointer;
      width: 18px;
      height: 18px;
      fill: ${props.theme.textDark};
      flex-shrink: 0;
    }
    @media all and (max-width: ${props.theme.breakpoints.sm}) {
      padding-top: 28px;
    }
  `
);

const ModalContent = styled.p(
  (props) => css`
    color: ${props.theme.textExtraDark};
  `
);

const ModalFooter = styled.div(
  (props) => css`
    margin: 10px -28px 0px -28px;
    padding: 20px 28px;
    display: inline-flex;
    justify-content: flex-end;
    width: 100%;
    background-color: ${props.theme.bgLight};
    border-bottom-left-radius: ${props.theme.borderRadiusMd};
    border-bottom-right-radius: ${props.theme.borderRadiusMd};
    @media all and (max-width: ${props.theme.breakpoints.sm}) {
      padding: 20px 0px;
      position: absolute;
      bottom: 0px;
      margin: 0px -28px 0px -28px;
      border-radius: 0px;
      & > div {
        margin-right: 28px;
      }
    }
    & > div {
      button {
        padding-left: 2vw;
        padding-right: 2vw;
        @media all and (max-width: ${props.theme.breakpoints.sm}) {
          &:not(:first-child) {
            margin-left: 3vw;
          }
        }
      }
    }
  `
);

interface IModalProps {
  heading: string;
  content: string;
  animate?: boolean;
  nested?: boolean;
  childHeading?: string;
  childContent?: string;
  animationType?: string;
  onSubmit: (action: string, nested?: boolean, child?: boolean) => void;
  childModalVisibility?: boolean;
}

const Modal = ({
  heading,
  content,
  animate,
  nested,
  childHeading,
  childContent,
  animationType,
  onSubmit,
  childModalVisibility,
}: IModalProps) => {
  return (
    <>
      <ModalContainer onClick={() => onSubmit("close")}>
        <ModalBody
          animationType={
            animate ? "fadeIn" : animationType ? animationType : ""
          }
          nested={childModalVisibility && nested}
          onClick={(e) => e.stopPropagation()}
        >
          <ModalHeader>
            <h2>{heading}</h2>
            <IconClose onClick={() => onSubmit("close")} />
          </ModalHeader>
          <ModalContent>{content}</ModalContent>
          <ModalFooter>
            <ButtonGroup inline gap={20}>
              <>
                <Button
                  color="primary"
                  variant="contained"
                  label="Cancel"
                  wide
                  centered
                  onClick={() => onSubmit("cancel")}
                />
                <Button
                  color="primary"
                  variant="contained"
                  label="Confirm"
                  wide
                  centered
                  onClick={() =>
                    nested ? onSubmit("confirm", true) : onSubmit("confirm")
                  }
                />
              </>
            </ButtonGroup>
          </ModalFooter>
          {childModalVisibility && (
            <ModalBody animate={animate || animationType ? "animateChild" : ""}>
              <ModalHeader>
                <h2>{childHeading}</h2>
                <IconClose onClick={() => onSubmit("close", true, true)} />
              </ModalHeader>
              <ModalContent>{childContent}</ModalContent>
              <ModalFooter>
                <ButtonGroup inline gap={20}>
                  <>
                    <Button
                      color="primary"
                      variant="contained"
                      label="Cancel"
                      wide
                      centered
                      onClick={() => onSubmit("cancel", true, true)}
                    />
                    <Button
                      color="primary"
                      variant="contained"
                      label="Confirm"
                      wide
                      centered
                      onClick={() => onSubmit("confirm", true, true)}
                    />
                  </>
                </ButtonGroup>
              </ModalFooter>
            </ModalBody>
          )}
        </ModalBody>
      </ModalContainer>
    </>
  );
};

export default Modal;
