classifier = ml5.imageClassifier("MobileNet", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}
function check(){
    img = document.getElementById("mobile");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        document.getElementById("IdentifiedResult5").innerHTML = "MobileNet - " + results[0].label + ", Google Lens - Water bottle";
    }
}