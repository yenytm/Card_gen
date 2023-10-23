
window.onload = () => {
    // let cardSuit = document.getElementsByClassName("icon") 
    let cardVal = document.getElementsByClassName("card_number")

let generateRandomSuit = () => {
    

    let suit = ["♦", "♥", "♠", "♣"]
    let indexSuit = math.floor(math.random()*suit.length)
    return suit[indexSuit]

}    
let generateRandomNumber = () => {
    let cardValue = ["2", "3", "4","5", "6", "7","8", "9", "10","K", "Q", "J", "A"]
    let indexCard = math.floor(math.random()*cardValue.length)
    return cardValue[indexCard]
}
    
}



