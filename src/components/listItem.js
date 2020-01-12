import React from 'react';
import { completeToDo} from '../actions/';
import { connect } from 'react-redux';

class ListItem extends component {

    handleComplete = completeTodo => {
        completeToDo(completeTodo);
    }
    render() {
        const {todoId, todo} = this.props;
        return (
            <div key={todoId}>
                <h4>
                    {todo.title}
                    <span onClick={() => this.handleComplete(todoId)}>
                        <i>Complete</i>
                    </span>
                </h4>
            </div>
        );
    }
}

export default connect(null, {completeToDo})(ListItem);