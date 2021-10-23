video ="";
status="";
function preload()
{
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}

function start() {
    objectDectector = ml5.objectDectector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Dectecing Objects";
}

function modelLoaded(){
    console.log("Model Loaded!!!");
    status = true;
    video = loop();
    video.speed(1);
    video.volume(0);
}

function draw() {
    (image, video, 0, 0, 480, 380)
}