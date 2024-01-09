console.log("Script File");

let [milisecond, second, munites, hours] = [0,0,0,0];
let displayTime = document.querySelector(".displayTime");
let int = null;
let lastTimer = document.querySelector(".lastTimer");

// displayTime.innerHTML = "12: 10: 12: 130"; 


document.querySelector(".start").addEventListener("click",()=>{
    if(int !== null){
        clearInterval(int);
        }

        int = setInterval(displayTimer, 10);

});

document.querySelector(".pause").addEventListener("click", ()=>{
    clearInterval(int);
});

document.querySelector(".reset").addEventListener("click", ()=>{
    clearInterval(int);
    [milisecond, second, munites, hours] = [0,0,0,0,];
    displayTime.innerHTML = "00:00:00:000";
});

function displayTimer(){
    milisecond+= 10;
    if(milisecond == 1000){
        milisecond = 0;
        second++;
    

    if(second == 60){
        second = 0;
        munites++;
   

    if(munites == 60){
        munites = 0;
        hours++;
    }
}

}

let h = hours < 10? "0" + hours: hours;
let m = munites < 10? "0" + munites:munites;
let s = second < 10? "0" + second:second;

let ms = milisecond < 10 
?"00" + milisecond
: milisecond < 100
?"0" + milisecond
:milisecond;

displayTime.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
// lastTimer.innerHTML = "12: 00: 10: 102";

document.querySelector(".reset").addEventListener("click", ()=>{
    lastTimer.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

})





}