const flip1 = document.getElementById('flip1');
const flip2 = document.getElementById('flip2');
const flip3 = document.getElementById('flip3');
const flip4 = document.getElementById('flip4');
const flip5 = document.getElementById('flip5');
const flip6 = document.getElementById('flip6');
const flip7 = document.getElementById('flip7');
const flip8 = document.getElementById('flip8');
const flip9 = document.getElementById('flip9');

let cat = 0;
let pelican = 0;
let turtle = 0;

let currentImg;

let winner = document.querySelector('.winner');

const back1 = document.getElementById('back1');
const back2 = document.getElementById('back2');
const back3 = document.getElementById('back3');
const back4 = document.getElementById('back4');
const back5 = document.getElementById('back5');
const back6 = document.getElementById('back6');
const back7 = document.getElementById('back7');
const back8 = document.getElementById('back8');
const back9 = document.getElementById('back9');


let min = 1;
let max = 3;

let chance = 0;

function fliplogic() {

  let random = Math.floor(Math.random() * (max - min + 1)) + min;

  if (cat < 3) {
    if (random == 1) {
      console.log("hi");
         document.getElementById(currentImg).src = "logos/cat.png";
         cat = cat + 1;
         chance = chance + 1;
    }
  }
  else if(cat >= 3 && random == 1){
    if(pelican < 3)
    {
      document.getElementById(currentImg).src = "logos/pelican.png";
      pelican = pelican + 1;
      chance = chance + 1;
    }
    else if(turtle < 3){
      document.getElementById(currentImg).src = "logos/turtle.png";
      turtle = turtle + 1;
      chance = chance + 1;
    }
  }

  if (pelican < 3) {
    if (random == 2) {
      document.getElementById(currentImg).src = "logos/pelican.png";
      pelican = pelican + 1;
      chance = chance + 1;
    }
  }
  else if(pelican >= 3 && random == 2){
    if(turtle < 3)
    {
      document.getElementById(currentImg).src = "logos/turtle.png";
      turtle = turtle + 1;
      chance = chance + 1;
    }
    else if(cat < 3){
      document.getElementById(currentImg).src = "logos/cat.png";
      cat = cat + 1;
      chance = chance + 1;
    }
  }

   if (turtle < 3) {
    if (random == 3) {
      document.getElementById(currentImg).src = "logos/turtle.png";
      turtle = turtle + 1;
      chance = chance + 1;
    }
  }
  else if(turtle >= 3 && random == 3){
    if(cat < 3)
    {
      document.getElementById(currentImg).src = "logos/cat.png";
      cat = cat + 1;
      chance = chance + 1;
    }
   else if(pelican < 3){
      document.getElementById(currentImg).src = "logos/pelican.png";
      pelican = pelican + 1;
      chance = chance + 1;
    }
  }
}

function chanceLeft()
{
  console.log(chance);
  if(chance >= 5)
  {        
      const mainBox = document.querySelector('.main-box');
      mainBox.style.pointerEvents = "none";
      setTimeout(()=>{
        document.querySelector('.states').style.display = "block";
      document.querySelector('#win-lose').innerHTML = "Game Over"; 
      document.querySelector('.setwin').style.display = "none";
        
      },500)
      
  }    
  const chanceText = document.querySelector('.chanceText');
  chanceText.innerHTML = `Flip Remainig : ${5-chance}`;

}
const flipcard1 = () => {
  document.getElementById('front1').style.display = "none";
  back1.style.display = "block";
  currentImg = "back1img";
  fliplogic();
  win();
  
}
flip1.addEventListener('click', flipcard1);

const flipcard2 = () => {
  document.getElementById('front2').style.display = "none";
  back2.style.display = "block";
  currentImg = "back2img";
  fliplogic();
  win();
}

flip2.addEventListener('click', flipcard2);
const flipcard3 = () => {
  document.getElementById('front3').style.display = "none";
  back3.style.display = "block";
  currentImg = "back3img";
  fliplogic();
  win();  
}

flip3.addEventListener('click', flipcard3);
const flipcard4 = () => {
  document.getElementById('front4').style.display = "none";
  back4.style.display = "block";
  currentImg = "back4img";
  fliplogic();
  win();
  
}
flip4.addEventListener('click', flipcard4);
const flipcard5 = () => {
  document.getElementById('front5').style.display = "none";
  back5.style.display = "block";
  currentImg = "back5img";
  fliplogic();
  win();
  
}
flip5.addEventListener('click', flipcard5);
const flipcard6 = () => {
  document.getElementById('front6').style.display = "none";
  back6.style.display = "block";
  currentImg = "back6img";
  fliplogic();
  win();
 
}
flip6.addEventListener('click', flipcard6);
const flipcard7 = () => {
  document.getElementById('front7').style.display = "none";
  back7.style.display = "block";
  currentImg = "back7img";
  fliplogic();
  win();
  
}
flip7.addEventListener('click', flipcard7);
const flipcard8 = () => {
  document.getElementById('front8').style.display = "none";
  back8.style.display = "block";
  currentImg = "back8img";
  fliplogic();
  win();
 
}
flip8.addEventListener('click', flipcard8);
const flipcard9 = () => {
  document.getElementById('front9').style.display = "none";
  back9.style.display = "block";
  currentImg = "back9img";
  fliplogic();
  win();
  

}
flip9.addEventListener('click', flipcard9);

function win() {
   chanceLeft();
   if(cat == 3)
   {
    const mainBox = document.querySelector('.main-box');
    mainBox.style.pointerEvents = "none";
    setTimeout(()=>{
      document.querySelector('.states').style.display = "block";
      document.querySelector('#win-lose').style.marginTop = "110px";
      document.querySelector('#win-lose').innerHTML = "You Win";
     
      document.querySelector('.setwin').style.display = "block";
        document.querySelector('.setlose').style.display = "none";
    },500)
   
    }
    if(pelican == 3)
    {
      const mainBox = document.querySelector('.main-box');
      mainBox.style.pointerEvents = "none";
      setTimeout(()=>{
        document.querySelector('.states').style.display = "block";
        document.querySelector('#win-lose').style.marginTop = "110px";
        document.querySelector('#win-lose').innerHTML = "You Win";
        document.querySelector('.setwin').style.display = "block";
        document.querySelector('.setlose').style.display = "none";
      },500)
    }
    if(turtle == 3)
    {
      const mainBox = document.querySelector('.main-box');
      mainBox.style.pointerEvents = "none";
      setTimeout(()=>{
        document.querySelector('.states').style.display = "block";
        document.querySelector('#win-lose').style.marginTop = "110px";
        document.querySelector('#win-lose').innerHTML = "You Win";
        document.querySelector('.setwin').style.display = "block";
        document.querySelector('.setlose').style.display = "none";  
      },500)
    }
  }