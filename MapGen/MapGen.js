const WNGen = require("./WNGen");

//console.log(MapGen(1,1))

function MapGen(x, y)
{
    const ChunkSize = 16;
    var map = [];
    var Temp = WNGen(ChunkSize,ChunkSize);

    for(let i = 0; i < ChunkSize; i++)
    {
        map[i] = [];
        for(let j = 0; j < ChunkSize; j++)
        {
            rng = Math.random();
            if(rng * (i/ChunkSize) < 0.5 )
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
