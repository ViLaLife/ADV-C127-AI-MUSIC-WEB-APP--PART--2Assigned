song_dna="";
song_boywithluv="";

function preload(){

}

function setup(){
    canvas=createCanvas(400,700);
    canvas.center();
     video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,400,300);
    
}