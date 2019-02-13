import { TASK_LIST, } from './../Constants/Constants';
import update from 'react-addons-update';
import { CreateTileArray } from "../../Utilits/utiltis";


const initialState = {
    TileList: {
        list: CreateTileArray()
    }
};

export default function Tiles(state = initialState, action) {
    switch (action.type) {
        case TASK_LIST:
            return state;

        default:
            return state;
    }
}
