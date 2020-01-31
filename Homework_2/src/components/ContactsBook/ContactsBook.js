import React, { Component } from 'react'
import ContactsListItems from './../ContactsListItems/ContactsListItems';
import './ContactsBook.css'
import ContactsBookForm from './../ContactsBookForm/ContactsBookForm';


export default class ContactsBook extends Component {
    state = {
        list: [
            {
              "id": 1,
              "age": 33,
              "name": "Leanne",
              "surname": "Graham",
              "phone": "1-770-736-8031 x56442",
            },
            {
              "id": 2,
              "age": 33,
              "name": "Ervin",
              "surname": "Howell",
              "phone": "010-692-6593 x09125",
            },
            {
              "id": 3,
              "age": 33,
              "name": "Clementine",
              "surname": "Bauch",
              "phone": "1-463-123-4447",
            },
            {
              "id": 4,
              "age": 33,
              "name": "Patricia",
              "surname": "Lebsack",
              "phone": "493-170-9623 x156",
            },
            {
              "id": 5,
              "age": 33,
              "name": "Chelsey",
              "surname": "Dietrich",
              "phone": "(254)954-1289"
            },
            {
              "id": 6,
              "age": 33,
              "name": "Dennis",
              "surname": "Schulist",
              "phone": "1-477-935-8478 x6430",
            },
            {
              "id": 7,
              "age": 33,
              "name": "Kurtis",
              "surname": "Weissnat",
              "phone": "210.067.6132",
            },
            {
              "id": 8,
              "age": 33,
              "name": "Nicholas",
              "surname": "Runolfsdottir V",
              "phone": "586.493.6943 x140",
            },
            {
              "id": 9,
              "age": 33,
              "name": "Glenna",
              "surname": "Reichert",
              "phone": "(775)976-6794 x41206",
            },
            {
              "id": 10,
              "age": 33,
              "name": "Clementina",
              "surname": "DuBuque",
              "phone": "024-648-3804",
            }
          ],
        newContact: {
            name: '',
            surname: '',
            age: '',
            phone: ''
        },
        pickedContact: {
          name: '',
          surname: '',
          age: '',
          phone: ''
      },
    };

    deleteContact = id => {
        const newList = this.state.list.filter(item =>{
            return item.id !== id;
        }) ;
        this.setState({
            list: newList
        });
    };

    pickContact = id =>{
      const newList = this.state.list.find(item =>{
        return item.id === id;
          })
          this.setState({
              pickedContact: newList
          });
  };

    onFormChange = changes => {
        this.setState({
            newContact: {
                ...this.state.newContact,
                ...changes
            }
        });
    };

    onFormSubmit = newContact => {
        this.setState({
            list: [
                ...this.state.list,
                {
                    id: Date.now(),
                    ...newContact
                }
            ],
            newContact: {name: '', surname:'', age: '', phone: ''} 
        })
    } 

    render() {
        return (
            <>
            <header className='contactsbook-header'>Contacts Book</header>
            <div className='contactsbook-container'>
            <ContactsListItems 
                list={this.state.list}
                onDelete = {this.deleteContact}
                onPick = {this.pickContact}
                />
            <ContactsBookForm
                pickedContact={this.state.pickedContact}
                contact={this.state.newContact}
                onChange={this.onFormChange}
                onSubmit={this.onFormSubmit}
                showBtnAdd={this.showBtnAdd}
            />
            </div>
            </>
          );
    }
}
