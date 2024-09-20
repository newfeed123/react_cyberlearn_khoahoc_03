import React, { Component } from 'react';
import { Button } from '../Components/Button';
import { StyledLink } from '../Components/Link';

class DemoJSS extends Component {
    render() {
        return (
            <div>
                <Button className='button_style' primary>Hello</Button>
                <StyledLink>ahihi</StyledLink>
            </div>
        );
    }
}

export default DemoJSS;