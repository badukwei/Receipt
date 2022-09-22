//To do : animation of removing and price change
//Bug : if I don't put the item name price will cover the remove bottun
//To fix : 自動進位
//To fix : defaults of input 

let idInput = document.getElementById("newId");
let nameInput = document.getElementById("newName");
let amountInput = document.getElementById("newAmount");
let priceInput = document.getElementById("newPrice");
let addButton = document.getElementsByTagName("button")[0];
let itemsHolder = document.getElementById("itemWrap");
//Total Price and Tips
let subTotal = document.getElementById('subTotal');
let tips = document.getElementById('tips');
let total = document.getElementById('total');

const createNewItemElement = function(number, name, amount, price) {
  //create a listitem
  let item = document.createElement("div");
  //itemNumber & itemName & itemPrice & itemAmount
  let infoWrap = document.createElement("div"); 
  //itemNumber & itemName
  let info = document.createElement("div");
  //itemNumber
  let itemNumber = document.createElement("p"); 
  //itemName
  let itemName = document.createElement("h3");
  //totalPrice
  let totalPrice = document.createElement("p");
  //priceOutput
  let priceOutput = document.createElement("span");
  //removeWrap
  let removeWrap = document.createElement("div");
  //deleteButton
  let deleteButton = document.createElement("label");

  //classname
  item.className="item"
  infoWrap.className = "info-wrap";
  info.className = "info";
  itemNumber.className = "item-number";
  itemName.className = "item-name";
  totalPrice.className = "total-price";
  priceOutput.className = "price-output";
  removeWrap.className = "remove-wrap";
  deleteButton.classList.add("delete", "click-button");
 

  //innertext
  itemNumber.innerText = "#" + number;
  itemName.innerText = name;
  priceOutput.innerText = parseFloat(amount) * parseFloat(price);
  totalPrice.innerText = "$";
  deleteButton.innerText = "x";

  //apendchild
  item.appendChild(infoWrap);
  infoWrap.appendChild(info);
  infoWrap.appendChild(totalPrice);
  infoWrap.appendChild(removeWrap);
  info.appendChild(itemNumber);
  info.appendChild(itemName);
  totalPrice.appendChild(priceOutput);
  removeWrap.appendChild(deleteButton);

  console.log(item);
  return item;
}

//add items
const addItem = function() {
  console.log("Add task...");
  //Create a new list item with the text
  let listItem = createNewItemElement(idInput.value, nameInput.value, amountInput.value, priceInput.value);
  //Append listItem to itemsHolder
  itemsHolder.appendChild(listItem); 
  bindItemEvents(listItem);
  listItem.classList.add("fade-in");
  setTimeout(() => {
    countPrice();
  }, 500);
 
  //defaults
  idInput.value = "";   
  nameInput.value = "";
  amountInput.value = "";
  priceInput.value = "";
}
addButton.addEventListener("click", addItem);

//delete items
let deleteItem = function() {
    console.log("Delete task...");
    let listItem = this.parentNode.parentNode.parentNode;
    //subTotal.classList.add("fade-in");
    //tips.classList.add("fade-in");
    //total.classList.add("fade-in"); 
    listItem.classList.add("fade-out"); 
    setTimeout(() => {
      listItem.remove();
      countPrice();
    }, 500);     
}

let bindItemEvents = function(listItem) {
  console.log("Bind list item events");
  //select listItem's children
  let deleteButton = listItem.querySelector(".delete");
  let price = listItem.querySelector(".price-output").innerText;
  console.log(price);
  //bind deleteItem to delete button
  deleteButton.onclick = deleteItem;
}

for(let i = 0; i < itemsHolder.children.length; i++) {
  //bind events to list item's children
  bindItemEvents(itemsHolder.children[i]);
}

//Sum the price
let countPrice = function() {
  console.log('Counting the price');
  subTotal.innerHTML = 0;
  let priceOutputSum = itemsHolder.querySelectorAll('.price-output');
  for(let i = 0; i < priceOutputSum.length; i++) {
      subTotal.innerHTML = (parseFloat(priceOutputSum[i].innerHTML) + parseFloat(subTotal.innerHTML)).toFixed(2)
  }
  tips.innerHTML = (parseFloat(subTotal.innerHTML) * 0.1).toFixed(2);
  total.innerHTML = (parseFloat(subTotal.innerHTML) + parseFloat(tips.innerHTML)).toFixed(2);
  subTotal.classList.add("fade-in");
  tips.classList.add("fade-in");
  total.classList.add("fade-in");
  setTimeout(function(){
    subTotal.classList.remove('fade-in');
    tips.classList.remove("fade-in");
    total.classList.remove("fade-in");
  }, 700)
} 
countPrice();