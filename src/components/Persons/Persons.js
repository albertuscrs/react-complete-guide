// import React, { Component } from 'react'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Person from './Person/Person'
class Persons extends PureComponent { // punya sendiri caranya untuk cek semua components yang ganti
  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if(nextProps.persons !== this.props.persons ||
  //      nextProps.changed !== this.props.changed ||
  //      nextProps.clicked !== this.props.clicked){
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshopt){
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshopt);
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }

  render (){
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
        return( <Person click = {
            () => this.props.clicked(index)
          }
          name = {
            person.name
          }
          age = {
            person.age
          }
          key = {
            person.id
          }
          changed = {
            (event) => this.props.changed(event, person.id)
          }
          />
        );
      }
    );
  }
};

Persons.propTypes = {
  persons: PropTypes.array,
  clicked: PropTypes.func,
  changed: PropTypes.func,
  isAuthenticated: PropTypes.bool
}

export default Persons;