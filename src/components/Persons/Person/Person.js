import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './Person.css'
import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'

class Person extends Component {
  componentDidMount() {
    this.inputElement.focus();
  }

  render (){
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        <p onClick={ this.props.click }>I&apos;m { this.props.name } and I am { this.props.age } years old!</p>
        <p>{ this.props.children }</p>
        < input
        type="text"
        ref={(inputEl) => {this.inputElement = inputEl}}
        onChange={ this.props.changed }
        value={ this.props.name }/>
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  children: PropTypes.node
}

export default withClass(Person, classes.Person);