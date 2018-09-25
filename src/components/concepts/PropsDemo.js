import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PropsDemo extends Component {
    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <Title title="Celtic CSS Gods" />
                    <Author author="Allison Summers" />
                    <CodepenUrl codepenUrl="www.codepen.io" />
                    <Footer date="2/15/18" /> 
                </div>
            </div>
        );
    }
}

class Title extends React.Component {
    render() {
        return (
            <h3>
                {this.props.title}
            </h3>
        );
    }
}

class Author extends React.Component {
    render() {
        return (
            <h3>
                <p>{this.props.author}</p>
            </h3>
        );
    }
}

class CodepenUrl extends React.Component {
    render() {
        return (
            <h3>
                {this.props.codepenUrl}
            </h3>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <h3>
                {this.props.date}
            </h3>
        );
    }
}

//Defaults
PropsDemo.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    codepenUrl: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

PropsDemo.defaultProps = {
    title: 'Generic Creature project',
    author: 'EFA Student',
    codepenUrl: 'www.codepen.com',
    date: '01/01/2018'
}