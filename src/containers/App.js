import React, { Component } from 'react'
import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor')
  }
  state = {
    persons: [
      {
        name: 'Albert',
        age: 21,
        id: 'asdf'
      },
      {
        name: 'Manu',
        age: 11,
        id: 'ddfsf'
      },
      {
        name: 'Karina',
        age: 21,
        id: 'poow'
      }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true; //true = always let react update
  }

  componentDidUpdate() {
    console.log('[App.js] compenentDidUpdate');
  }

  switchNameHandler = newName => {
    // console.log('clicked')
    // DO NOT DO THIS: this.state.persons[0].name = 'Albertus Chirstyadhi'
    this.setState({
      persons: [{
        name: 'Albertus Chirstyadhi',
        age: 2019 - 1998
      },
      {
        name: newName,
        age: 11
      },
      {
        name: 'Karina Kristina',
        age: 2019 - 1998
      }
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {

    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangeHandler}
                />;
    }

    return (
      // wrap all app with StyleRoot provided by Radium
      // to have
      <div className={classes.App}>
        <button onClick={() => this.setState({showCockpit: false})}>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} /> : null}
        {persons}
      </div>
    )
    //null renders nothing
    // return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'I\'m a React App'));
  }
}

export default App
