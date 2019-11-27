//Mr Seagull Wrote this - IT IS AWESOMMMMMMMEEEEEEEEEEE

document.getElementById("Start").addEventListener("click",spin) //the balance will update to 500 when "Start" button is pressed"

//Set balance to 500
let balance = 500;
let bet = 1;
let payout = 10;

function increaseBet(){  //when f win - your balance will increase by 10
    balance = balance + payout;
}
    
function loser(){
    document.getElementById("status").src = "images/Fail.png";
}

function winner(){
    document.getElementById("status").src = "images/BigWin.png" //winner - BigWin will replace fail image
}

function spin(){
    balance = balance - bet
    //alert(bet)
    let final = []
    final.push(spinReel("r1"))
    final.push(spinReel("r2"))
    final.push(spinReel("r3"))
    //Check if the reels match up by checking 1 and 0 & 0 and 2
    if (final[0] == final[1] && final[0] == final[2]){
        winner()
        return increaseBet();
    }
    else{
        loser()
    }
    update_theScreen()
}    
function spinReel(reel){
    let i = Math.floor(Math.random()*6)
    if (i == 0){
        document.getElementById(reel).src = "images/Cherry.png"
    }
    else if (i == 1){
        document.getElementById(reel).src = "images/Grapes.png"
    }
    else if (i == 2){
        document.getElementById(reel).src = "images/Lemon.png"
    }
    else if (i == 3){
        document.getElementById(reel).src = "images/Orange.png"
    }
   else if (i == 4){
        document.getElementById(reel).src = "images/Strawberry.png"
    }
    else if (i == 5){
        document.getElementById(reel).src = "images/Watermelon.png"
    }
    return i
}


function update_theScreen() {
    document.getElementById("balanceDisplay").innerHTML = balance

}
