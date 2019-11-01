  
import React from 'react';

export default class AddBuilding extends React.Component {
  render() {
    return (
      <div>
        <b>Add A Building</b>
        <form onSubmit={this.props.addBuilding}>
          <input type='text' name='Code' placeholder='Code' />
          <input type='text' name='Name' placeholder='Name' />
          <input type='text' name='Address' placeholder='Address' />
          <input type='text' name='Latitude' placeholder='Latitude' />
          <input type='text' name='Longitude' placeholder='Longitude' />
          <button type='submit'>Add Building</button>
        </form>
      </div>
    );
  }
}