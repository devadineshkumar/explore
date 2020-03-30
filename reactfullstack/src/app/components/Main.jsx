import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { history } from '../store/history';
import { ConnectedDashboard } from './Dashboard';
import { ConnectedTaskDetail } from './TaskDetail';
import { ConnectedNavigation} from './Navigation';
import { Router, Route } from 'react-router-dom';

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <div>
                <ConnectedNavigation/>
                <div>test</div>
                <Route exact path='/dashboard' render={() => (<ConnectedDashboard />)} />
                <Route exact path='/task/:id' render={({match}) => (<ConnectedTaskDetail match={match} />)} />
            </div>
        </Provider>
    </Router>
)
