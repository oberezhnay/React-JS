import React, { Component } from 'react'
import Row from './Row';

export default class TableBody extends Component {
    render() {
        return (
            <tbody>
                {this.props.contacts.map(contact =>( 
                    <Row key={contact.id} user={contact} />
                ))}
            </tbody>
        )
    }
}