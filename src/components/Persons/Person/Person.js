import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './Person.css'

class Person extends Component {

  render (){
    console.log('[Person.js] rendering...');

    return [
        <p key='s' onClick={ this.props.click }>I&apos;m { this.props.name } and I am { this.props.age } years old!</p>,
        < p key = 'sa'>{ this.props.children }</p>,
        < input key = 'sz' type="text" onChange={ this.props.changed } value={ this.props.name }/>
    ];
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  children: PropTypes.string
}

export default Person;