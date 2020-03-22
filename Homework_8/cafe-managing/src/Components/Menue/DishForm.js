import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveMenue } from '../../store/actions/menue';
import { useHistory } from 'react-router';

function DishForm({ item, saveMenue }) {
  const [dish, setDish]= useState(item);
  const history = useHistory();

  function onFormSubmit(e){
    e.preventDefault();
    saveMenue(dish);
    history.push('/menue');
  }

  function onChange({target}){
    setDish({
      ...dish, 
      [target.name]: target.value
    });
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor='name'>Name</label>
      <input 
        id='name'
        name='name'
        type='text' 
        value={dish.name}
        onChange = {onChange}
        />
      <label htmlFor='name'>Description</label>
      <input 
        id='description'
        name='description'
        type='text' 
        value={dish.description}
        onChange = {onChange}
        />
      <label htmlFor='name'>Price</label>
      <input 
        id='description'
        name='description'
        type='text' 
        value={dish.price}
        onChange = {onChange}
        />
        <label htmlFor='name'>Calories</label>
        <input 
        id='sitsCount'
        name='sitsCount'
        type='text' 
        value={dish.calories}
        onChange = {onChange}
        />
        <label htmlFor='name'>Ingredients</label>
        <input 
        id='sitsCount'
        name='sitsCount'
        type='text' 
        value={dish.photo}
        onChange = {onChange}
        />
        <button>Save</button>
    </form>
  );
}

function mapStateToProps( state, {id}){
  console.log(state)
  return {
    item: 
      id !=='new' 
        ? state.menue.list.find(item => +item.id === +id)
        : {name: '', description:'', price:'', calories:'', photo:''}
  };
}

const mapDispatchToProps = {
  saveMenue: saveMenue
}

export default connect(mapStateToProps, mapDispatchToProps)(DishForm);
