const MapGen = require('./../MapGen/MapGen');
const Tile = require('./Tile');
class Map{
    /*
        Map represented as a 2D list of Tiles
        Each row is a sublist
    */
    mapList = [];

    generate(){
        // Generate type types
        let mapGen = MapGen();
        // Create Tile objects
        for (let row of mapGen){
            let mapRow = [];
            for (let col of row){
                mapRow.push(new Tile(col));
            }
            this.mapList.push(mapRow);
        }
    }
}

module.exports = Map;