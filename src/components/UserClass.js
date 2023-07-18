/* eslint-disable no-useless-constructor */
import React from "react";


class UserClass extends React.Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <div className='user-card'>
                <h2>Name : {this.props.name}</h2>
                <h3>Hyderabad</h3>
                <h3>Number : 9133226611</h3>
            </div>
        )

    }
}

export default UserClass