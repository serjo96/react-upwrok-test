import React, {Component} from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom';
import { clickTiles } from "../../Data/Actions/Tiles-actions";

class TilesList extends Component{
    constructor(props){
        super(props);
        this.substrate = null;
        this.tiles = null;
    }



    getElementRef = (node) => {
        this.substrate = node;
    };


    getListItems = (node) => {
        this.tiles = node;
    };


    onClickTile = (el, index) => {
        this.props.onClickTile({
            target: el.target.getBoundingClientRect(), index: index
        });

        this.substrate.className = 'tile-item-substrate tile-item-substrate--active';
        this.tiles.className = 'tiles-list-page tiles-list-page--active';
    };


    render(){
        return(
            <div
                className='tiles-list-page'
                ref={this.getListItems}
            >
                <Masonry
                    className='tiles-list'
                >
                    {this.props.Tiles.map((el,i)=>
                        <Link
                            to={{
                                pathname: `open/${i}`,
                                state: { index: i }
                            }}
                            onClick={e=> this.onClickTile(e, i)}
                            key={i}
                            className="tile-item"
                            style={el}
                        />
                    )}
                </Masonry>
                <div ref={this.getElementRef} className="tile-item-substrate"/>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    onClickTile: (data) => dispatch(clickTiles(data)),
});

function mapStateToProps(state) {
    return {
        Tiles: state.TileList,
        TileBuck: state.TileItem.toMainPage
    };
}


export default  connect( mapStateToProps, mapDispatchToProps )(TilesList);
