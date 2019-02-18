import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clickTile } from "../../Data/Actions/Tiles-actions";


class TileItem extends Component{
    constructor(props){
        super(props);

        this.state = {
            doTransform: false,
            position: null,
        };
    }




    onClickTileLink = () => {
        this.setState({
            position: {
                top: this.props.TileItem.style.top,
                height: this.props.TileItem.style.height,
                width: this.props.TileItem.style.width,
                left: this.props.TileItem.style.left,
                right: this.props.TileItem.style.right,
            },
            doTransform: true,
        });
        this.props.onClickLink();
    };

    get elementIndex(){
        return  this.props.TileItem.index ? this.props.TileItem.index : this.props.location.state.index;
    }

    render(){
        return(
            <Link
                to={'/'}
                className="transition-item single-tile"
                onClick={this.onClickTileLink}
                style={{
                backgroundColor: this.props.Tiles[this.elementIndex].backgroundColor,
                transform: this.state.doTransform ?
                    `translate3d(0, ${this.state.position.top}px, 0)` :
                    undefined,
                height: this.state.doTransform ?
                    this.state.position.height : null,
                width: this.state.doTransform ?
                    this.state.position.width : null,
                left: this.state.doTransform ?
                    this.state.position.left : null,
                right: this.state.doTransform ?
                    this.state.position.left : null,
            }}/>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    onClickLink: (data) => dispatch(clickTile(data))
});

function mapStateToProps(state) {
    return {
        Tiles: state.TileList,
        TileItem: state.TileItem
    };
}


export default  connect( mapStateToProps, mapDispatchToProps, null, { withRef: true } )(TileItem);
