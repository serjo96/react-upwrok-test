import { CLICKED_TILES_ITEM, CLICK_ON_MAIN_PAGE } from './../Constants/Constants';
import update from 'react-addons-update';
import { CreateTileArray } from "./../../Utility/utility";


const initialState = {
    TileList: CreateTileArray(),
    TileItem:{
        style: {},
        index: 0,
        toMainPage: false
    }
};

export default function Tiles(state = initialState, action) {
    switch (action.type) {
        case CLICKED_TILES_ITEM:
            return  update(state, {
                    TileItem: {$merge: {
                            style: action.data.target,
                            index: action.data.index
                    }}
            });
        case CLICK_ON_MAIN_PAGE:
            return  update(state, {
                TileItem: {$merge: {
                        ...state.TileItem,
                        toMainPage: true
                    }}
            });
            
        default:
            return state;
    }
}
