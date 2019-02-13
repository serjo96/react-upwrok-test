import React, {Component} from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import {Link} from "react-router-dom";

class TilesList extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <Masonry
                className={'my-gallery-class'}
            >
                {this.props.Tiles.map((el,i)=>
                    <Link
                        to={{
                            pathname: `open/${i}`,
                            state: { index: i }
                        }}

                        key={i}
                        className="tile-item"
                        style={el}
                    />
                )}
            </Masonry>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({

});

function mapStateToProps(state) {
    return {
        Tiles: state.TileList.list,
    };
}


export default  connect( mapStateToProps, mapDispatchToProps )(TilesList);
