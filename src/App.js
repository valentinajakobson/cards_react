import React, {Component} from 'react';
import './App.css';
import Persons from './Persons/Persons';

class App extends Component {
state = {
  persons: [
    {id: '1', name:"Marja", title: "CEO", age: 30},
    {id: '2', name:"Anja", title: "CTO", age: 40},
    {id: '3', name:"Katja", title: "PM", age: 34},
    {id: '4', name:"Katjaa", title: "PM", age: 34},
    {id: '5', name:"Katjaa", title: "PM", age: 34}
  ],
  showPersons: false
}

changeNameHandler = (newName) => {

this.setState({
  persons: [
    {name: newName, title: "CEO", age: 30},
    {name: "Max", title: "CTO", age: 40},
    {name: "Rost", title: "PM", age: 34},
  ]
})
}

inputNameHandler = (event, id)=> {
  const personIndex = this.state.persons.findIndex(
    p => {
      return p.id === id;
    }
  ); // we try to figure out is there that ID in this array

  const person = {
    ...this.state.persons[personIndex]
  }; //we take right obj and spread operator we created new obj (copy) distribute all atributes from that object

  person.name = event.target.value; //we take a name and replace it with event.target.value

  const persons = [...this.state.persons]; //we spread original array
  persons[personIndex] = person; //and we put updated obj back to that array

//and finally we update state new obj, updated array
  this.setState({
    persons: persons
  })
  }



  togglePersonsHandler = () => {
    const checkToggle = this.state.showPersons;
    this.setState({
      showPersons: !checkToggle
    })
  }

  removeItemHandler = (personIndex) => {
    const persons = [...this.state.persons];
     // const persons = [...this.state.persons.slice();
     persons.splice(personIndex, 1);
     this.setState({persons : persons});
  }

  render() {
    const btnStyle = {
      backgroundColor: "#89D2D0",
      padding: '10px',
      cursor:'pointer',
      borderRadius:'5px',
      border: 'none',
    }

    let personsIf = null;

    if (this.state.showPersons) {
      personsIf = (
      <div>
        { this.state.persons.map((p, index) => {
          return <Persons
          click={() => this.removeItemHandler(index)}
          name={p.name}
          title={p.title}
          age={p.age}
          key={p.id}
          changed={(event) => this.inputNameHandler(event, p.id)}
          />;
        })}
      </div>
      )
    }

      return(
      <div>
        <h1>Task about cards (React.js)</h1>
        <button style={btnStyle} onClick = {this.togglePersonsHandler}>toggle cards</button>
        {personsIf}
      </div>
    )
  }
};

export default App;
