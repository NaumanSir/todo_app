import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'create React App',
        completed: false
      },
      {
        id: 2,
        title: 'take out trash',
        completed: true
      },
      {
        id: 3,
        title: 'call your brother',
        completed: false
      },
    ]
  }

markComplete = (id) => {
  console.log(id)
}

  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
