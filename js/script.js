var goals = ["GOAL"];

function $(e) {
  return document.getElementById(e);
}

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

function mt_rand (min, max) {
  // http://jsphp.co/jsphp/fn/view/mt_rand
  // + original by: Onno Marsman
  // * example 1: mt_rand(1, 1);
  // * returns 1: 1
  var argc = arguments.length;
  if (argc === 0) {
    min = 0;
    max = 2147483647;
  } else if (argc === 1) {
    throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getGoals(file = "./bazzcoinitem.txt") {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4) {
      if(rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        goals = allText.split("\n");
      }
    }
  }
  rawFile.send(null);
  goals.clean("");
  goals.clean(" ");
  goals.clean("\r");
  goals.clean("\n");
}

function print_goal() {
  $("output").innerHTML = goals[mt_rand(0,goals.length - 1)];
}

function newGoal() {
  window.location.href = window.location.href;
}

function init() {
  getGoals();
  print_goal();
}
