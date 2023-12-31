status = "";

function preload()
{
    img = loadImage("beige_pencilcase.png");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center;
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object(s)"
}

function modelLoaded()
{
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}