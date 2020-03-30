import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as mutations from '../store/mutations';

const TaskDetail = ({ id, comments, task, isComplete, groups, setTaskCompletion, setTaskGroup, setTaskName}) => (
    <div>
        <div>
            <input type="text" value={task.name} onChange={setTaskName} />
        </div>
        <div>
            <button onClick={() => setTaskCompletion(id, !isComplete)} >{isComplete ? `Re-Open` : `Complete`}</button>
        </div>
        <div>
            <select onChange={setTaskGroup} value={task.group}>
                {groups.map(group => (
                    <option key={group.id} value={group.id}>{group.name}</option>
                ))}
            </select>
        </div>
        <div>
            <Link to="/dashboard">
                <button>Done</button>
            </Link>
        </div>
    </div>
)

const mapStateToProps = (state, ownProps) => {
    let id  = ownProps.match.params.id;
    let task = state.tasks.find(task => task.id === id);
    let groups = state.groups;
    return {
        id,
        task,
        isComplete: task.isComplete,
        groups
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        setTaskCompletion(id, isComplete) {
            dispatch(mutations.setTaskCompletion(id, isComplete));
        },
        setTaskGroup(e) {
            console.log("Group Id : "+e.target.value);
            dispatch(mutations.setTaskGroup(id, e.target.value));
        },
        setTaskName(e) {
            dispatch(mutations.setTaskName(id, e.target.value));
        }
    }
}

export const ConnectedTaskDetail = connect(mapStateToProps, mapDispatchToProps)(TaskDetail);