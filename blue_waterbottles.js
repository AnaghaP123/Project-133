status = "";
objects = [];

function preload()
{
    img = loadImage("blue_waterbottles.png");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function draw()
{
    image(img, 0, 0, 580, 400);

    if(status != "")
    {
        for(i=0;i<objects.length;i++)
        {
            document.getElementById("status").innerHTML = "Status: Objects are being detected"
            fill("#0000FF");
            percentage = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percentage + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#0000FF");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);            document.getElementById("objects detected out of total").innerHTML = "One out of one objects were detected."
        }
    }
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}