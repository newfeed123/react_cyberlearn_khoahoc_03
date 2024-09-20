import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

export const DemoTheme = (propsComponent) => {
    //trong function chỉ có biến
    const configTheme = {
        darkColor: '#000',
        blueColor: '#333CC',
    }

 
    const DivStyle = styled.div`
        color: ${props => props.theme.darkColor};
        padding: 5%;
        background-color: ${props => props.theme.blueColor};
    `

    return (
        <ThemeProvider theme={configTheme}>

            <DivStyle>DemoTheme</DivStyle>

        </ThemeProvider>
    )
}
