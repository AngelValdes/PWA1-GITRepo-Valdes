//Angel Valdes
//{ Homework } - DEVELOP Duel #2
//6/11/2015
//Note: PSEUDOCODE IN UPPERCASE

// self-executing function
(function(){
    //DISPLAY MESSAGE IN BROWSER CONSOLE
    //console.log("FIGHT!!!");

    //player name
    //DEFINE PLAYER'S NAME
    //var playerOne[0] = "Spiderman";
    //var playerTwo[0] = "Batman";

    //player damage
    //DEFINE PLAYER'S MAXIMUM ROUND DAMAGE
    //var player1Damage = 20;
    //var player2Damage = 20;

    //player health
    //DEFINE PLAYER'S LIFE INITIAL HEALTH
    //var playerOne[2] = 100;
    //var playerTwo[2] = 100;
    //ARRAYS
    //var playerOne = ["Spiderman", 20, 100];
    //var playerTwo = ["Batman", 20, 100];;
    //Objects
    var playerOne = { name: "Spiderman", damage: 20, health: 100 };
    var playerTwo = { name: "Batman", damage: 20, health: 100 };
    //array of objects
    var players = [playerOne, playerTwo]; //could also make the objects directly in the array... just dont know how you want it by reading the instructions
    //start the game on click of button flight
    var fightButton = document.querySelector(".buttonblue");
    fightButton.addEventListener("click", fight);
    //initialize header with player names and initial health
    var kratos = document.querySelector("#kratos p");
    kratos.innerHTML = players[0].name + ":" + players[0].health;
    var kabal = document.querySelector("#kabal p");
    kabal.innerHTML = players[1].name + ":" + players[1].health;
    //result value
    var result = "no winner";
    //get fight button
    //initiate round
    //SET INTIAL ROUND TO 1
    var round=1;
    var roundNumber = document.getElementById("round_number");
    roundNumber.setAttribute("style", "font-size:  25px; font-weight: bold;");
    roundNumber.innerHTML = "Click to Start Fight";

    //INITIATE THE FIGHT
    function fight() {
        //DISPLAY INITIAL PLAYERS' NAME AND HEALTH
        //alert(playerOne[0] + ":" + playerOne[2] + "  *START*  " + playerTwo[0] + ":" + playerTwo[2]);
     
        //REPEAT FROM ROUND 0 TO A MAXIMUM OF 10 ROUNDS
        //for (var i = 0; i < 10; i++)
        //{
        if (round < 11) {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            //DETERMINE RANDOM DAMAGE AMOUNT FOR PLAYER1 AND PLAYER2 BASED ON THEIR MAXIMUN DAMAGE
            var minDamage1 = players[0].damage * .5;
            var minDamage2 = players[1].damage * .5;
            var f1 = Math.floor(Math.random() * (players[0].damage - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (players[1].damage - minDamage2) + minDamage2);

            //inflict damage
            //SUBTRACT NEW DAMAGE FROM PLAYERS' HEALTH
            players[0].health -= f1;
            players[1].health -= f2;

            //console.log(players[0].damage+": "+players[0].health + " " + players[1].damage+":"+players[1].health);
            kratos.innerHTML = players[0].name + ":" + players[0].health;
            kabal.innerHTML = players[1].name + ":" + players[1].health;
            //check for victor
            //CALL WINNER CHECK PROCESS
            result = winnerCheck();
            //console.log(result);

            //IF WINNER OUTPUT MESSAGE, IF NOT THEN INCREMENT ROUND AND FIGHT AGAIN (LOOP)
            if (result === "no winner") {
                roundNumber.innerHTML = "ROUND " + round + " complete";
                round++;
                //alert(playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[2]);

            } else {
                //alert(result);
                finalResult();
            };
        } else {
            finalResult();
        }
    };
    function finalResult() {
         //display message in the middle, remove the score, and change the button to done as in video
                var resultElem = document.querySelector(".clear");
                resultElem.innerText = result;
                resultElem.style.fontSize = "40px";
                resultElem.style.textAlign = "center";
                var parent = document.getElementById("scores");
                parent.removeChild(kratos.parentNode);
                parent.removeChild(kabal.parentNode);
                //change fight button to done and disable it from working again like in video
                fightButton.innerText = "DONE!!";
                fightButton.removeEventListener("click", fight);
    };

    //CHECK FOR WINNER (ANY PLAYER HEALTH BELOW 1, OR BOTH BELOW 1)
    function winnerCheck() {
        //IF BOTH PLAYERS' HEALTH BELOW 1, MESSAGE "BOTH DIE"
        if (players[0].health<1 && players[1].health<1)
        {
            result = "You Both Die";
            //IF PLAYER1'S HEALTH BELOW 1, MESSAGE "PLAYER2'S NAME WINS"
        } else if(players[0].health<1) {
            result = players[1].name + " WINS!!!";
            //IF PLAYER2'S HEALTH BELOW 1, MESSAGE "PLAYER1'S NAME WINS"
        } else if (players[1].health<1) {
            result = players[0].name + " WINS!!!";
        };
        //RETURN MESSAGE
       return result;
    };

    /*******  The program gets started below *******/
    //AUTOMATICALLY START THE GAME
    //fight();

})();