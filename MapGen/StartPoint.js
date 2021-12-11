console.log(StartPoint(16,16, 3))

function StartPoint(xMAX, yMAX, noStartPoints)
{
    StartPoints = [];
    for(i=0; i<noStartPoints; i++ )
    {
        x = Math.floor(Math.random() * xMAX);
        y = Math.floor(Math.random() * yMAX);
        StartPoints[i] = [x,y]
    }
    return StartPoints
}


