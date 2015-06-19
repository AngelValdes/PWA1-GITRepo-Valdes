//Angel Valdes
//{ Homework } - ANALYZE Buggy Search v3
//6/4/2015
//Note: PSEUDOCODE IN UPPERCASE, corrections marked with numbers (1-9)

// Create privatized scope using a self-executing function
(function () {

    // Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
    //GET IMPORTANT APP ELEMENTS INTO VARIABLES
    var resultsDiv = document.getElementById("results"),
		searchInput = document.forms[0].search,
		currentSearch = ''
    ;

    // Validates search query
    //DEFINE FUNCTION EXPRESSION TO VALIDATE QUERY
    var validqte = function (query) { //1-logic error, using comparison instead of assignment operator

        // Trim whitespace from start and end of search query
        //ELIMINATE SPACES FROM THE BEGINNING 
        //BY LOOPING 1 CHARACTER AT THE TIME FROM THE BEGINNING AND CHECKING FOR EMPTY SPACE " "
        //IF EMPTY SPACE, REMOVE CHARACTER
        while (query.charAt(0) == " ") { //2-syntax error, using assignment intead of comparison operator
            query = query.substring(1, query.length);
        };
        //ELIMINATE SPACES FROM THE END 
        //BY LOOPING 1 CHARACTER AT THE TIME FROM THE END AND CHECKING FOR EMPTY SPACE " "
        //IF EMPTY SPACE, REMOVE CHARACTER
        while (query.charAt(query.length - 1) === "") {
            query = query.substring(0, query.length - 1);
        };//3-missing closing while

        // Check search length, must have 3 characters
        //IF QUERY LENGTH LESS THAN 3 CHARACTERS DISPLAY ERROR
        if (query.length < 3) {
            alert("Your search query is too small, try again."); //4-syntax error, not closing quotes

            // (DO NOT FIX THE LINE DIRECTLY BELOW)
            //THEN SET YOUR CURSOR POSITION TO THE SEARCH INPUT CONTROL
            searchInput.focus();
            return;
        };
        //AFTER VALIDATING QUERY, PASS QUERY TO BE SEARCH FOR BY CALLING SEARCH FUNCTION
        search(query);
    };

    // Finds search matches
    //DEFINE SEARCH FUNCTION EXPRESSION
    var search = function (query) {//5-lack of opening function body

        // split the user's search query string into an array
        //CAPTURE EACH SEARCH WORD WITHIN THE SEARCH QUERY SEPARATELY
        var queryArray = query.split(" "); //10-incorrect function "join"

        // array to store matched results from database.js
        //INITIALIZE AN EMPTY LIST
        var results = [];

        // loop through each index of db array
        //FOR EACH MEMBER OF THE LIST db
        for (var i = 0, j = db.length; i < j; i++) {

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            //LOOG FOR THE 'PIPE' DIVIDER
            var dbTitleEnd = db[i].indexOf('|');
            //GET ITEM VALUE CONVERTED TO LOWERCASE FROM BEGINNING TO 'PIPE' POSITION
            var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd); //11-incorrect function "tolowercase"

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            //FOR EACH WORD WITH EACH db ITEM
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
                var qitem = queryArray[ii].toLowerCase(); //12-incorrect function "tolowercase"

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                //SEE IF YOU FIND WORD ON DB ITEMS
                var compare = dbitem.indexOf(qitem);
                if (compare !== -1) {
                    //IF WORD IS FOUND IN DB, ADD ITEM TO LIST
                    results.push(db[i]);
                };
            };//6-missing closing for body
        };//7-missing closing for body
        //ORGANIZE LIST
        results.sort();

        // Check that matches were found, and run output functions
        //IF THERE ARE RESULTS ON THE LIST, SHOW THEM
        if (results.length == 0) {//8-assignment operator instead of comparison
            //DISPLAY NO MATCHES
            noMatch();
        } else {
            //SHOW MATCHES
            showMatches(results);
        };
    };

    // Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
    //TO DISPLAY NO MATCHES
    var noMatch = function () {
        //BUILD NO MATCHES MESSAGE
        var html = '' +
			'<p>No Results found.</p>' +
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
        ;
        //INSERT NO MATCHES MESSAGE IN SCREEN
        resultsDiv.innerHTML = html;
    };

    // Put matches into page as paragraphs with anchors
    //DEFINE FUNCTION EXPRESSION TO DISPLAY MATCHES
    var showMatches = function (results) {

        // THE NEXT 4 LINES ARE CORRECT.
        //BUILD MESSAGE FOR MATCHES
        var html = '<p>Results</p>',
			title,
			url
        ;

        // loop through all the results search() function
        //FOR EACH MATCH IN THE LIST, LEST GET THE INFORMATION
        for (var i = 0, j = results.length; i < j; i++) {

            // title of video ends with pipe
            // pull the title's string using index numbers
            //GET TITLE END OF ITEM IN LIST
            var titleEnd = results[i].indexOf('|'); // 13-missing var keyword (implicit variable declaration) not an error if not in strict... but it could became a logic error
            //GET TITLE VALUE OF ITEM IN LIST
            title = results[i].substring(0, titleEnd); //14-incorrect function "subString"

            // pull the video url after the title
            //GET THE URL VALUE OF ITEM IN LIST
            url = results[i].substring(results[i].indexOf('|') + 1, results[i].length);

            // make the video link - THE NEXT LINE IS CORRECT.
            //CONSTRUCT A HYPERLINK FOR THE VIDEO URL VALUE
            html += '<p><a href=' + url + '>' + title + '</a></p>';
        };
        //INSERT ENTIRE RESULT OF ITEM IN THE SCREEN
        resultsDiv.innerHTML = html; //THIS LINE IS CORRECT.
    };

    // The onsubmit event will be reviewed in upcoming Course Material.
    // THE LINE DIRECTLY BELOW IS CORRECT
    //CONNECT A FUNCTION TO THE SUBMIT OF THE FORM SO WHEN YOU SUBMIT IT, IT STARTS THE VALIDATION AND SEARCH
    document.forms[0].onsubmit = function () {
        var query = searchInput.value;
        validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;
    };//9-missing closing body of function

})();