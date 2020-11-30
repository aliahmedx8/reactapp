import React from 'react'

class TodoForm extends React.Component{
    state = {
        title: ""
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, e);
    } 

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    

    render ()  {
        return ( 
            <div >
                <form onSubmit={this.onSubmit}> 
                   <input name="title" onChange={this.handleChange} value={this.state.title} />

                   <input value="Submit" type="submit" />
                </form>
    
            </div>
        )

    }
    
}


export default TodoForm;