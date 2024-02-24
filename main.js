let blueCount=0;
let blueScore=0;
let redScore=0;
let blue=document.getElementsByClassName('box')[0];
let redCount=0;
let red=document.getElementsByClassName('box')[1];
let blueHeight = 50;
let redHeight = 50;

const boxBlueClicked = () =>{
    blue.style = `height: ${blueHeight++}%`;
    red.style = `height: ${redHeight--}%`;
    blueCount++;
    document.getElementById('blueScore').innerHTML = `${blueCount}`;
    if(blueHeight==80){
        document.getElementById('result').style ="display: grid";
        blueScore++;
        document.getElementsByTagName('h2')[0].innerHTML = 'Blue Wins';
        document.getElementsByClassName('blue')[0].innerHTML = `${blueScore}`;
    }
}

const boxRedClicked = () =>{
    red.style = `height: ${redHeight++}%`;
    blue.style = `height: ${blueHeight--}%`;
    redCount++;
    document.getElementById('redScore').innerHTML = `${redCount}`;
    if(redHeight==80){
        document.getElementById('result').style ="display: grid";
        redScore++;
        document.getElementsByTagName('h2')[0].innerHTML = 'Red Wins';
        document.getElementsByClassName('red')[0].innerHTML = `${redScore}`;
    }
}

const playAgain=()=>{
    blueHeight=50;
    redHeight=50;
    blueCount=0;
    document.getElementById('blueScore').innerHTML = `${blueCount}`;
    redCount=0;
    document.getElementById('redScore').innerHTML = `${redCount}`;
    blue.style = `height: ${blueHeight}%`;
    red.style = `height: ${redHeight}%`;
    document.getElementById('result').style ="display: none";

}