import styled from 'styled-components'

export const Button = styled.button`
    background: ${props => props.primary ? "blue" : "orange"};
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    font-weight: bold;
    padding: 1rem;
    opacity: 1;
        &:hover{
            opacity: 0.7;
            transition: all 1s;
        }
        &.button_style{
            background-color: red;
            font-size: 25px;
        }
`

export const SmallButton = styled(Button)`

`