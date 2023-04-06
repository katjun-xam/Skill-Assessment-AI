import { styled } from '@mui/material/styles';

import { IModalBodyProps } from "./types";

export const ModalContainer = styled('div')(
  ({ theme }) => `
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
    background: ${theme.bg.bgDark};
    overflow: auto;
    z-index: 2;
  `
);

export const ModalBody = styled('div')<IModalBodyProps>(
  ({ animate, animationType, childModalVisibility, theme }) => `
    background: ${theme.bg.bgWhite};
    height: auto;
    margin: auto;
    width: 41.7%;
    @media all and (max-width: ${theme.breakpoints.md}) {
      width: 70%;
    }
    @media all and (max-width: ${theme.breakpoints.sm}) {
      width: 100%;
      margin: 0px;
      height: 100vh;
      border-radius: 0px;
      padding: 0px 28px 0px 28px;
      border-top: none;
    }
    padding: 28px 28px 0px 28px;
    border-radius: ${theme.border.borderRadiusMd};
    border-top: ${`${theme.border.borderRadiusSm} solid ${theme.colors.primary}`};
    position: relative;

    ${animationType && `
      animation: ${animationType} 0.6s;
      @keyframes grow {
        0% {
          transform: scale(0.6);
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

    ${animate && `
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

    ${childModalVisibility && `
      & > div:last-child {
        position: absolute;
        width: 62%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid ${theme.text.textBlack};
        @media all and (max-width: ${theme.breakpoints.sm}) {
          height: 50vh;
        }
      }
    `}
  `
);

export const ModalHeader = styled('div')(
  ({ theme }) => `
    display: flex;
    justify-content: space-between;
    h2 {
      line-height: 44px;
      margin: 0;
    }
    svg {
      cursor: pointer;
      fill: ${theme.text.textDark};
      flex-shrink: 0;
    }
    @media all and (max-width: ${theme.breakpoints.sm }) {
      padding-top: 28px;
    }
  `
);

export const ModalContent = styled('div')(
  ({ theme }) => `
    margin: 15px 0px;
    color: ${theme.text.textExtraDark};
  `
);
