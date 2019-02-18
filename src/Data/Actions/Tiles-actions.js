import { CLICKED_TILES_ITEM, CLICK_ON_MAIN_PAGE } from "../Constants/Constants";


export function clickTiles(data) {
    return{
        type: CLICKED_TILES_ITEM,
        data
    }
}


export function clickTile(data) {
    return{
        type: CLICK_ON_MAIN_PAGE,
        data
    }
}

