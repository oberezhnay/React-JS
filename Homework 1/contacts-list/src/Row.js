import React, { Component } from 'react'


export default class Row extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.surname}</td>
                <td>{this.props.user.age}</td>
                <td>{this.props.user.phone}</td>           
            </tr>
        )
    }
}
