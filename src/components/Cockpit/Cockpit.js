import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import classes from './Cockpit.css'

const cockpit = (props) => {
  useEffect(() => { //runs for every update
    console.log('[Cockpit.js] useEffect');
    // Http request...
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] clean up work in useEffect');
    }
  }, []); // [] untuk nentuin kapan useEffect kerja, kalau kosong itu kerjanya diawal pas render, bisa banyak soalnya dia array tergantung kebutuhan

  // boleh banyak useEffect()

  useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] 2nd clean up work in useEffect');
      }
  });

  const assignClasses = [];
  let btnClass = '';
  if(props.showPersons){
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignClasses.push(classes.bold); // classes = ['red', 'bold']
  }
  return (
    <div className={classes.Cockpit}>
      <h1> Hi I&apos;m a React App.Yea yea </h1>
      <p className = {assignClasses.join(' ')}> This is really working! </p>
      <button
        className = {
          btnClass
        }
        onClick = {
            props.clicked
        }>
        Toggle Persons </button>
    </div>
  );
};

cockpit.propTypes = {
  showPersons: PropTypes.bool,
  persons: PropTypes.array,
  clicked: PropTypes.func,
  personsLength: PropTypes.number
}

export default React.memo(cockpit); //react memoization