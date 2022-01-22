nose_x = 0
nose_y = 0
function preload() {
mustache = loadImage('https://i.postimg.cc/JzHb00LH/m.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes)
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
nose_x = results[0].pose.nose.x
nose_y = results[0].pose.nose.y
    }
}

function modelLoaded() {
    console.log('POSENET LOADED');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache,nose_x,nose_y,40,20)
}

function take_snapshot() {
    save('Myfilterimg.png')
}
