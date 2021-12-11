const WNGen = require("./WNGen");

console.log(MapGen(10,10))

function MapGen(x, y)
{
    var map = [];
    var Temp = WNGen(64,64);

    for(let i = 0; i < 64; i++)
    {
        map[i] = [];
        for(let j = 0; j < 64; j++)
        {
            rng = Math.random();
            if(rng * (i/16) < 0.5 )
            {
                map[i][j] = 0;
            }
            else
            {
                map[i][j] = 1;
            }
        }
    }

    return map;
}
