import React, { Component } from 'react';
import axios from 'axios';

const API_Base = "http://rest.learncode.academy/api/efa/friends";

class FriendListApp extends Component {

constructor(props) {
    super(props);
    this.state = {friends: [] }
    console.log('Constructor, state:', this.state.friends)
}

handleSubmit(event) {
    event.preventDefault();
    console.log("Button pressed.");
    var name = this.refs.name.value;
    var age = this.refs.age.value;
    var friendsTemp = this.state.friends;

    axios.post(API_Base, { name, age})
    .then( response => {
        friendsTemp.push(response.data);
        this.setState({ friends: friendsTemp});
        this.refs.name.value = "";
        this.refs.age.value = "";
        console.log(response);
    });
}

    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <div className="col-xs-4">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <h3>Enter a Friend!!</h3>
                            <fieldset className="form-group">
                                <label>Friend's Name:</label>
                                <input type="text"
                                    ref="Name"
                                    name="Name"
                                    className="form-control"
                                />
                            </fieldset>

                            <fieldset className="form-group">
                                <label>Friend's Age: </label>
                                <input type="text"
                                    ref="Age"
                                    name="Age"
                                    className="form-control"
                                />
                            </fieldset>
                            
                            <button className="btn btn-success" type="submit">Save Friend</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FriendListApp