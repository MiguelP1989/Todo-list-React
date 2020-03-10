import React from "react"
import shortid from "shortid"


export default class TodoForm extends React.Component {
    state = {
        text: ""
    }

    handlechange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        if (this.state.text === "") {
            return
        }
        // submit the form
        this.props.onSubmit({
            text: this.state.text,
            complete: false,
            id: shortid.generate()

        })
        this.setState({
            text:""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input
            name="text"
            value={this.state.text}
            onChange={this.handlechange}
            placeholder="todo..."
            />
            <button onClick={this.handleSubmit}>add todo</button>
            </form>
        )
    }
}
