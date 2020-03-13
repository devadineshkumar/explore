import React from 'react';
import './App.css';
import Todos from './components/Todos';
import { render } from '@testing-library/react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
// import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/pages/About';
import axios from 'axios';

class App extends React.Component {




  state = {
    todos: []
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(res => this.setState({todos: res.data}))
  }

  markComplete = (id) => {
  
    this.setState({todos: this.state.todos.map (  (todo) => {
        if(todo.id === id) {
         
          todo.completed = !todo.completed
        }
      return todo;
    } )}) 
  }

  delTodo = (id) => {
    console.log("Delete id "+id);
    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
    .then(res => this.setState( { todos : [...this.state.todos.filter(todo => todo.id !== id)] } ));
  }

  addTodo = (title) => {
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed : false
    }).then(res => this.setState({todos: [...this.state.todos, res.data]}))
    //this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <Router>
      <div  className="App">
        <div className="container">
          <Header></Header>

          <Route exact path="/" render={props => (
          <React.Fragment>
                  <AddTodo addTodo={this.addTodo}/>
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
          </React.Fragment>
              )}/>

            <Route path="/about" component={About}/>
        
        </div>
      </div>
      </Router>
    );

  }
 
}



export default App;