//To do : Let the input boxes sizing with the text and set the placeholder

//Delete button
let deleteButton = document.querySelectorAll(".delete");

let deleteTask = function() {
    console.log("Delete task...");
    let listItem = this.parentNode.parentNode.parentNode;
    let item = listItem.parentNode;  
    item.removeChild(listItem);
}
//use forEach on the class or use Event delegation
deleteButton.forEach( element => element.addEventListener('click', deleteTask));

//Add the price
let priceOutput = document.querySelectorAll(".priceOutput"); 
let itemPrice = document.querySelectorAll(".price");
let itemAmount = document.querySelectorAll(".amount");

let addThePrices = function() {
    console.log("has added");
    //To do:Turn it into functional 
    this.parentNode.childNodes[4].innerHTML = this.value * this.parentNode.childNodes[2].value;
}
 
itemAmount.forEach( element => element.addEventListener('change', addThePrices));
//itemPrice.forEach( element => element.addEventListener('change', addThePrices));

//Total Price and Tips
let subTotal = document.getElementById('subTotal');
let tips = document.getElementById('tips');
let total = document.getElementById('total');

//Sum the price
let countPrice = function() {
    console.log('Counting the price');
    subTotal.innerHTML = 0;
    for(let i = 0; i < priceOutput.length; i++) {
        subTotal.innerHTML = parseFloat(priceOutput[i].innerHTML) + parseFloat(subTotal.innerHTML)
    }
} 
subTotal.addEventListener('click', countPrice);

//Count tips 
let countTips = function() {
    tips.innerHTML = parseFloat(subTotal.innerHTML) * 0.1
} 
tips.addEventListener('click', countTips);

//Count total
let countTotal = function() {
    total.innerHTML = parseFloat(subTotal.innerHTML) +  parseFloat(tips.innerHTML)
    console.log(total.innerHTML)
} 
total.addEventListener('click', countTotal);

//Bug: total still count the removes 