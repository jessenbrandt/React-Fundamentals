import React, { Component } from 'react';

export default class NewConcepts extends Component {
    create(event) {
        event.preventDefault();
        let text = this.refs.NewConceptText.value;
        if (text) {
            this.props.createConcept(text);
            this.refs.NewConceptText.value = '';
        }
    }

    render() {
        return (
            <form onSubmit={this.create.bind(this)}>
            <label>New Concept:</label> <input type="text" ref="newConceptText"/> <button className="button" type="submit">+</button>
            </form>
        );
    }
}