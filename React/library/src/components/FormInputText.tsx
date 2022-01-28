import React from "react";
import styled, { css } from "styled-components";

const Label = styled.label<{ floatingLabel?: boolean }>(
  (props) => css`
    display: block;
    font-size: 1rem;
    ${!props.floatingLabel &&
    css`
      color: ${props.theme.textExtraDark};
      margin-bottom: 12px;
    `}
    ${props.floatingLabel &&
    css`
      position: absolute;
      top: 15px;
      left: 17px;
    `}
    transition: all 0.2s ease-in-out;
  `
);

const Field = styled.input<{ hasError?: boolean }>(
  (props) => css`
    flex: 1 0 auto;
    border: 1px solid ${props.theme.bgDark};
    border-radius: 8px;
    padding: 15px 16px;
    color: ${props.theme.primary};
    font-size: 1rem;
    &:focus {
      outline: none;
      border: 1px solid ${props.theme.primary};
    }
    ${props.hasError &&
    css`
      border: 2px solid ${props.theme.error};
    `}
  `
);

const FormInputTextContainer = styled.div<{ floatingLabel?: boolean }>(
  (props) => css`
    display: flex;
    position: relative;
    ${!props.floatingLabel &&
    css`
      flex-direction: column;
    `}
    margin-bottom: 12px;
    ${Field}:focus + ${Label} {
      top: 5px;
      font-size: 9px;
    }
    ${Field}:not(:placeholder-shown) + ${Label} {
      top: 5px;
      font-size: 9px;
    }
  `
);

interface Props {
  name: string;
  value: string;
  label?: string;
  floatingLabel?: boolean;
  hasError?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FormInputText = ({
  name,
  label,
  floatingLabel,
  value,
  hasError,
  onChange,
}: Props) => {
  return (
    <FormInputTextContainer>
      {!floatingLabel && <Label htmlFor={name}>{label}</Label>}
      <Field
        type="text"
        name={name}
        id={name}
        value={value}
        hasError={hasError}
        onChange={onChange}
        placeholder=" "
      />
      {floatingLabel && (
        <Label htmlFor={name} floatingLabel={floatingLabel}>
          {label}
        </Label>
      )}
    </FormInputTextContainer>
  );
};

export default FormInputText;
