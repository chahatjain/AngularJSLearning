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
//var myApp = angular
//                   .module("myModule", [])
//                   .controller("myController", function ($scope) {
//                       //creating student object
//                       //    var student = {
//                       //        firstName: "Chahat",
//                       //        lastName: "Jain",
//                       //        gender: "Male"
//                       //    };

//                       //$scope.student = student;

//                       //$scope.message = "Hello Monday !"

//                       //Array of students
//                       //var students = [
//                       //    { firstName: "Chahat", lastName: "Jain", gender: "Male" },
//                       //    { firstName: "Chahat1", lastName: "Jain1", gender: "Male1" },
//                       //    {
//                       //        firstName: "Chahat2",
//                       //        lastName: "Jain2",
//                       //        gender: "Male2"
//                       //    },
//                       //    {
//                       //        firstName: "Chahat3",
//                       //        lastName: "Jain3",
//                       //        gender: "Male3"
//                       //    },
//                       //    {
//                       //        firstName: "Chahat4",
//                       //        lastName: "Jain4",
//                       //        gender: "Male4"
//                       //    }
//                       //];
//                       //$scope.students = students;

//                       //var countries = [
//                       //    {
//                       //        name: "UK",
//                       //        cities: [
//                       //            { name: "London" },
//                       //            { name: "Birmingham" },
//                       //            { name: "Manchester" }
//                       //        ]
//                       //    },
//                       //    {
//                       //        name: "USA",
//                       //        cities: [
//                       //            { name: "LA" },
//                       //            { name: "New York" },
//                       //            { name: "LVA" }
//                       //        ]
//                       //    },       
//                       //    {
//                       //        name: "India",
//                       //        cities: [
//                       //            { name: "Mumbai" },
//                       //            { name: "Delhi" },
//                       //            { name: "Bhopal" }
//                       //        ]
//                       //    }
//                       //];

//                       //$scope.countries = countries;
//                       $scope.
//                   });

//Use of Service

//var myModule = angular.module('myModule', [])
//                        .controller('myController', ['$scope', 'notify', function ($scope, notify) {
//                            $scope.callNotify = function (message) {
//                                notify(message);
//                            }
//                        }]);

//myModule.factory('notify', ['$window', function (window) {
//                            var messages = [];

//                            return function (msg) {
//                                messages.push(msg);
//                                if (messages.length == 3) {
//                                    window.alert(messages.join('\n'));
//                                    messages = [];
//                                }
//                            };
//                        }]);

//Using $anchorScroll Service

//angular.module('anchorScrollModule', [])
//        .controller('anchorController', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
//            $scope.goToBottom = function () {
//                //Set the location of the hash to the id of the element you wish to scroll to.
//                $location.hash('bottom');
//                $anchorScroll();
//            };
//        }]);

// Using $anchorScroll.yOffSet

//angular.module('anchorScrollOffsetModule', [])
//    .run(['$anchorScroll', function ($anchorScroll) {
//        $anchorScroll.yOffset = 50; //always scroll to 50 extra pixel
//    }])
//    .controller('headerController', ['$scope', '$anchorScroll', '$location',
//        function ($scope, $anchorScroll, $location) {
//            $scope.gotoAnchor = function(x){
//                var newHash = 'anchor' + x;
//                if ($location.hash() !== newHash) {
//                    $location.hash('anchor' + x);
//                } else {
//                    $anchorScroll();
//                }
//            };
//        }]);

//Using $cacheFactory

angular.module('cacheFactoryModule', [])
        .controller('cacheFactoryController', ['$scope', '$cacheFactory', function ($scope, $cacheFactory) {
            $scope.keys = [];
            $scope.cache = $cacheFactory('cacheId');
            $scope.put = function (key, value) {
                if (angular.isUndefined($scope.cache.get(key))) {
                    $scope.keys.push(key);
                }
                $scope.cache.put(key, angular.isUndefined(value) ? null : value);
            };
        }]);