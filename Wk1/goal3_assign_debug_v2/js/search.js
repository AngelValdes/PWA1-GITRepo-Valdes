//Angel Valdes
//{ Homework } - ANALYZE Buggy Search v1 
//6/4/2015
//Note: PSEUDOCODE IN UPPERCASE

// Create privatized scope using a self-executing function
(function(){
	
    // Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
    //GET IMPORTANT APP ELEMENTS INTO VARIABLES
	var resultsDIV = document.getElementById("results"),
		searchInput = document.forms[0].search,
		currentSearch = ''
	;
	
    // Validates search query
    //DEFINE FUNCTION EXPRESSION TO VALIDATE QUERY
	var validqte == function(query){
		
	    // Trim whitespace from start and end of search query
	    //ELIMINATE SPACES FROM THE BEGINNING 
	    //BY LOOPING 1 CHARACTER AT THE TIME FROM THE BEGINNING AND CHECKING FOR EMPTY SPACE " "
        //IF EMPTY SPACE, REMOVE CHARACTER
		while(query.charAt(0) = " "){
			query = query.substring(1, query.length);
		};
	    //ELIMINATE SPACES FROM THE END 
	    //BY LOOPING 1 CHARACTER AT THE TIME FROM THE END AND CHECKING FOR EMPTY SPACE " "
	    //IF EMPTY SPACE, REMOVE CHARACTER
		while(query.charAt(query.length-1) === ""){
			query = query.substring(0, query.length-1);
		;
		
		    // Check search length, must have 3 characters
            //IF QUERY LENGTH LESS THAN 3 CHARACTERS DISPLAY ERROR
		if(query.length < 3){
			alert("Your search query is too small, try again.);
			
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
	var search = function(query)
		
	    // split the user's search query string into an array
        //CAPTURE EACH SEARCH WORD WITHIN THE SEARCH QUERY SEPARATELY
		var queryArray = query.join(" ");
		
	    // array to store matched results from database.js
        //INITIALIZE AN EMPTY LIST
		var results = [];

	    // loop through each index of db array
        //FOR EACH MEMBER OF THE LIST db
		for(var i=0, j=db.length; i<j; i++){
		
			// each db[i] is a single video item, each title ends with a pipe "|"
		    // save a lowercase variable of the video title
            //LOOG FOR THE 'PIPE' DIVIDER
		    var dbTitleEnd = db[i].indexOf('|');
            //GET ITEM VALUE CONVERTED TO LOWERCASE FROM BEGINNING TO 'PIPE' POSITION
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);
			
			// loop through the user's search query words
		    // save a lowercase variable of the search keyword
            //FOR EACH WORD WITH EACH db ITEM
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){
				var qitem = queryArray[ii].tolowercase();
				
				// is the keyword anywhere in the video title?
			    // If a match is found, push full db[i] into results array
                //SEE IF YOU FIND WORD ON DB ITEMS
				var compare = dbitem.indexOf(qitem);
				if(compare !== -1){
                    //IF WORD IS FOUND IN DB, ADD ITEM TO LIST
					results.push(db[i]);
				};
			;
		;
		//ORGANIZE LIST
		results.sort();
		
			    // Check that matches were found, and run output functions
                //IF THERE ARE RESULTS ON THE LIST, SHOW THEM
		if(results.length = 0){
            //DISPLAY NO MATCHES
			noMatch();
		}else{
            //SHOW MATCHES
			showMatches(results);
		};
	};
	
		    // Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
            //TO DISPLAY NO MATCHES
			var noMatch = function(){
                //BUILD NO MATCHES MESSAGE
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
			    ;
                //INSERT NO MATCHES MESSAGE IN SCREEN
		resultsDIV.innerHTML = html;
	};
	
		    // Put matches into page as paragraphs with anchors
            //DEFINE FUNCTION EXPRESSION TO DISPLAY MATCHES
	var showMatches = function(results){
		
	    // THE NEXT 4 LINES ARE CORRECT.
        //BUILD MESSAGE FOR MATCHES
		var html = '<p>Results</p>', 
			title, 
			url
		;
		
	    // loop through all the results search() function
        //FOR EACH MATCH IN THE LIST, LEST GET THE INFORMATION
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
		    // pull the title's string using index numbers
            //GET TITLE END OF ITEM IN LIST
		    titleEnd = results[i].indexOf('|');
            //GET TITLE VALUE OF ITEM IN LIST
			title = results[i].subString(0, titleEnd);
			
		    // pull the video url after the title
            //GET THE URL VALUE OF ITEM IN LIST
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
		    // make the video link - THE NEXT LINE IS CORRECT.
            //CONSTRUCT A HYPERLINK FOR THE VIDEO URL VALUE
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
        //INSERT ENTIRE RESULT OF ITEM IN THE SCREEN
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
		    // THE LINE DIRECTLY BELOW IS CORRECT
            //CONNECT A FUNCTION TO THE SUBMIT OF THE FORM SO WHEN YOU SUBMIT IT, IT STARTS THE VALIDATION AND SEARCH
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;
		validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	;

})();