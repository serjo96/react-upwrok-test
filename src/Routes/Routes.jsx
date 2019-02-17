import React, {Component} from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import TilesList from "./../Templates/Tiles-list/Tiles-list";
import TileItem from "../Templates/Tiles-item/TileItem";
import Home from "../Templates/Home/Home";


class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}>
                    <IndexRoute component={TilesList} />
                    <Route path="/open/:id" component={TileItem} />
                </Route>
            </Router>
        );
    }
}

export default Routes;
