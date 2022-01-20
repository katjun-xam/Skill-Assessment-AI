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
      width: 500px;
      padding: 28px 28px 0px 28px;
      border-radius: ${props.theme.borderRadiusMd};
      border-top: ${props.theme.borderRadiusSm} solid ${props.theme.primary};
      position: relative;
      ${props.animate === "animateParent" &&
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

const ModalContent = styled.p(
  (props) => css`
    color: ${props.theme.textExtraDark};
  `
);

const ModalFooter = styled.div(
  (props) =>
    css`
      margin: 10px -28px 0px -28px;
      padding: 20px 28px;
      display: inline-flex;
      justify-content: flex-end;
      background-color: #eff2f5;
      border-bottom-left-radius: ${props.theme.borderRadiusMd};
      border-bottom-right-radius: ${props.theme.borderRadiusMd};
      width: 100%;
      button {
        margin-left: 15px;
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
}

const Modal = ({
  heading,
  content,
  animate,
  nested,
  childHeading,
  childContent,
  animationType,
}: IModalProps) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [childModalVisibility, setChildModalVisibility] = useState(false);

  const toggleModal = (nested?: boolean | undefined) => {
    if (nested) {
      setChildModalVisibility(!childModalVisibility);
    } else {
      setModalVisibility(!modalVisibility);
    }
  };

  return (
    <>
      <Button
        color="primary"
        variant="outlined"
        label="Open"
        onClick={() => toggleModal()}
      />
      {modalVisibility && (
        <ModalContainer onClick={() => toggleModal()}>
          <ModalBody
            animate={animate ? "animateParent" : ""}
            nested={childModalVisibility && nested}
            onClick={(e) => e.stopPropagation()}
            animationType={animationType}
          >
            <ModalHeader>
              <h2>{heading}</h2>
              <IconClose onClick={() => toggleModal()} />
            </ModalHeader>
            <ModalContent>{content}</ModalContent>
            <ModalFooter>
              <Button
                color="primary"
                variant="contained"
                label="Primary"
                onClick={() => toggleModal(nested)}
              />
            </ModalFooter>
            {childModalVisibility && (
              <ModalBody animate={animate ? "animateChild" : ""}>
                <ModalHeader>
                  <h2>{childHeading}</h2>
                  <IconClose onClick={() => toggleModal(nested)} />
                </ModalHeader>
                <ModalContent>{childContent}</ModalContent>
                <ModalFooter>
                  <Button
                    color="primary"
                    variant="contained"
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
