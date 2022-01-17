import React from 'react'
import styled from "styled-components"

const HeaderContainer = styled.div`
    background-color: #EEE;
    padding: 2rem;
    border-bottom: 1px solid lightgrey;
`

interface Props {

}

const Header = (props: Props) => {
    return (
        <HeaderContainer>
            Header
        </HeaderContainer>
    )
}

export default Header