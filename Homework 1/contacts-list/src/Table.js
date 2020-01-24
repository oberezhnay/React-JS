import React, { Component } from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'

export default class Table extends Component {
    render() {
        return (
            <table>
                <TableHead headItems={this.props.contacts[0]} />
                <TableBody contacts={this.props.contacts} />
            </table>
        )
    }
}
