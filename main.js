songamazingenglish = ""
songamazingpunjabi = ""


function setup() {
    canvas = createCanvas(700, 700);
    canvas.center()
    video = createCapture(VIDEO);
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on('pose', gotPoses)
    video.hide()
}

function preload() {
    songamazingpunjabi = loadSound("Tunak Tunak Tun - Daler Mehndi.mp3");
    songamazingenglish = LoadSound("Rick_Astley_-_Never_Gonna_Give_You_Up_Qoret.com.mp3")
}

function draw() {
    image(video, 0, 0, 700, 700)
}