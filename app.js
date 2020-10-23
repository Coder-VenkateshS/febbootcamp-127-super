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
    var result = document.getElementById('result');
    result.style.visibility="";
    console.log(result);
    button.textContent = `${turn===1?team1.name: team2.name} Strike`;
    // check whether the game is over
    if(team1.runs.length ==6 && team2.runs.length==6){
    button.remove();
    //check if the match is draw
    result.textContent = team1.score === team2.score? `It's a draw`:`${team1.score > team2.score? team1.name:team2.name} Wins`;
}
else{
 // check strike is over
 turn = team1.runs.length === 6?2:team2.runs.length === 6?1:turn;  
}

}
// Es6 notation of writing a function
updateScore = ()=>{
    //update team-1 score
    document.getElementById('team-1-score').textContent = team1.score;
    // update team-2 score
    document.getElementById('team-2-score').textContent = team2.score;
    updateRuns();
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

// Handle the button click action
var handleStrikeButtonClick = ()=>{
    console.log("button click works");
    var runs = score[Math.floor(Math.random()*score.length)];
    console.log(runs);
    runs = runs === 5 ? 'W':runs;
    console.log(runs);
    // check which team is batting first
    if(turn===1)
    {
        team1.runs.push(runs);
        team1.score = calculateScore(team1.runs); // Update team score
        console.log(team1.score);
    }
    else
    {
        team2.runs.push(runs);
        team2.score = calculateScore(team2.runs); // Update team score
        console.log(team2.score);
    }
    updateButtonText();
    updateScore();
}


var calculateScore = (runs)=>{
    return runs.map(run =>{
        return run =='W'?0:run;
    }).reduce((total,runs)=>total + runs);
}

updateRuns = ()=>{
    var teamOneRunsElement = document.getElementById('team-1-round-runs').children;
    var teamTwoRunsElement =  document.getElementById('team-2-round-runs').children;
    team1.runs.forEach((run,index)=>{
        teamOneRunsElement[index].textContent = run;
    })
    team2.runs.forEach((run,index)=>{
        teamTwoRunsElement[index].textContent = run;
    });
};
