import React from 'react'
import PropTypes from 'prop-types'
import './Person.css'

const person = props => {
  return (
    <div className='Person'>
      <p onClick={ props.click }>I&apos;m { props.name } and I am { props.age } years old!</p>
      {/* <p>{ props.children }</p> */}
      <input type="text" onChange={ props.changed } value={ props.name } />
    </div>
  )
}

person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default person