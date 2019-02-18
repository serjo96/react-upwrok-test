import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import TilesList from "./../Templates/Tiles-list/Tiles-list";
import TileItem from "../Templates/Tiles-item/TileItem";
import posed, { PoseGroup } from 'react-pose';


const RouteContainer = posed.div({
    enter: { opacity: 1, delay: 300, beforeChildren: true },
    exit: { opacity: 0 }
});

class Routes extends Component {
    render() {
        return (
            <Route
                render={({ location }) => (
                    <PoseGroup>
                        <RouteContainer key={location.key}>
                            <Switch>
                                <Route exact path="/" component={TilesList} />
                                <Route exact path="/open/:id" component={TileItem} />
                            </Switch>
                        </RouteContainer>
                    </PoseGroup>
                )}
            />
        )
    }
}

export default Routes;
