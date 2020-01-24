import React, { Component } from 'react'


export default class Row extends Component {
    render() {
        return (
            <tr>
                {Object.values(this.props.user).map((el, i) => 
                    <td key={i}>{el}</td>
                 )}
            </tr>
        )
    }
}
