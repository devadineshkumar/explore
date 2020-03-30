import { applyMiddleware, createStore, combineReducers } from 'redux';
import { defaultState } from '../../server/defaultState';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import * as mutations from './mutations';

const sagaMiddleware = createSagaMiddleware();

import * as sagas from './sagas.mock';

export const store = createStore(

    combineReducers({
        tasks(tasks = defaultState.tasks, action) {
            switch (action.type) {
                case mutations.CREATE_TASK:
                    console.log("********** = " + action);
                    console.log("Action Id : "+action.id);
                    return [...tasks, {
                        id: action.taskID,
                        name: "New Task"+action.taskID,
                        group: action.groupID,
                        onwer: action.onwer,
                        isComplete: false
                    }];
                case mutations.SET_TASK_COMPLETE:
                    console.log("********** = " + action);
                    console.log("Action Id : "+action.id);
                    return tasks.map(task => {
                        return (task.id === action.taskID) ? {...task, isComplete : action.isComplete} : task;
                    });
                case mutations.SET_TASK_GROUP:
                    console.log("set task name action");
                    return tasks.map(task => {
                        return (task.id === action.taskID) ? {...task, group : action.groupID} : task;
                    });
                case mutations.SET_TASK_NAME:
                    console.log("set task name action");
                    return tasks.map(task => {
                        return (task.id === action.taskID) ? {...task, name : action.name} : task;
                    });
            }
            return tasks;
        },
        comments(comments = defaultState.comments, action) {

            return comments;
        },
        groups(groups = defaultState.groups, action) {

            return groups;
        },
        users(users = defaultState.users, action) {

            return users;
        }
    }), applyMiddleware(createLogger(), sagaMiddleware)
);
//console.log(sagas.run);
//sagaMiddleware.run(sagas);
for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}