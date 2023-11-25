//define
var player = document.querySelector('.player');
var computer = document.querySelector('.computer')
var winner = document.querySelector('.winner');
var random;
var cpoint = document.querySelector('.cOnoo')
var point = document.querySelector('.onoo')
var cPoint =1;
var start = document.getElementsByTagName('button')[0]
var pPoint =1;
var computerChoice;
//check
console.log(player);
console.log(computer);
console.log(winner);
// uildel
function play(playerChoice){
    if(playerChoice=="paper"){
        player.innerText = "Your choice : Paper"
    }else if(playerChoice=="scissors"){
        player.innerText = "Your choice : Sciccors"
    }else if(playerChoice=="rock"){
        player.innerText = "Your choice : Rock"
    }
    //computer choice -> random() - - > 0 ->paper, 1->sciccors, 2->rock
    random = Math.floor(Math.random()*3);
    console.log(random)
    if(random==0){
        computerChoice="paper"
        computer.innerText = "computer choice : paper"
    }else if(random==1){
        computerChoice="scisccors"
        computer.innerText = "computer choice : scisccors"
    }else if(random==2){
        computerChoice="rock"
        computer.innerText = "computer choice : rock"
    }
    // winer -> playerchoice==paper computerchoice==rock
    //rock  : scissors , scissors:paper
    if ((playerChoice=="paper" && computerChoice=="rock") || 
     (playerChoice=="scisccors" && computerChoice=="paper") || 
    (playerChoice=="rock" && computerChoice=="scisccors")){
        winner.innerText = "player wins!"
        point.innerText = "You :"+ pPoint++
    }else if((playerChoice=="paper" && computerChoice=="scissors") || 
    (playerChoice=="scisccors" && computerChoice=="rock") || 
   (playerChoice=="rock" && computerChoice=="paper")){
       winner.innerText = "Computer wins!"
       cpoint.innerText = "computer : " + cPoint++
    }else{
        winner.innerText = "tentssen"
    }
}
function restart(){
    pPoint=0;
    cPoint=0;
    player.innerText = "your choise :"
    computer.innerText = "computer choise:"
    winner.innerText = "result :"
    cpoint.innerText = " computer:" + pPoint
    point.innerText = "You:" + cPoint
}





