import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Momin', age: 26 },
      { name: 'Eiman', age: 20 },
      { name: 'Mahnoor', age: 18 }
    ],
    otherState: 'some other value'
  };
  
  switchNameHandler = (newName) => {
    // console.log('was clicked');
    // DO NOT DO THIS: this.state.persons[0].name = 'Momin Tariq';
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Eiman', age: 20 },
        { name: 'Mahnoor', age: 18 }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Momin', age: 26 },
        { name: event.target.value, age: 20 },
        { name: 'Mahnoor', age: 18 }
      ],
      otherState: 'some other state',
      showPersons: false
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              name={person.name} 
              age={person.age}/>
          })}
      </div>
      );
    }

    return (
      <div className="App">
        <button
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        
        {persons}
        
        {/* 
          this.state.showPersons ?
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this,'Momin Tariq!!!')}
                changed={this.nameChangedHandler}>Hobbies: sleeping</Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}/>
            </div> : null
        */}
      </div>
    );
  }
}

export default App;
