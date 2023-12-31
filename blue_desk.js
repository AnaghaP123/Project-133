status = "";
objects = [];

function preload()
{
    img = loadImage("blue_desk.webp");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function draw()
{
    image(img, 0, 0, 300, 300);

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
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            document.getElementById("objects detected out of total").innerHTML = "Two out of two objects were detected."
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