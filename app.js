var app = angular.module("valentineApp", []);

app.controller("ValentineController", function ($scope) {

  // Floating hearts
  $scope.hearts = new Array(20);

  // NO Button Start Position
  $scope.noTop = 60;
  $scope.noLeft = 230;

  // Accepted state
  $scope.accepted = false;

  // YES Click Action
  $scope.sayYes = function () {
    $scope.accepted = true;
  };

  // NO Button Moves Only Inside White Box
  $scope.moveNo = function () {

    // Get the button container box
    let box = document.getElementById("buttonBox");

    // Box dimensions
    let boxWidth = box.clientWidth;
    let boxHeight = box.clientHeight;

    // Button dimensions
    let btnWidth = 110;
    let btnHeight = 55;

    // Random position inside the box only
    $scope.noLeft = Math.floor(Math.random() * (boxWidth - btnWidth));
    $scope.noTop = Math.floor(Math.random() * (boxHeight - btnHeight));
  };

});