var wins = 0;
var losses = 0;
var attempt = 10;
var wrongChoice = [];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var cpuLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
var playerLetter;

document.getElementById("wins").innerHTML = "wins: " + wins;
document.getElementById("losses").innerHTML = "losses: " + losses;
document.getElementById("attempt").innerHTML = "attempts left: " + attempt;
document.getElementById("wrongChoice").innerHTML = "Wrong Letters: " + wrongChoice;


console.log("cpu Letter: " +cpuLetter);
document.onkeyup = function(event){
    if(validInput(event.key)){
        console.log(event.key);
        if(event.key == cpuLetter){
            wins ++;
            attempt = 10;
            wrongChoice = [];
            cpuLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log("cpu Letter: " +cpuLetter);
        }
        else{
            attempt --;
            wrongChoice.push(event.key);
            
        }
        if(attempt == 0){
            losses ++;
            attempt = 10;
            wrongChoice = [];
            cpuLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log("cpu Letter: " +cpuLetter);
        }
    }

    document.getElementById("wins").innerHTML = "wins: " + wins;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    document.getElementById("attempt").innerHTML = "attempts left: " + attempt;
    document.getElementById("wrongChoice").innerHTML = "Wrong Letters: " + wrongChoice;


    
    
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