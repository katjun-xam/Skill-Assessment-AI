import React from "react";
import styled, { css } from "styled-components";

const AvatarContainer = styled.div<{
  width?: string;
  height?: string;
  variant?: string;
  color?: string;
  fontColor?: string;
  fontSize?: string;
}>(
  (props) => css`
    ${props.color
      ? css`
          background-color: ${props.color};
        `
      : css`
          background-color: ${props.theme.primary};
        `}
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    ${props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `}
    ${props.fontColor &&
    css`
      color: ${props.fontColor};
    `}
    ${props.variant === "square"
      ? css`
          border-radius: 0%;
        `
      : props.variant === "rounded"
      ? css`
          border-radius: 10%;
        `
      : css`
          border-radius: 50%;
        `}
    ${props.width &&
    css`
      width: ${props.width};
    `}
    ${props.height &&
    css`
      height: ${props.height};
    `}
  `
);
const AvatarGroupContainer = styled.div(
  (props) => css`
    & > img:not(:first-of-type) {
      position: relative;
      margin-left: -8px;
    }
  `
);

const AvatarImage = styled.img<{
  width?: string;
  height?: string;
  variant?: string;
}>(
  (props) => css`
    ${props.variant === "square"
      ? css`
          border-radius: 0%;
        `
      : props.variant === "rounded"
      ? css`
          border-radius: 10%;
        `
      : css`
          border-radius: 50%;
        `}
    width: 50px;
    height: 50px;
    ${props.width &&
    css`
      width: ${props.width};
    `}
    ${props.height &&
    css`
      height: ${props.height};
    `}
  `
);

type IAvatarProps = {
  avatars?: string[];
  width?: string;
  height?: string;
  initials?: string;
  name?: string;
  icon?: React.ReactNode;
  variant?: string;
  bgColor?: string;
  fontSize?: string;
  fontColor?: string;
};

const Avatar = ({
  avatars,
  width,
  height,
  initials,
  name,
  icon,
  variant,
  bgColor,
  fontSize,
  fontColor,
}: IAvatarProps) => {
  return (
    <>
      {avatars ? (
        <AvatarGroupContainer>
          {avatars.map((item, index) => (
            <AvatarImage
              key={index}
              src={item}
              width={width}
              height={height}
              variant={variant}
            />
          ))}
        </AvatarGroupContainer>
      ) : (
        <AvatarContainer
          width={width}
          height={height}
          variant={variant}
          color={bgColor}
          fontSize={fontSize}
          fontColor={fontColor}
        >
          {initials && <span>{initials}</span>}
          {name && name.split(" ")[0][0] + name.split(" ")[1][0]}
          {icon && icon}
        </AvatarContainer>
      )}
    </>
  );
};

export default Avatar;
