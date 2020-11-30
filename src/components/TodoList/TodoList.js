const TodoList = ({todos}) =>  {

    return ( 
        <div >
            {
                todos.map( todo => {
                    return (
                        <div key={todo.id}  >{todo.title}</div>
                    )
                })
            }

            
        </div>
    )
}

export default TodoList;