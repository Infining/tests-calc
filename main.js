"use strict";
var app = angular.module('calc', []);
app.controller('calcController',function($scope){
  $scope.a = "";
  $scope.b = "";
  $scope.c = "";
  $scope.d = $scope.a;
  var select = 0, oper = "";

  $scope.inputVal = function(digit) {
    if (select === 0) {
      $scope.a += digit;
      $scope.d = $scope.a;
    } else if (select === 1) {
      $scope.b += digit;
      $scope.d = $scope.b;
    } else if (select === 2) {
      select = 0;
      $scope.a += digit;
      $scope.d = $scope.a;
    }
  };

  $scope.operation = function(op) {
    if ($scope.a.length) {
      oper = op;
      select = 1;
    }
  };

  $scope.eval = function() {
    var aNum = parseFloat($scope.a);
    var bNum = parseFloat($scope.b);
    var cNum;

    switch (oper) {
      case '+':
        cNum = aNum + bNum;
        break;
      case '-':
        cNum = aNum - bNum;
        break;
      case '*':
        cNum = aNum * bNum;
        break;
      case '/':
        cNum = aNum / bNum;
        break;
      case '%':
        cNum = aNum % bNum;
        break;
      default:
        $scope.c = "error!";
        break;
    }

    if(cNum !== NaN) {
      $scope.c = cNum.toString();
    }

    select = 2;
    $scope.d = $scope.c;
    $scope.a = "";
    $scope.b = "";
    $scope.c = "";
  };


  $scope.clearAll = function() {
    $scope.a = "";
    $scope.b = "";
    $scope.c = "";
    $scope.d = "";
    select = 0;
  }
});
