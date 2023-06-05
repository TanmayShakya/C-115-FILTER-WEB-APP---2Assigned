noseX = '';
noseY = '';

function preaload(){

}

function setup(){
 canvas = createCanvas(300,300);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(300,300);
 video.hide();
 poseNet = ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',getPoses);
}

function draw(){
image(video,0,0,300,300);
}

function modelLoaded(){
    console.log("Posenet Model is Initialized");
}

function getPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log( "NoseX = " + noseX);
        console.log( "NoseY = " + noseY);
         
        noseX = results[0].pose.nose.x;
        noseY =  results[0].pose.nose.y;
    }
}