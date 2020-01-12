import React, { Component} from 'react';
import { addToDo, fetchToDos } from './../actions';
import { connect } from 'react-redux';

class TodoList extends Component{

    handleChange = (event) => {
        this.setState({
            newTodo: event.target.value
        })
    }
    componentDidMount() {
        this.props.fetchToDos();
    }

    addTodo = () => {
        this.props.addToDo(this.state.newTodo);
        this.props.fetchToDos();
    }

    render() {
        const { todos } = this.props;
        return (
            <React.Fragment>
                <input type="text" onChange={(event) => this.handleChange(event)}/>
                <button onClick={() => this.addTodo()}>Add</button>
                <h4> List</h4>
                <ul>
                    {todos && Object.entries(todos).map(([key, value]) => <li> {value}</li>)}
                </ul>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.data
    }
}


export default connect( mapStateToProps , {addToDo, fetchToDos})(TodoList);