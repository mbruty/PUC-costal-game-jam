class OtherPlayer extends Player{
    id;
    constructor(id, image, x, y){
        super(image, x, y);
        this.id = id;
    }

    update(newX, newY){
        this.x = newX;
        this.y = newY;
    }

    draw(){
        let relativePositions = calculatePosRelativeToPlayer(this.x, this.y, state.player);
        image(this.image, (8 + relativePositions[0]) * 64, (5 + relativePositions[1]) * 64, 64, 64);
    }
}