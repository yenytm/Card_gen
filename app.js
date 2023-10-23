window.onload = () => {
    
    const cardSuit = ["♦️", "♥️", "♠️", "♣️"];
    const cardNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
    ];


    let generateRandomNumber = () => {
        let number = Math.floor(Math.random()*cardNumber.length)
        return cardNumber[number]
    }
    let generateRandomSuit = () => {
        let suit = Math.floor(Math.random()*cardSuit.length)
        return cardSuit[suit]

        
    }

    document.getElementById("numero").innerHTML = generateRandomNumber()
    document.getElementById("suitSymbol").innerHTML = generateRandomSuit()
    // document.getElementById("suitSymbol2").innerHTML = generateRandomSuit()





    document.getElementById("clickButton").addEventListener("click")


}



    
