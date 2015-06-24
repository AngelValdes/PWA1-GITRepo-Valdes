/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 * Student Name: Angel Valdes
 * Assignment : { Homework } - ANALYZE! OBJECTS.Person (4h)
 * Date: 6/24/2015
 * Note: PSEUDOCODE IN UPPERCASE
 */

//DECLARE "Person" CONSTRUCTOR, RECEIVING TWO ARGUMENTS NAME AND ROWNUMBER
var Person = function (name, rowNumber) {
    this.name = name;
    this.rowNumber = rowNumber;
    //ADDITIONAL CODE...
};

//DEFINE SHARE FUNCTIONS AND PROPERTIES IN THE PROTOTYPE
Person.prototype = {
    jobs: ["teacher", "farmer", "student", "pilot"],
    actions: ["sleeping", "eating", "working"],
    update: function () {
        //ADDITIONAL CODE...
    }
}

//FUNCTION TO FIND IF ARRAY CONTAINS A MEMBER WITH A VALUE 
function findByProperty(array, value) {
    var index = -1;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            index = i;
            break;
        };
    }
    return index;
}

//REPEAT FUNCTION CALL AFTER SPECIFIED TIME
setInterval(runUpdate, 1000 / 30);
//FUNCTION TO UPDATE PEOPLE'S NAME
function runUpdate() {
    for (var i = 0; i < people.length; i++) {
        //ADDITONAL CODE
    }
    //UPDATE OUTPUT ON PAGE
    populateHTML();
};