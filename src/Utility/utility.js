export function CreateTileArray() {
    let arr = new Array(30);
    for(let i = 0; i < arr.length; i++){
        arr[i] = {
            backgroundColor: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6),
            height: Math.floor(Math.random() * (300 - 100 + 1)) + 100,
        };
    }
    return arr;
}
