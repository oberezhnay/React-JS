import React, { Component } from 'react'
import './ContactsBookForm.css'

export default class ContactsBookForm extends Component {
    onInputChange = e => {
        if (e.target.name ==='age'){
            this.props.onChange({
                [e.target.name]: parseInt(e.target.value)
            });

        } else {
        this.props.onChange({
            [e.target.name]: e.target.value
        });
    }
    };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.props.contact)
    };
  
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className='addcontacts-form'>
                <div>
                <input 
                    type='text' 
                    name='name'
                    placeholder='Name'
                    value={this.props.pickedContact.name||this.props.contact.name} 
                    onChange={this.onInputChange}/>
               </div>
                <div>
                <input 
                    type='text' 
                    name='surname'
                    placeholder='Surname'
                    value={this.props.pickedContact.surname||this.props.contact.surname} 
                    onChange={this.onInputChange}/>
                </div>
                <div>
                <input 
                    type='number' 
                    name='age'
                    placeholder='Age'
                    value={this.props.pickedContact.age||this.props.contact.age} 
                    onChange={this.onInputChange}/>
                </div>
                <div>
                <input 
                    type='text' 
                    name='phone'
                    placeholder='Phone'
                    value={this.props.pickedContact.phone||this.props.contact.phone} 
                    onChange={this.onInputChange}/> 
                 </div>
                <button>Save Contact</button>
            </form>
        )
    }
}
