import React, { Component } from 'react';
import ContactsListItem from '../ContactsListItem/ContactsListItem';
import propTypes from '../propTypes'
import './ContactsListItems.css'

export default class  ContactsListItems extends Component {
    render() {
        const { list, onDelete, onPick } = this.props;
        return (
            <table className="conactsBook-list">
                <tbody>
                {list.map((item) => (
                    <ContactsListItem
                        key={item.id} 
                        item={item} 
                        onDelete={onDelete}
                        onPick={onPick} />
                ))}
                </tbody>
            </table>
        )
    }
}

ContactsListItems.propsTypes= {
    list: propTypes.contactsListItems.isRequired,
    onDelete: propTypes.func.isRequired,
    onPick: propTypes.func.isRequired
}