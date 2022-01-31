import React from 'react'
import styled from 'styled-components'

import arrow_down from "./../../../assets/img/arrow_down.png"

const FormSelectContainer = styled.select`
    appearance: none;
    background: url(${arrow_down}) no-repeat;
    background-color: white;

    background-position: 95% 50%;
    border-radius: 8px;
    padding: 12px 16px;   
`

interface Props {
    children: React.ReactNode;
    name: string;
    id: string;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const FormSelect = ({ children, name, id, onChange }: Props) => {
    return (
        <FormSelectContainer name={name} id={id} onChange={onChange}>
            {children}
        </FormSelectContainer>
    )
}

export default FormSelect
