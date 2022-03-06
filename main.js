Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png', png_quality: 90
});
c1 = document.getElementById("camera");
Webcam.attach(c1);

function takephoto() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="myimg" src="' + data_uri + '"/>';
    }
    );
}

console.log("ml5 version:", ml5.version)
myModel = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/IlaE8BKkv/model.json", modelLoaded)
function modelLoaded() {
    console.log("Model Loaded");
}

function speak() {
    var s = window.speechSynthesis;
    speak_data_1 = "my first prediction is " + prediction_1;
    speak_data_2 = "my second prediction is " + prediction_2;
    u = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    s.speak(u)
}
i
function predict()
{
i1=document.getElementById("myimg");
myModel.classify(i1,gotResult);
}

function gotResult(error,results)
{
if (error)
{
console.log(error);
}
else{
console.log(results);
document.getElementById("result_gesture_name").innerHTML=results[0].label;
document.getElementById("result_gesture_name2").innerHTML=results[1].label;
prediction_1=results[0].label;
prediction_2=results[1].label;
speak();
    if(results[0].label == "Best"){
    document.getElementById("update_emoji").innerHTML=" &#128077;";
    }
    if(results[0].label == "Victory"){
    document.getElementById("update_emoji").innerHTML="&#9996;";
       }
    if(results[0].label == "Dislike"){
     document.getElementById("update_emoji").innerHTML="&#128078;";
  }
    if(results[0].label == "Five"){
    document.getElementById("update_emoji").innerHTML="&#128400;";
   }
    if(results[1].label == "Best"){
    document.getElementById("update_emoji2").innerHTML=" &#128077;";
 }
 if(results[1].label == "Victory")
 {
 document.getElementById("update_emoji2").innerHTML="&#9996;";
 }
 if(results[1].label == "Five")
 {
 document.getElementById("update_emoji2").innerHTML="&#128400;";
 }
 if(results[1].label == "Dislike")
 {
 document.getElementById("update_emoji2").innerHTML="&#128078;";
 }
}
}
