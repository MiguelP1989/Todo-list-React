import React from 'react';
import TodoList from "./components/todo-list"

class App extends React.Component {
 state = {
     count: 0
 }

increment = () => {
    this.setState({
        count: this.state.count + 1
    })
}

decrement =() => {
    this.setState({
        count: this.state.count -1
    })
}

render() {
    return (
        <div>
        <TodoList/>
        </div>
    )
}

}



export default App;
