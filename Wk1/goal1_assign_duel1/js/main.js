//Angel Valdes
//{ Homework } - ANALYZE Duel #1 
//6/4/2015
//Note: PSEUDOCODE IN UPPERCASE

// self-executing function
(function(){
    //DISPLAY MESSAGE IN BROWSER CONSOLE
    console.log("FIGHT!!!");

    //player name
    //DEFINE PLAYER'S NAME
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    //DEFINE PLAYER'S MAXIMUM ROUND DAMAGE
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    //DEFINE PLAYER'S LIFE INITIAL HEALTH
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //initiate round
    //SET INTIAL ROUND TO 0
    var round=0;

    //INITIATE THE FIGHT
    function fight() {
        //DISPLAY INITIAL PLAYERS' NAME AND HEALTH
        alert(playerOneName + ":" + playerOneHealth + "  *START*  " + playerTwoName + ":" + playerTwoHealth);
        //REPEAT FROM ROUND 0 TO A MAXIMUM OF 10 ROUNDS
        for (var i = 0; i < 10; i++)
        {
            
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            //DETERMINE RANDOM DAMAGE AMOUNT FOR PLAYER1 AND PLAYER2 BASED ON THEIR MAXIMUN DAMAGE
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            //SUBTRACT NEW DAMAGE FROM PLAYERS' HEALTH
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //check for victor
            //CALL WINNER CHECK PROCESS
            var result = winnerCheck();
            console.log(result);
            //IF WINNER OUTPUT MESSAGE, IF NOT THEN INCREMENT ROUND AND FIGHT AGAIN (LOOP)
            if (result==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

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
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
            //
        } else if(playerOneHealth<1) {
            result = playerTwoName + " WINS!!!";
            //
        } else if (playerTwoHealth<1) {
            result = playerOneName + " WINS!!!";
        };
        //
       return result;
    };

    /*******  The program gets started below *******/
    //
    fight();

})();