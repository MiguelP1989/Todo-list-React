import React from "react"

export default (props) => {
    console.log(props.todo.complete);
    return (
<div>
    <div style={{
        textDecoration: props.todo.complete ? "line-through" : ""
    }}

    onClick={props.toggleComplete}
    >
    {props.todo.text}
    </div>
    <button onClick={props.deleteTodo}>x</button>
    </div>
)
}
