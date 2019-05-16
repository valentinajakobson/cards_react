import React, {Component} from 'react';
import './App.css';
import Persons from './Persons/Persons';

class App extends Component {
state = {
  persons: [
    {name:"Marja", title: "CEO", age: 30},
    {name:"Anja", title: "CTO", age: 40},
    {name:"Katja", title: "PM", age: 34}
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

inputNameHandler = event => {
  this.setState({
    persons: [
      {name: "Kati", title: "CEO", age: 30},
      {name: event.target.value, title: "CTO", age: 40},
      {name: "Rost", title: "PM", age: 34},
    ]
  })
  }

  togglePersonsHandler = () => {
    const checkToggle = this.state.showPersons;
    this.setState({
      showPersons: !checkToggle
    })
  }

  render() {
    const btnStyle = {
      backgroundColor: "#89D2D0",
      padding: '10px',
      cursor:'pointer',
      borderRadius:'5px',
      border: 'none',
    }

    return(
      <div>
        <h1>Task about cards (React.js)</h1>
        <button style={btnStyle} onClick = {this.togglePersonsHandler}>toggle cards</button>
        {this.state.showPersons ? <div>
            <Persons
            click = {this.changeNameHandler.bind(this, 'Sandra')}
            name = {this.state.persons[0].name}
            title = {this.state.persons[0].title}
            age = {this.state.persons[0].age}
            />

            <Persons
            click = {() => this.changeNameHandler('Tiina')}
            name = {this.state.persons[1].name}
            title = {this.state.persons[1].title}
            age = {this.state.persons[1].age}
            changed = {this.inputNameHandler}
            />

            <Persons
            name = {this.state.persons[2].name}
            title = {this.state.persons[2].title}
            age = {this.state.persons[2].age}
            />

          </div> :null}
      </div>
    )

  }
};

export default App;
