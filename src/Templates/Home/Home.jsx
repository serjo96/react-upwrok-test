import React, {Component} from 'react';
import PageTransition from 'react-router-page-transition';
import {connect} from "react-redux";


class Home extends Component {
    render() {
        return (
            <div>
                <PageTransition
                    timeout={1000}
                    data={this.props.TileStyle}
                >
                    {this.props.children}
                </PageTransition>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        TileStyle: state.TileItem.style
    };
}

export default  connect( mapStateToProps, null, null, { withRef: true } )(Home);
