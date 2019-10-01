import React, { Component } from 'react'
import classes from './App.css'
import Person from './Person/Person'

class App extends Component {
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
    showPersons: false
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                  click = {
                    () => this.deletePersonHandler(index)
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
                    (event) => this.nameChangeHandler(event, person.id)
                  }
                />
              );
            })
          }
        </div>
      );
      style.backgroundColor = 'red';
    }

    const assignClasses = [];

    if(this.state.persons.length <= 2){
      assignClasses.push(classes.red); // classes = ['red']
    }
    if(this.state.persons.length <= 1){
      assignClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      // wrap all app with StyleRoot provided by Radium
      // to have
      <div className={classes.App}>
        <h1>Hi I&apos;m a React App. Yea yea</h1>
        < p className = {
          assignClasses.join(' ')
        } > This is really working! </p>
        <button
          style = {
            style
          }
          onClick = {
            this.togglePersonsHandler
          }
        >Toggle Persons</button>
        {persons}
      </div>
    )
    //null renders nothing
    // return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'I\'m a React App'));
  }
}

export default App
