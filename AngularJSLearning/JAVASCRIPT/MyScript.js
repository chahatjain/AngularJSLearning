/// <reference path="angular.min.js" />
//var myApp = angular.module("myModule", []); //Creating a Module

//Creating a controller
//var myController = function ($scope) {
//    $scope.message = "Welcome to the world of AngularJS";
//};


//Register a controller to a module
//myApp.controller("myController", myController);

//Or we can simplified it in a better way, By doing this we don't need to create a separate variable
//myApp.controller("myController", function ($scope) {

//    var student = {
//        firstName: "Chahat",
//        lastName: "Jain",
//        gender: "Male"
//    };
//    $scope.student = student;
//});

//More simplified way, it is called method chaining
var myApp = angular
                   .module("myModule", [])
                   .controller("myController", function ($scope) {
                       //creating student object
                       //    var student = {
                       //        firstName: "Chahat",
                       //        lastName: "Jain",
                       //        gender: "Male"
                       //    };

                       //$scope.student = student;

                       //$scope.message = "Hello Monday !"

                       //Array of students
                       //var students = [
                       //    { firstName: "Chahat", lastName: "Jain", gender: "Male" },
                       //    { firstName: "Chahat1", lastName: "Jain1", gender: "Male1" },
                       //    {
                       //        firstName: "Chahat2",
                       //        lastName: "Jain2",
                       //        gender: "Male2"
                       //    },
                       //    {
                       //        firstName: "Chahat3",
                       //        lastName: "Jain3",
                       //        gender: "Male3"
                       //    },
                       //    {
                       //        firstName: "Chahat4",
                       //        lastName: "Jain4",
                       //        gender: "Male4"
                       //    }
                       //];
                       //$scope.students = students;

                       var countries = [
                           {
                               name: "UK",
                               cities: [
                                   { name: "London" },
                                   { name: "Birmingham" },
                                   { name: "Manchester" }
                               ]
                           },
                           {
                               name: "USA",
                               cities: [
                                   { name: "LA" },
                                   { name: "New York" },
                                   { name: "LVA" }
                               ]
                           },       
                           {
                               name: "India",
                               cities: [
                                   { name: "Mumbai" },
                                   { name: "Delhi" },
                                   { name: "Bhopal" }
                               ]
                           }
                       ];

                       $scope.countries = countries;
                   });