//for the assignment, we need a timer to count down from 50 to 0 by 5 sec increments and show "blastoff at 0"

function blastOffTimer(){
    console.log("blastOffTimer() started");
    var currTime = 50;
    var i = 5;
    var timeMult = 5000;
    document.getElementById("blastOffText").innerHTML = currTime;
    console.log(currTime);
    currTime = currTime - i;

    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, timeMult);

    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, 2 * timeMult);

    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, 3 * timeMult);

    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, 4 * timeMult);

    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, 5 * timeMult);

    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, 6 * timeMult);

    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, 7 * timeMult);

    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, 8 * timeMult);

    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, 9 * timeMult);

    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = "Blastoff!!";
        currTime = currTime - i;
    }, 10 * timeMult);
}

function betterCtDown(){
    console.log("testCtDown() started");
    //variable to track time
    currTime = 50
    //for loop to save typing
    for(var i = 0; i <= 10; i++){
        console.log(i);
        setTimeout(function(){
            if(currTime == 0){
                //if we are done and need blastoff
                document.getElementById("blastOffText").innerHTML = "Blastoff!"
            }else if (currTime < 25){
                //because the admiral wants this
                document.getElementById("blastOffText").innerHTML = 
                "Warning: Less than 1/2 way to launch, time left = " + currTime
            } else {
                //everything else
                document.getElementById("blastOffText").innerHTML = currTime;
            }
            //we are iterating by 5s
            currTime = currTime - 5;
            //5000 to wait 5 sec between counts
        }, 5000 * i);
    }
}

function test(){
    console.log("test() started");
    var i = 0;
    currTime = 50;
    while(i <=10){
        console.log(i);
        setTimeout(function(){
            document.getElementById("blastOffText").innerHTML = currTime;
            if(currTime == 0){
                document.getElementById("blastOffText").innerHTML = "Blastoff"
            }
            currTime = currTime - 5;
        }, 500 * i);
        i = i + 1;
    }
}

//Variables numWins, numLost, and numTies start at 0
var numWins = 0;
var numLost = 0;
var numTies = 0;
//Display in log "playCraps() started" when running the function playCraps()
function playCraps(){
console.log("playCraps() started");
//Pick a random number, multiply by 6 and store in die1
var die1 = Math.ceil(6 * Math.random());
//Pick a random number, multiply by 6 and store in die2
var die2 = Math.ceil(6 * Math.random());
//add die1 and die2 and store in sum
var sum = die1 + die2;
//Display die1 on the browser at the die1Res position
document.getElementById("die1Res").innerHTML = die1;
//Display die2 on the browser at the die2Res position
document.getElementById("die2Res").innerHTML = die2;
//Display sum on the browser at the sumRes position
document.getElementById("sumRes").innerHTML = sum;
//If the sum is equal to 7 or 11, display "Craps, you lose!"
if(sum == 7 || sum == 11){
    document.getElementById("CrapsRes").innerHTML = "Craps, you lose!";
    //Add 1 to numLost every time conditions are met
    numLost = numLost + 1;
    //If die1 is equal to die2, display "Doubles, you win!"
} else if(die1 == die2 && die1 % 2 == 0){
    document.getElementById("CrapsRes").innerHTML = "Doubles, you win!";
    //Add 1 to numWins every time the conditions are met
    numWins = numWins + 1;
    //If the dice are anything else, display "Oops, it's a tie!"
} else {
     document.getElementById("CrapsRes").innerHTML = "Oops, it's a tie!";
     //Add 1 to numTies every time conditions are met
     numTies = numTies + 1;
}
//Scoreboard: displays amount of wins, losses, and ties
document.getElementById("wins").innerHTML = numWins;
document.getElementById("losses").innerHTML = numLost;
document.getElementById("ties").innerHTML = numTies;
}
