var readLineSync = require('readline-sync');

var score = 0;
var highScore = [
    {name: "RawHeat", score: 5},
    {name: "Lil Golu", score: 4}
]
var userName = readLineSync.question("***** \"Rap it Up\" ***** - the rappers quiz\n\n\nWhat's your rap name? ");

console.log("Yooo, " + userName + " let's see how big rap fan you are! 😛");
console.log("---------------------");

function askQuestion(question, answer){

  var reply = readLineSync.question(question).toLowerCase();
  
  if( reply === answer ){
      score = score + 1;
      console.log("Yayyy!!!, "+ reply + " it is!");
  }
  else{
      console.log("Aghhhh, it's not " + reply + " :(");
  }
  console.log("---------------------");
}

var questions = [
    {question: "\"Love The Way You Lie\", Eminem with which other artist made this song? ",
     answer: "rihana"},
    {question: "A banger by Kendrick Lamar which won multiple grammy and goes like \"Bitch!, sit down, be _______?\" ",
     answer: "humble"},
    {question: "Bad & Boujiee a song that rocked the charts of 2016 featuring Lil Uzi was made by which band? ",
     answer:"migos"},
    {question: "XXXTENTACION, the artist who got so famous just to die so young, with the 2nd most liked post on Instagram got famous from which song? *Hint: the song have over 1 billion views on yt ;) ",
     answer: "sad"},
    {question: "\"Ting Ting Ting... Still D.R.E.\", I mean if you really listen to rap that should be enough for you to tell who made this song? ",
     answer: "snoop dogg"},
]

for(var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    askQuestion(currentQuestion.question, currentQuestion.answer);
}

console.log("Well Done!" + userName + " ,your Total Score: \"" + score + "\"");

console.log("---------------------");

console.log("*** Wall of Fame ***");
for(var j = 0; j< highScore.length; j++){
    console.log(j + ". "+ highScore[j].name + " , Score: "+ highScore[j].score);
}


if(score > 4){
    console.log("Damnnn " + userName + " you made a new high score send me an ss and I'll add you to the \"Wall of Fame\" :)")
}