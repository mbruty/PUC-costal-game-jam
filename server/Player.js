const Direction = require('./Direction');

class Player{
    // Location of player tile
    xPos;
    yPos;
    username;

    constructor(username, startXPos=0, startYPos=0){
        this.username = username;
        this.xPos = startXPos;
        this.yPos = startYPos;
    }

    move(direction){
        // Move the player 1 tile in the given direction
        let newXPos;
        let newYPos;
        switch(direction){
            case Direction.NORTH:
                newYPos = this.yPos + 1;
                return this._updatePosIfLegal(this.xPos, newYPos);
            case Direction.EAST:
                newXPos = this.xPos + 1;
                return this._updatePosIfLegal(newXPos, this.yPos);
            case Direction.SOUTH:
                newYPos = this.yPos - 1;
                return this._updatePosIfLegal(this.xPos, newYPos);
            case Direction.WEST:
                newXPos = this.xPos - 1;
                return this._updatePosIfLegal(newXPos, this.yPos);
        }
    }

    _updatePosIfLegal(xPos, yPos){
        // Change the player's position if the new position is legal
        // If legal, return true
        // Else return a message
        
        // TODO: implement this later

        this.xPos = xPos;
        this.yPos = yPos;
        return true;
    }
}

module.exports = Player;