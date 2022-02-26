
song = "";
lwx = "";
lwy = "";
rwx = "";
rwy = "";


function preload(){
song = loadSound("music.mp3")
}

function setup(){
canvas = createCanvas(600,500);
canvas.position(420, 200);
video = createCapture(VIDEO);
video.hide();
posenet = ml5.poseNet(video, modelLoaded)
posenet.on('pose', gotPoses)
}

function modelLoaded(){
console.log('Posenet is loaded!')   
}
function draw(){
image(video, 0, 0, 600, 500);
}

function Music_button(){
song.play();
song.setVolume(1.0)
song.rate(1.0)
}

function gotPoses(results){

    if(results.length > 0){
    console.log(results);
    lwx = results[0].pose.leftWristX;
    lwy = results[0].pose.leftWristY;
    console.log("Left Wrist X = " + lwx + " and Left Wrist Y = " + lwy);
    rwx = results[0].pose.rightWristX;
    rwy = results[0].pose.rightWristX;
    console.log("Right Wrist X = " + rwx + " and Right Wrist Y = " + rwy);

    }
}