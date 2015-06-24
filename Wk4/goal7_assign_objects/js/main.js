/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 * Student Name: Angel Valdes
 * Assignment : { Homework } - ANALYZE! OBJECTS.Person (4h)
 * Date: 6/24/2015
 * Note: PSEUDOCODE IN UPPERCASE
 */

//ARRAY CALLED NAMES
var names = ["Juan", "Jorge", "Mary", "Jose", "Cindy"];

//DECLARE PEOPLE ARRAY
var people = [];

//DECLACRE NAMES USED ARRAY
var namesUsedIndexes = [];

//LOOP UNTIL YOU HAVE THREE OBJECTS IN PEOPLE ARRAY, RANDOMLY CHOOSING A NAME FROM THE NAMES ARRAY, CHECKING IF ALREADY USED, THEN IF NOT USED, MAKE PERSON WITH THAT NAME USING "Person" TYPE AND ADD IT TO PEOPLE ARRAY, PASSING NAME AND ROW NUMBER FROM LOOP
for (var i = 0; people.length < 3; i++) {
    var nameIndex = Math.floor(Math.random() * 4);
    if (findByProperty(namesUsedIndexes, nameIndex) == -1) {
        var person = new Person(names[nameIndex], i);
        people.push(person);
        namesUsedIndexes.push(nameIndex);
    }
}

//FUNCTION TO OUPUT THE PERSON'S INFORMATION ON PAGE, GET ELEMENTS FROM PAGE AND FOR EACH ROW, PRINT A PERSON'S NAME, JOB, AND ACTION
function populateHTML() {
    //ADDITIONAL CODE...
}