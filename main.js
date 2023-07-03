

function setup() {
    video = createCapture(VIDEO);
    video.size(560, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose');
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
 function draw(){
    background('#ffb3ff');
    fill('#ff80b3');
    document.getElementById("text_size").innerHTML = "Font size of the will be = " + difference + "px";

 }
 function gotPoses(results)
    {
        if(results.length > 0)
        {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("noseX = " + noseX +" noseY = " + noseY);

            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = floor(leftWristX - rightWristX);

            console.log("leftWristX = " + leftWristX + "rightWrist = " + rightWristX + "difference = " + difference);

        }
    }
function draw(){
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}

