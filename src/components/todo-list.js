import React from "react"
import TodoForm from "../components/todo-form";
import Todo from "../components/todo";


export default class TodoList extends React.Component {
    state= {
        todos: [],
        todosToShow: "all",
        toggleAllComplete: true
    }

    addTodo = (todo) => {
        const newTodos = [todo,...this.state.todos]
        this.setState({
            todos: newTodos
        })
    }

    toggleComplete = id => {

        this.setState({
            todos: this.state.todos.map(todo => {
                // suppose to update
                if (todo.id === id) {
                    console.log("tooodo", todo.id);

                    return {
                        ...todo,
                    // id: todo.id,
                    // text: todo.text,
                    complete: !todo.complete
                }
                } else {

                    return todo
                }

            })
        })
    }
    updateTodoToShow = (str) => {

        this.setState({
            todosToShow: str
        })
    }
    handleDeleteToDo = id => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }))
    }
    removeAllTodoThatAreComplete = () => {

        // filter keep the item when the condition is true
        this.setState ({
            todos: this.state.todos.filter(todo => !todo.complete)
        })
    }
    render() {
        let todos = [];
        if (this.state.todosToShow === "all") {
            todos = this.state.todos

        }
        else if (this.state.todosToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.complete)


        }
        else if (this.state.todosToShow === "complete") {
            todos =this.state.todos.filter(todo => todo.complete)
        }
        return (
            <div>
            <TodoForm onSubmit={this.addTodo}/>
            {JSON.stringify(this.state.todos)}
            {todos.map(todo => {
                console.log(todo);
                return (
                    <Todo key={todo.id}
                    toggleComplete={() => this.toggleComplete(todo.id)}
                    todo={todo}
                    deleteTodo={() => this.handleDeleteToDo(todo.id)}/>

                )
            })}
            <div>
            todos left: {this.state.todos.filter(todo => !todo.complete).length}
            </div>
            <button onClick={() => this.updateTodoToShow("all")}>all</button>
            <button onClick={() => this.updateTodoToShow("active")}>active</button>
            <button onClick={() => this.updateTodoToShow("complete")}>complete</button>
            {this.state.todos.filter(todo => todo.complete).length ? (<div>
            <button onClick={() => this.removeAllTodoThatAreComplete()}>remove all complete todos</button>
            </div> ) : null}
            <div onClick={() => this.setState({
                todos: this.state.todos.map(todo => ({
                    ...todo,
                    complete: this.state.toggleComplete
                })),
                toggleAllComplete: !this.state.toggleAllComplete
            })}>
            <button>Toggle all complete: {`${this.state.toggleAllComplete}`}</button>
            </div>
            </div>



        )
    }
}
