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
