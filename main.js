Status ="";
var data = "";
function preload(){}
function setup(){
 Canvas = createCanvas(600,600);
 video = createCapture(600,600);
 video.hide();
 Canvas.center();
 Canvas.background("white");     
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML=" Status : Detecting Object ";
    data = document.getElementById("input").value;
}
function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    
}
function draw(){
    image(video,0,0,600,600);
}