let counter = 0;
let counterObject = 0;
const quantity = document.getElementById('containerWithQuantity');

function addObject(element){
    hashcode
    let box = document.getElementById("inventoryList");
    if(!box.contains(element)) {
        box.innerHTML += element.outerHTML;
    } else {
        box.innerHTML == counter; 
    }
    counter++;
   }

   
var object1 = 0;
var object2 = 0;
var object3 = 0;
var object4 = 0;
var object5 = 0;
var bagtest = 1;

function bag(){
    if (bagtest == 1) {
    bagtest--;
    document.getElementById('inventoryContainer').style.opacity = '0%';
    document.getElementById('containerWithQuantity').classList.remove('quantity');
    document.getElementById('quantityInInventory').innerHTML = "Antall i inventory: " + counter;
    }
    else {
    document.getElementById('inventoryContainer').style.opacity = '100%';
    document.getElementById('containerWithQuantity').classList.add('quantity');
    bagtest++;
    }
}

function hideInventory() {
    // var inventoryState = hidden;
    document.getElementById('inventoryContainer').style.opacity = '0%';
    document.getElementById('containerWithQuantity').classList.remove('quantity');
    document.getElementById('quantityInInventory').innerHTML = "Antall i inventory: " + counter;
    // updateView();
}
function showInventory() {
    document.getElementById('inventoryContainer').style.opacity = '100%';
    document.getElementById('containerWithQuantity').classList.add('quantity');

}
function addObject1() {
    object1++;
    document.getElementById('testtest').innerHTML = (`object1 = ${object1}`)
}
function removeObject1() {
    if (object1 === 1) {object1--;
    document.getElementById('testtest').innerHTML = ("")
    }
    else if (object1 === 0) {
    }
    else {
    object1--;
    document.getElementById('testtest').innerHTML = (`object1 = ${object1}`)
    }
}

function updateView() {
    // kan ha if funksjon, if object 1 =>0 load immage og vis counter til object
// quantity.innerHTML = /*HTML*/ `
// ${addObject()}
// `

}