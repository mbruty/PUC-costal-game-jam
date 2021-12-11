// Helpful functions

function isValidPos(pos){
    // Returns true of the given position value is valid, false otherwise
    if (typeof pos === "number"){
        return true;
    }
    return false;
}

function calculatePosRelativeToPlayer(xPos, yPos, player){
    // Calculate coordinates to ones relative to the player
    let xPosRelative = xPos - player.x;
    let yPosRelative = yPos - player.y;
    return [xPosRelative, yPosRelative];
}