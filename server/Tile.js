class Tile{
    type;
    placedItem;

    constructor(type){
        this.type = type;
    }

    getType(){
        return this.type;
    }

    setType(newType){
        this.type = newType;
    }

    getPlacedItem(){
        return this.placedItem;
    }

    setPlacedItem(newPlacedItem){
        this.placedItem = newPlacedItem;
    }
}

module.exports = Tile;