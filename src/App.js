import './App.css';
import React from 'react';
import TodoList from "./components/TodoList/TodoList";
import TodoForm from './components/TodoForm/TodoForm';
import axios from 'axios';
import {Link, BrowserRouter as Router, Route} from "react-router-dom";
import About from "./components/About";


class App extends React.Component {
    state = {
        todos : [],
    }

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(res => this.setState( {todos: res.data} )   )
    }

    addtodo = (todo, e) => {
        e.preventDefault();

        let newTodo = {
            id: "ftuiininofrioo",
            completed: false,
            title: todo
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    
    render(){
        return ( 
        <Router>
            <div className = "container">
                <>
                    <Link to="/Home">Home </Link>
                    <Link exact to="/about">About </Link>
                </>
                <h1 className = "App-header">
                    My App Todo 
                </h1> 

                <Route  path = "/Home" exact 
                    render = {
                        props => 
                            <>
                                <TodoForm addTodo={this.addtodo} />
                                <TodoList todos = {this.state.todos} />
                            </>
                    }
                 />
            </div>

                <Route exact path="/about" component={About} />

        </Router>
        )
    }
}


export default App;  