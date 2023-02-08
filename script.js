let randomNumber;
let userNumberArray = [];
let userNumberUpdate = document.getElementsByTagName("input")[0];

const generateNum = ()=>{
    randomNumber = Math.floor(Math.random()*100)
    document.getElementById("game-area").style.display = "none"
    document.getElementById("new-game-button").style.display = "none"
}

const startGame = ()=>{
    document.getElementById("game-area").style.display = "block"
    document.getElementById("welcome-screen").style.display = "none"
}

const startOver = ()=>{
    document.getElementById("new-game-button").style.display = "block"
    document.getElementsByTagName("input")[0].setAttribute("disabled",true)

}
const welcomeScreenShow = ()=>{
   window.location.reload()
}
const compareGuess =()=>{
    let userNumber  = Number(document.getElementsByTagName("input")[0].value);
    userNumberArray = [...userNumberArray, userNumber]
    document.getElementById("guesses").innerHTML = userNumberArray

    // Check for greater and lower
    if(userNumberArray.length<maxGuess){
    if(userNumber>randomNumber){
        document.getElementById("guess-number").innerHTML = "Your guess is greater"
        userNumberUpdate.value = ""
    }
    else if(userNumber<randomNumber){
        document.getElementById("guess-number").innerHTML = "Your guess is lower"
        userNumberUpdate.value = ""
    }
    else{
        document.getElementById("guess-number").innerHTML = "Hurray,You have won"
        userNumberUpdate.value = ""
        startOver()
    }
}else{
    if(userNumber>randomNumber){
        document.getElementById("guess-number").innerHTML = `You Loose!! Correct number was ${randomNumber}`
        userNumberUpdate.value = ""
        startOver()
    }
    else if(userNumber<randomNumber){
        document.getElementById("guess-number").innerHTML = `You Loose!! Correct number was ${randomNumber}`
        userNumberUpdate.value = ""
        startOver()
    }
    else{
        document.getElementById("guess-number").innerHTML = "Hurray,You have won"
        userNumberUpdate.value = ""
        startOver()
    }
}

    document.getElementById("attempts").innerHTML = userNumberArray.length
}
const easyMode = ()=>{
    maxGuess = 10
    startGame()
}

const hardMode = ()=>{
    maxGuess = 5
    startGame()
}