document.getElementById("one").addEventListener('click', function(){
    document.getElementById("one").style.backgroundColor = "blue"
})

document.getElementById("two").addEventListener('mouseover', function(){
    document.getElementById("two").style.visibility = "hidden"
})
document.getElementById("two").addEventListener('mouseout', function(){
    document.getElementById("two").style.visibility = "visible"
})

document.getElementById("btn").addEventListener('click', function(){
    // document.getElementsByClassName("box").style += "border-radius: 50px;"
    var boxes = document.getElementsByClassName("box")
    for(var i = 0; i < boxes.length;i++){
        boxes[i].style.borderRadius = "50px";
    }
})

document.addEventListener('keydown', function(valueOfkey){
    if(valueOfkey.key == "s"){
        document.getElementById("four").innerHTML = "<p> I'm such a square</p>"
    }
})

document.getElementById("five").addEventListener('mousedown', function(){
    document.getElementById("five").innerHTML = "<img src = 'https://media.mnn.com/assets/images/2016/08/sclaters-lemur-closeup.jpg.653x0_q80_crop-smart.jpg'>"
})
document.getElementById("five").addEventListener('mouseup', function(){
    document.getElementById("five").innerHTML = ""
})
// console.log(document.getElementByType(text).value)

document.getElementById("my-text-box").addEventListener('change', function(){
    document.getElementById("six").innerHTML = "<p>" + document.getElementById("my-text-box").value + "</p"
    console.log(document.getElementById("my-text-box").value)
})
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

document.getElementById("seven").innerHTML = "<p>" + time + "</p>"

var elem = document.getElementById("ocho");   
var id = setInterval(frame, 1000);
function frame() {
    if(elem.style.visibility=="visible"){
	elem.style.visibility = "hidden"
    }
    else{
        elem.style.visibility = "visible"
    }
}

document.getElementById("nine").addEventListener('click', function(){
    document.getElementById("nine").style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
})