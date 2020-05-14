import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Task component
import Task from './components/Task';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EditTask from './components/EditTask';

// render Task component instead of Example
if (document.getElementById('task')) {
    ReactDOM.render(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/:id/edit" component={EditTask} exact={true} />
                    <Task />
                </Switch>
            </div>
        </BrowserRouter>,
        document.getElementById('task')
    );
}