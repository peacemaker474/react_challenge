import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from 'Routes/Home';
import Movie from 'Routes/Movie';
import TV from 'Routes/TV';


export default () => (
    <>
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/movie" component={Movie} />
                <Route path="/tv" component={TV} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    </>
)