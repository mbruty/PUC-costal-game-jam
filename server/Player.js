const Direction = require('./Direction');

class Player{
    // Location of player tile
    xPos;
    yPos;
    username;
    id;

    Messages = {
        NO_CHANGE: "New position is same as old"
    }

    constructor(id, username, startXPos=0, startYPos=0){
        this.id = id;
        this.username = username;
        this.xPos = startXPos;
        this.yPos = startYPos;
    }

    getId(){
        return this.id;
    }

    getUsername(){
        return this.getUsername;
    }

    setUsername(newUsername){
        this.username = newUsername;
    }
    
    getXPos(){
        return this.xPos;
    }

    setXPos(newXPos){
        this.xPos = newXPos;
    }

    getYPos(){
        return this.yPos;
    }

    setYPos(newYPos){
        this.yPos = newYPos;
    }

    updatePosIfLegal(xPos, yPos){
        // Change the player's position if the new position is legal
        // If legal, return true
        // Else return a message
        
        if (xPos === this.xPos && yPos === this.yPos) return this.Messages.NO_CHANGE;
        else{
            this.xPos = xPos;
            this.yPos = yPos;
            return true;
        }
    }
}

module.exports = Player;