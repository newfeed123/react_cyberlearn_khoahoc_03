import styled from 'styled-components'
import React from 'react'

export const Link = ({className, children, ...rest}) => (
    <a className={className}>
        {children}
    </a>
)

export const StyledLink = styled(Link)`
    color: palegoldenrod;
    font-weight: bold;
`