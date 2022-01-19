import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "./Button";
import { ReactComponent as IconClose } from "./../assets/icons/icon-close.svg";

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
    background: ${props.theme.bgGrey};
    overflow: auto;
  `
);

const ModalBody = styled.div<{ animate?: string; nested?: boolean }>(
  (props) =>
    css`
      background: ${props.theme.bgWhite};
      height: auto;
      margin: auto;
      width: 500px;
      padding: 28px 28px 0px 28px;
      border-top: ${props.theme.borderRadiusSm} solid ${props.theme.primary};
      ${props.animate === "animateParent" &&
      css`
        animation: grow 0.5s;
        @keyframes grow {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
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
          width: 300px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 1px solid #000;
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
      fill: #8c9ba5;
      flex-shrink: 0;
    }
  `
);

const ModalContent = styled.p((props) => css``);

const ModalFooter = styled.div(
  (props) =>
    css`
      margin: 10px -28px 0px -28px;
      padding: 20px 28px;
      display: inline-flex;
      justify-content: flex-end;
      background-color: #eff2f5;
      width: 100%;
      button {
        margin-left: 15px;
      }
    `
);

interface Props {
  heading: string;
  content: string;
  animate?: boolean;
  nested?: boolean;
  childHeading?: string;
  childContent?: string;
}

const Modal = ({
  heading,
  content,
  animate,
  nested,
  childHeading,
  childContent,
}: Props) => {
  const [modal, setModal] = useState(false);
  const [childModal, setChildModal] = useState(false);

  const toggleModal = (nested?: boolean | undefined) => {
    if (nested) {
      setChildModal(!childModal);
    } else {
      setModal(!modal);
    }
  };

  return (
    <>
      <Button
        variant="outlinePrimary"
        startIcon=""
        endIcon=""
        label="Open"
        onClick={() => toggleModal()}
      />
      {modal && (
        <ModalContainer>
          <ModalBody
            animate={animate ? "animateParent" : ""}
            nested={childModal && nested}
          >
            <ModalHeader>
              <h2>{heading}</h2>
              <IconClose onClick={() => toggleModal()} />
            </ModalHeader>
            <ModalContent>{content}</ModalContent>
            <ModalFooter>
              <Button
                variant="primary"
                startIcon=""
                endIcon=""
                label="Primary"
                onClick={() => toggleModal(nested)}
              />
            </ModalFooter>
            {childModal && (
              <ModalBody animate={animate ? "animateChild" : ""}>
                <ModalHeader>
                  <h2>{childHeading}</h2>
                  <IconClose onClick={() => toggleModal(nested)} />
                </ModalHeader>
                <ModalContent>{childContent}</ModalContent>
                <ModalFooter>
                  <Button
                    variant="primary"
                    startIcon=""
                    endIcon=""
                    label="Close Child"
                    onClick={() => toggleModal(nested)}
                  />
                </ModalFooter>
              </ModalBody>
            )}
          </ModalBody>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
