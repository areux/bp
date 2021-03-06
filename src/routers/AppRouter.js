import React, { Component } from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

console.log('Loading AppRouter...');
export const history = createBrowserHistory();

const AppRouter = () => {
    return (
        <Router history={history}>
                <div>
                    <Switch>
                        <PublicRoute exact path="/" component={LoginPage} />
                        <PrivateRoute path="/dashboard" component={DashboardPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </Router>
    );
}

export default AppRouter;