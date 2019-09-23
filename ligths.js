
var pressToGreen=document.getElementById("pressToGreen");
var stop=document.getElementById("stop");
var walk=document.getElementById("walk");
var redOn="#ff0000",redOff="#6e0000",
yellowOn="#ffff00",yellowOff="#b3b300",
greenOn="#0dff00", greenOff="#408000";
var x=1,tb=""



pressToGreen.onclick=function click(){
    if(x===1){
        key()
        tb=(Date.now()+21000)
        x=0
        setTimeout(()=>{x=1},21000)
    }else{
        ta=((tb-Date.now())/1000)
      document.getElementById("timer").innerHTML=ta
        console.log("wait")

    } 
}



function key() {

    console.log("1")
   
setTimeout(() => {
    document.getElementById("green").style.backgroundColor=greenOff
    document.getElementById("yellow").style.backgroundColor=yellowOn}, 5000)

setTimeout(()=>{
    document.getElementById("stop").style.backgroundImage="none";
    document.getElementById("walk").style.backgroundImage="url(walk.jpg)"
    document.getElementById("yellow").style.backgroundColor=yellowOff
    document.getElementById("red").style.backgroundColor=redOn},8000)

setTimeout(()=>{
    document.getElementById("yellow").style.backgroundColor=yellowOn
    document.getElementById("red").style.backgroundColor=redOff
    document.getElementById("walk").style.backgroundImage="none";
    document.getElementById("stop").style.backgroundImage="url(stop.jpg)"},15000)

setTimeout(()=>{
    document.getElementById("green").style.backgroundColor=greenOn
    document.getElementById("yellow").style.backgroundColor=yellowOff},17000)

    
}

