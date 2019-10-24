import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Person from './Person/Person'

class Persons extends Component {
  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshopt){
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshopt);
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
  changed: PropTypes.func
}

export default Persons;