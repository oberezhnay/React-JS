import React, { Component } from 'react';
import ContactsListItems from '../ContactsListItems/ContactsListItems';
import propTypes from '../propTypes'

export default class ContactsList extends Component {
    onAddBtnClick = () =>{
        this.props.onAdd(this.props.contact)
    }



    render() {
        const { list, onDelete, onPicked } = this.props;
        return (
            <>
            <ContactsListItems
                list={list} 
                onDelete={onDelete}
                onPicked={onPicked} />
            <button 
                className='contactslist-addBtn'
                >Add contact</button>     
            </>
        )
    }
}

ToDoListItems.propsTypes= {
    list: propTypes.todoItems.isRequired,
    onDelete: propTypes.func.isRequired,
    onToggle: propTypes.func.isRequired
}