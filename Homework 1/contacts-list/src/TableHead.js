import React, { Component } from 'react'

export default class TableHead extends Component {
    render() {
        return (
        <thead>
            <tr>
                {
                Object.keys(this.props.headItems).map((headItem, index) => 
                 <th key={index}>{headItem}</th>
                )}
            </tr>
        </thead>
        )} 
    }