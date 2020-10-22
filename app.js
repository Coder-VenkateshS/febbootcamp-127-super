// var a = 10;
// console.log(a);
// var b= 5;

// (a>b)? console.log(a):console.log(b);

// for(var i=1; i<=5;i++)
// console.log(i);

// var array=[1,2.6,'Venkatesh'];
// for(var i=0;i<array.length;i++)
// console.log(array[i])

// array.forEach(item => console.log(item))

let score = [0,1,2,3,4,5,6];
console.log(score);
var turn;
var team1 = {
    // Team 1 Details
    name:"CSK",
    runs:[],
    score:0
};
console.log(team1);
var team2 = {
    // Team 1 Details
    name:"MI",
    runs:[],
    score:0
};
console.log(team2);

window.onload = ()=>{
    selectTurn(); // Decide the toss and who is gonna bat first
    updateButtonText(); // Update the text of the button based on the strike
    updateScore(); // updating the initial scoreboard
    updateName(); // update the team names at the start
};


selectTurn=()=>{
console.log("select turn");
turn = Math.round(Math.random())+1;
console.log(turn);
};

updateButtonText =()=>{
    var button = document.getElementById('strike-button');
    console.log(button);
    button.textContent = `${turn===1?team1.name: team2.name} Strike`;
}
// Es6 notation of writing a function
updateScore = ()=>{
    //update team-1 score
    document.getElementById('team-1-score').textContent = team1.score;
    // update team-2 score
    document.getElementById('team-2-score').textContent = team2.score;
}
// Traditional way of writing
function updateName(){
    console.log("Update Name called");
    document.getElementById('team-1-name').textContent = team1.name;
    // update team-2 name
    document.getElementById('team-2-name').textContent = team2.name;  
}
// updateName = ()=>{
//     // update team-1 name
//     document.getElementById('team-1-name').textContent = team1.name;
//     // update team-2 name
//     document.getElementById('team-2-name').textContent = team2.name;
// }