class Card{
    constructor(sign,value){
        this.sign = sign;
        this.value = value;
    }
}

let allCards = [];

let cardValues = [2,3,4,5,6,7,8,9,10,'ace','jack','queen','king'];
let cardSign = ['clubs','diamonds','hearts','spades'];

cardSign.forEach(sign=>{
    cardValues.forEach(val => {
        allCards.push(new Card(sign,val));
    })
})