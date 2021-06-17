import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from 'Components/Header';
import Home from 'Routes/Home';
import Movie from 'Routes/Movie';
import TV from 'Routes/TV';


export default () => (
    <>
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/movie" component={Movie} />
                <Route path="/tv" component={TV} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    </>
)