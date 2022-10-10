count = 0;
let audio2 = new Audio("audio/win.wav");
let audio3 = new Audio('audio/xoclick.wav');

let tie = 0;

let player1 = 0;
let player2 = 0;

let xPlayer;
let oPlayer;

let m11 = 'a';
let m12 = 'b';
let m13 = 'c';
let m21 = 'd';
let m22 = 'e';
let m23 = 'f';
let m31 = 'g';
let m32 = 'h';
let m33 = 'i';

let win = false;

const playGame = document.getElementById('playGame');

let games = localStorage.getItem('games');
if(games == null){
   gameObj = [];
}
else{
   gameObj = JSON.parse(games);
}
render();
gameObj.filter((ele)=>{
   console.log(ele.show);
   if(ele.show == true){
      document.querySelector('.players').style.display = "none";
      document.querySelector('.gameControl').style.display = "none";
   }
   
})
 gameObj.filter(element => {
    xPlayer = element.player1.name;
    oPlayer = element.player2.name;
 });

function playerPage(){
 //player
   xPlayer = document.getElementById('xPlayer').value;
   oPlayer = document.getElementById('oPlayer').value;
   if(gameObj.length == 0){
     gameObj.push({
        show:true,
        player1:{
         name:xPlayer,
         score : 0
        },
        player2:{
         name:oPlayer,
         score : 0
        }
     });
   }
   document.querySelector('.players').style.display = "none";
   document.querySelector('.players').style.display = "none";
   console.log(gameObj);
   saveGame();
   render();
}
function render(){
gameObj.filter((ele)=>{
   audio3.play();
   document.querySelector('.s-p-1').innerHTML = ele.player1.name;
   document.querySelector('.s-p-2').innerHTML = ele.player2.name;

   document.querySelector('.p-1-score').innerHTML = ele.player1.score;
   document.querySelector('.p-2-score').innerHTML = ele.player2.score;

})
}
playGame.addEventListener('click',playerPage);
let winner = document.querySelector('#winner');

function PutXY(myid, myclass) {
   audio3.play();
   if (count == 0 || count == 2 || count == 4 || count == 6 || count == 8) {
      if (myclass == 'k1-1') {
         tie+=1;
         document.querySelector('.k1-1').innerHTML = 'X';
         document.querySelector('.k1-1').style.pointerEvents = 'none';
      }
      else if (myclass == 'k1-2') {
         tie+=1;
         document.querySelector('.k1-2').innerHTML = 'X';
         document.querySelector('.k1-2').style.pointerEvents = 'none';
      }
      else if (myclass == 'k1-3') {
         tie+=1;
         document.querySelector('.k1-3').innerHTML = 'X';
         document.querySelector('.k1-3').style.pointerEvents = 'none';
      }
      else if (myclass == 'k2-1') {
         tie+=1;
         document.querySelector('.k2-1').innerHTML = 'X';
         document.querySelector('.k2-1').style.pointerEvents = 'none';
      }
      else if (myclass == 'k2-2') {
         tie+=1;
         document.querySelector('.k2-2').innerHTML = 'X';
         document.querySelector('.k2-2').style.pointerEvents = 'none';
      }
      else if (myclass == 'k2-3') {
         tie+=1;
         document.querySelector('.k2-3').innerHTML = 'X';
         document.querySelector('.k2-3').style.pointerEvents = 'none';
      }
      else if (myclass == 'k3-1') {
         tie+=1;
         document.querySelector('.k3-1').innerHTML = 'X';
         document.querySelector('.k3-1').style.pointerEvents = 'none';
      }
      else if (myclass == 'k3-2') {
         tie+=1;
         document.querySelector('.k3-2').innerHTML = 'X';
         document.querySelector('.k3-2').style.pointerEvents = 'none';
      }
      else if (myclass == 'k3-3') {
         tie+=1;
         document.querySelector('.k3-3').innerHTML = 'X';
         document.querySelector('.k3-3').style.pointerEvents = 'none';
      }
      count = count + 1;
      if (myid == 'm11') {
         m11 = 'X';
      }
      else if (myid == 'm12') {
         m12 = 'X';
      }
      else if (myid == 'm13') {
         m13 = 'X';
      }
      else if (myid == 'm21') {
         m21 = 'X';
      }
      else if (myid == 'm22') {
         m22 = 'X';
      }
      else if (myid == 'm23') {
         m23 = 'X';
      }
      else if (myid == 'm31') {
         m31 = 'X';
      }
      else if (myid == 'm32') {
         m32 = 'X';
      }
      else if (myid == 'm33') {
         m33 = 'X';
      }
      if (win != true) {
         checkForWin();
      }
   }
   else {
      if (myclass == 'k1-1') {
         tie+=1;
         document.querySelector('.k1-1').innerHTML = 'O';
         document.querySelector('.k1-1').style.pointerEvents = 'none';
      }
      else if (myclass == 'k1-2') {
         tie+=1;
         document.querySelector('.k1-2').innerHTML = 'O';
         document.querySelector('.k1-2').style.pointerEvents = 'none';
      }
      else if (myclass == 'k1-3') {
         tie+=1;
         document.querySelector('.k1-3').innerHTML = 'O';
         document.querySelector('.k1-3').style.pointerEvents = 'none';
      }
      else if (myclass == 'k2-1') {
         tie+=1;
         document.querySelector('.k2-1').innerHTML = 'O';
         document.querySelector('.k2-1').style.pointerEvents = 'none';
      }
      else if (myclass == 'k2-2') {
         tie+=1;
         document.querySelector('.k2-2').innerHTML = 'O';
         document.querySelector('.k2-2').style.pointerEvents = 'none';
      }
      else if (myclass == 'k2-3') {
         tie+=1;
         document.querySelector('.k2-3').innerHTML = 'O';
         document.querySelector('.k2-3').style.pointerEvents = 'none';
      }
      else if (myclass == 'k3-1') {
         tie+=1;
         document.querySelector('.k3-1').innerHTML = 'O';
         document.querySelector('.k3-1').style.pointerEvents = 'none';
      }
      else if (myclass == 'k3-2') {
         tie+=1;
         document.querySelector('.k3-2').innerHTML = 'O';
         document.querySelector('.k3-2').style.pointerEvents = 'none';
      }
      else if (myclass == 'k3-3') {
         tie+=1;
         document.querySelector('.k3-3').innerHTML = 'O';
         document.querySelector('.k3-3').style.pointerEvents = 'none';
      }
      count = count + 1;
      if (myid == 'm11') {
         m11 = 'O';
      }
      else if (myid == 'm12') {
         m12 = 'O';
      }
      else if (myid == 'm13') {
         m13 = 'O';
      }
      else if (myid == 'm21') {
         m21 = 'O';
      }
      else if (myid == 'm22') {
         m22 = 'O';
      }
      else if (myid == 'm23') {
         m23 = 'O';
      }
      else if (myid == 'm31') {
         m31 = 'O';
      }
      else if (myid == 'm32') {
         m32 = 'O';
      }
      else if (myid == 'm33') {
         m33 = 'O';
      }
      if (win != true) {
         checkForWin();
      }
   }
}

function updateScore(){
   gameObj.filter((ele)=>{
      if(player1 == 1){
         ele.player1.score += 1;
      }
      if(player2 == 1){
         ele.player2.score += 1;
      }
   })
   saveGame();
}

function checkForWin() {
  
   if (m11 == m21 && m21 == m31 && m31 == m11) {
      audio2.play();
      win = true;
      document.getElementById('l1').style.display = "block";
   setTimeout(()=>{
      document.querySelector('.winnerList').style.display = "block";
      document.querySelector('.winnerList').style.display = "flex";
   },500);
      if (m11 == 'X' && m21 == 'X' && m31 == 'X') {
         winner.innerHTML = `🐱‍👤 ${xPlayer} Win 🐱‍👤`;
         player1 += 1;
         updateScore();
      }
      else {
         winner.innerHTML = `🐱‍👤 ${oPlayer} Win 🐱‍👤`;
         player2 += 1;
         updateScore();
      }
   }
   if(m11 == m12 && m12 == m13 && m13 == m11) {
      audio2.play();
      win = true;
      document.getElementById('l4').style.display = "block";
      setTimeout(()=>{
         document.querySelector('.winnerList').style.display = "block";
         document.querySelector('.winnerList').style.display = "flex";
      },500);
      if (m11 == 'X' && m12 == 'X' && m13 == 'X') {
         winner.innerHTML = `🐱‍👤 ${xPlayer} Win 🐱‍👤`;
         player1 += 1;
         updateScore();
      }
      else {
         winner.innerHTML = `🐱‍👤 ${oPlayer} Win 🐱‍👤`;
         player2 += 1;
         updateScore();
      }
   }
  if(m11 == m22 && m22 == m33 && m33 == m11) {
   audio2.play();
      win = true;
      document.getElementById('l8').style.display = "block";
      setTimeout(()=>{
         document.querySelector('.winnerList').style.display = "block";
         document.querySelector('.winnerList').style.display = "flex";
      },500);
      if (m11 == 'X' && m22 == 'X' && m33 == 'X') {
         winner.innerHTML = `🐱‍👤 ${xPlayer} Win 🐱‍👤`;
         player1 += 1;
         updateScore();
      }
      else {
         winner.innerHTML = `🐱‍👤 ${oPlayer} Win 🐱‍👤`;
         player2 += 1;
         updateScore();
      }
   }
   if(m33 == m32 && m32 == m31 && m31 == m33) {
      audio2.play();
      win = true;
      document.getElementById('l6').style.display = "block";
      setTimeout(()=>{
         document.querySelector('.winnerList').style.display = "block";
         document.querySelector('.winnerList').style.display = "flex";
      },500);
      if (m33 == 'X' && m32 == 'X' && m31 == 'X') {
         winner.innerHTML = `🐱‍👤 ${xPlayer} Win 🐱‍👤`;
         player1 += 1;
         updateScore();
      }
      else {
         winner.innerHTML = `🐱‍👤 ${oPlayer} Win 🐱‍👤`;
         player2 += 1;
         updateScore();
      }
   }
   if (m13 == m23 && m23 == m33 && m33 == m13) {
      audio2.play();
      win = true;
      document.getElementById('l3').style.display = "block";
      setTimeout(()=>{
         document.querySelector('.winnerList').style.display = "block";
         document.querySelector('.winnerList').style.display = "flex";
      },500);
      if (m13 == 'X' && m23 == 'X' && m33 == 'X') {
         winner.innerHTML = `🐱‍👤 ${xPlayer} Win 🐱‍👤`;
         player1 += 1;
         updateScore();
      }
      else {
         winner.innerHTML = `🐱‍👤 ${oPlayer} Win 🐱‍👤`;
         player2 += 1;
         updateScore();
      }
   }
    if (m13 == m22 && m22 == m31 && m31 == m13) {
      audio2.play();
      win = true;
      document.getElementById('l7').style.display = "block";
      setTimeout(()=>{
         document.querySelector('.winnerList').style.display = "block";
         document.querySelector('.winnerList').style.display = "flex";
      },500);
      if (m13 == 'X' && m22 == 'X' && m31 == 'X') {
         winner.innerHTML = `🐱‍👤 ${xPlayer} Win 🐱‍👤`;
         player1 += 1;
         updateScore();
      }
      else {
         winner.innerHTML = `🐱‍👤 ${oPlayer} Win 🐱‍👤`;
         player2 += 1;
         updateScore();
      }
   }
   if (m12 == m22 && m22 == m32 && m32 == m12) {
      audio2.play();
      win = true;
      document.getElementById('l2').style.display = "block";
      setTimeout(()=>{
         document.querySelector('.winnerList').style.display = "block";
         document.querySelector('.winnerList').style.display = "flex";
      },500);
      if (m12 == 'X' && m22 == 'X' && m32 == 'X') {
         winner.innerHTML = `🐱‍👤 ${xPlayer} Win 🐱‍👤`;
         player1 += 1;
         updateScore();
      }
      else {
         winner.innerHTML = `🐱‍👤 ${oPlayer} Win 🐱‍👤`;
         player2 += 1;
         updateScore();
      }
   }
   if (m21 == m22 && m22 == m23 && m23 == m21) {
      audio2.play();
      win = true;
      document.getElementById('l5').style.display = "block";
      setTimeout(()=>{
         document.querySelector('.winnerList').style.display = "block";
         document.querySelector('.winnerList').style.display = "flex";
      },500);
      if (m21 == 'X' && m22 == 'X' && m23 == 'X') {
         winner.innerHTML = `🐱‍👤 ${xPlayer} Win 🐱‍👤`;
         player1 += 1;
         updateScore();
      }
      else {
         winner.innerHTML =`🐱‍👤 ${oPlayer} Win 🐱‍👤`;
         player2 += 1;
         updateScore();
      }
   }
   if(tie >= 9 && win == false){
      player1 = 0;
      player2 = 0;
      setTimeout(()=>{
         document.querySelector('.winnerList').style.display = "block";
         document.querySelector('.winnerList').style.display = "flex";
      },500);
      winner.innerHTML = `🐱‍👤 Tie 🐱‍👤`;
      document.querySelector('.inc').innerHTML = "+0";

   }
}

const newbtn = document.querySelector('.newbtn');
function showName(){
   audio3.play();
   document.querySelector('.players').style.display = "block";
   document.querySelector('.players').style.display = "flex";
   document.querySelector('.gameControl').style.display = "none";
}

newbtn.addEventListener('click',showName);
function saveGame(){
localStorage.setItem('games',JSON.stringify(gameObj));
}

const restart = document.getElementById('restart');
function restartGame(){
   audio3.play();
   gameObj = gameObj.filter((ele)=>{
      ele.show = "false";
   })
   saveGame();
   window.location.reload();
   localStorage.clear();
}
restart.addEventListener('click',restartGame)

const cwl = document.querySelector('.c-w-l');
function closeWinList(){
   audio3.play();
   window.location.reload();
}
cwl.addEventListener('click',closeWinList)

