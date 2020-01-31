import React, { Component } from 'react'
import propTypes from '../propTypes'
import './ContactsListItem.css'

export default class ContactsListItem extends Component {
    onDeleteBtnClick = (e)=>{  
        e.stopPropagation();
        this.props.onDelete(this.props.item.id);
    };

    onItemRowClick = () => {
        this.props.onPick(this.props.item.id);
    }
    render() {
        const { item }=this.props
        return (
        <tr >
            <td className={`contactslist-item ${item.isPicked ? 'picked':''}` } onClick={this.onItemRowClick}>
                {item.name} {item.surname}
                <button 
                    className='contactslist-itemBtn' 
                    onClick={this.onDeleteBtnClick}
                >
                     Delete
                </button>
            </td>
        </tr>
        )
    }
}

ContactsListItem.propTypes={
    item: propTypes.contactsListItem.isRequired,

}