//Angel Valdes
//{ Homework } - DEVELOP Duel #2
//6/11/2015
//Note: PSEUDOCODE IN UPPERCASE

// self-executing function
(function(){
    //DISPLAY MESSAGE IN BROWSER CONSOLE
    console.log("FIGHT!!!");

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
    var playerOne = ["Spiderman", 20, 100];
    var playerTwo = ["Batman", 20, 100];;

    //initiate round
    //SET INTIAL ROUND TO 0
    var round=0;

    //INITIATE THE FIGHT
    function fight() {
        //DISPLAY INITIAL PLAYERS' NAME AND HEALTH
        alert(playerOne[0] + ":" + playerOne[2] + "  *START*  " + playerTwo[0] + ":" + playerTwo[2]);
        //REPEAT FROM ROUND 0 TO A MAXIMUM OF 10 ROUNDS
        for (var i = 0; i < 10; i++)
        {
            
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            //DETERMINE RANDOM DAMAGE AMOUNT FOR PLAYER1 AND PLAYER2 BASED ON THEIR MAXIMUN DAMAGE
            var minDamage1 = playerOne[1] * .5;
            var minDamage2 = playerTwo[1] * .5;
            var f1 = Math.floor(Math.random() * (playerOne[1] - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (playerTwo[1] - minDamage2) + minDamage2);

            //inflict damage
            //SUBTRACT NEW DAMAGE FROM PLAYERS' HEALTH
            playerOne[2]-=f1;
            playerTwo[2]-=f2;

            console.log(playerOne[1]+": "+playerOne[2] + " " + playerTwo[1]+":"+playerTwo[2]);

            //check for victor
            //CALL WINNER CHECK PROCESS
            var result = winnerCheck();
            console.log(result);
            //IF WINNER OUTPUT MESSAGE, IF NOT THEN INCREMENT ROUND AND FIGHT AGAIN (LOOP)
            if (result==="no winner")
            {
                round++;
                alert(playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[2]);

            } else{
                alert(result);
                break;
            };

          };
    };

    //CHECK FOR WINNER (ANY PLAYER HEALTH BELOW 1, OR BOTH BELOW 1)
    function winnerCheck() {
        //MESSAGE ASSUMES NO WINNER
        var result = "no winner";
        //IF BOTH PLAYERS' HEALTH BELOW 1, MESSAGE "BOTH DIE"
        if (playerOne[2]<1 && playerTwo[2]<1)
        {
            result = "You Both Die";
            //IF PLAYER1'S HEALTH BELOW 1, MESSAGE "PLAYER2'S NAME WINS"
        } else if(playerOne[2]<1) {
            result = playerTwo[0] + " WINS!!!";
            //IF PLAYER2'S HEALTH BELOW 1, MESSAGE "PLAYER1'S NAME WINS"
        } else if (playerTwo[2]<1) {
            result = playerOne[0] + " WINS!!!";
        };
        //RETURN MESSAGE
       return result;
    };

    /*******  The program gets started below *******/
    //AUTOMATICALLY START THE GAME
    fight();

})();