
// this is array of objexts
let fighters = [

    { icon: "🐉", name: "Dragon",    power: 100 },
    { icon: "🐥", name: "Chick",     power: 10 },
    { icon: "🐊", name: "Crocodile", power: 80 },
    { icon: "💩", name: "Poop",      power: 5 },
    { icon: "🦍", name: "Gorilla",   power: 85 },
    { icon: "🐢", name: "Turtle",    power: 40 },
    { icon: "🐩", name: "Poodle",    power: 20 },
    { icon: "🦭", name: "Seal",      power: 45 },
    { icon: "🦀", name: "Crab",      power: 30 },
    { icon: "🐝", name: "Bee",       power: 25 },
    { icon: "🤖", name: "Robot",     power: 95 },
    { icon: "🐘", name: "Elephant",  power: 83 },
    { icon: "🐸", name: "Frog",      power: 35 },
    { icon: "🕷", name: "Spider",    power: 15 },
    { icon: "🐆", name: "Leopard",   power: 94 },
    { icon: "🦕", name: "Dinosaur",  power: 96 },
    { icon: "🦁", name: "Lion",      power: 99 }
    
]

//let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage-el");
let fightButtonEl = document.getElementById("fightButton");
let winnerEl = document.getElementById("win-el");
let historyEl = document.getElementById("history-el");

let randomNumberOne;
let randomNumberTwo;
let scores = new Array(fighters.length).fill(0);
let fightersHistory = [];





fightButtonEl.addEventListener('click' , function(){
    do{
        randomNumberOne = Math.floor(Math.random() * fighters.length);
        randomNumberTwo = Math.floor(Math.random() * fighters.length);
    }while (randomNumberOne == randomNumberTwo);


    stageEl.textContent = `
                    ${fighters[randomNumberOne].icon}  ${fighters[randomNumberOne].name} - Power: ${fighters[randomNumberOne].power}
                    vs    
                    ${fighters[randomNumberTwo].icon}   ${fighters[randomNumberTwo].name} - Power: ${fighters[randomNumberTwo].power}`;

    desideWinner();

})
//fightButtonEl();



function desideWinner(){

    console.log(randomNumberOne);
    console.log(randomNumberTwo);   
    
    let winner;

    if(fighters[randomNumberOne].power > fighters[randomNumberTwo].power){

        scores[randomNumberOne]++;
        winner = fighters[randomNumberOne].icon + " ( "  + fighters[randomNumberOne].name + " ) ";
        winnerEl.textContent = ` winner is :  ${fighters[randomNumberOne].icon}  ${fighters[randomNumberOne].name}, fighter one is winner. Score : ${scores[randomNumberOne]}`

    }else if(fighters[randomNumberOne].power < fighters[randomNumberTwo].power){

        scores[randomNumberTwo]++
        winner = fighters[randomNumberTwo].icon + " ( " + fighters[randomNumberTwo].name + " )";
        winnerEl.textContent = ` winner is : ${fighters[randomNumberTwo].icon} ${fighters[randomNumberTwo].name} ,fighter two is the winner . Scores : ${scores[randomNumberTwo]}`

    }else{
        winner = "Draw "
        winnerEl.textContent = `its a draw `
    }

    fightersHistory.push({
        fighters1: `${fighters[randomNumberOne].icon} ${fighters[randomNumberOne].name} - Power : ${fighters[randomNumberOne].power}`,
        fighters2: `${fighters[randomNumberTwo].icon} ${fighters[randomNumberTwo].name} - Power : ${fighters[randomNumberTwo].power}`,
        winner : winner
    })
    displayHistory();
}







function displayHistory(){

    historyEl.innerHTML = fightersHistory.map(fight => {
        return  `<li>
            ${fight.fighters1} vs ${fight.fighters2} - Winner: ${fight.winner}
         </li>
        `;
    }).join("");
}

