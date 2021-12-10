import { startGame, playRound } from './game.js';
//create DOM elements
export let body = document.body;
export let startBtn = document.getElementById('start');
export let input = document.createElement('input');
export let submit = document.createElement('button');
submit.innerText = "Make your guess";
export let finalResult = document.getElementById('final-result');
export let results = document.getElementById('results');
//event listeners
startBtn.addEventListener('click', startGame);
submit.addEventListener('click', playRound);
