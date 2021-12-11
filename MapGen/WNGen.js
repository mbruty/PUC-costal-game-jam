console.log(WNGen(10,10));

function WNGen(x, y)
{
    var map = [];

    for(let i = 0; i < x; i++)
    {
        map[i] = [];
        for(let j = 0; j < y; j++)
        {
            map[i][j] = Math.random();
        }
    }
    return map;
}

