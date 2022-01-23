function preload(){

}

function setup(){
    canvas=createCanvas(480,300);
    canvas.center();
     video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

   poseNet=ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);


}

function draw(){
image(video, 0,0,480,300);
}

 function take_snapshot(){
     save('realtime.png');
 }


 function modelLoaded(){
     console.log("poseNet is Initialized");
 }

 function gotPoses(results){
    console.log("poseNet is executed");
    if(results.length > 0){
        console.log(results);
        console.log("nose x=" + results[0].pose.nose.x);
        console.log("nose y="+ results[0].pose.nose.y);
    }
    

}



 
