var wins,losses = 0;
var attempt = 10;
var wrongChoice = [];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var cpuLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
var playerLetter;

alert(cpuLetter);

document.onkeyup = function(event){
    if(validInput(event.key)){
        console.log(event.key);
        if(event.key == cpuLetter){
            wins ++;
            tries = 10;
            wrongChoice = [];
            var cpuLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
            alert("you win!");
        }
        else{
            attempt --;
            wrongChoice.push(event.key);
            alert(attempt);
        }
        if(attempt == 0){
            losses ++;
            tries = 10;
            wrongChoice = [];
            var cpuLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
            alert("you lose!");
        }
    }
}



// this checks if the input is a letter
function validInput(x){
    for(i=0;i<alphabet.length;i++){
        y = alphabet[i];
        if(x == y){
            return true;
        }
    }
}