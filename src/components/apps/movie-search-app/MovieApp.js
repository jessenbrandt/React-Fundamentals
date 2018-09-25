import React, { Component } from 'react';
import styled from 'styled-components';
import { Form } from './Form';

const Moviewrapper = styled.div`
background: lightpink;
`

export default class MovieApp extends Component {
    render() {
        return (
            <Moviewrapper className="main">
                <div className="mainDiv">
                    <Form />
                </div>
            </Moviewrapper>
        );
    }
}