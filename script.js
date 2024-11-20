let counter = 0;
const elementCounters = {};
let arrayInventory = [];
const counterObject = 0;
const quantity = document.getElementById('containerWithQuantity');
const box = document.getElementById("inventoryList");

function addObject(element){
    const elementId = element.elementId; 
    if(!arrayInventory.includes(elementId)){
        arrayInventory.map(element, counterObject);
        counterObject++;
    } else {
       arrayInventory.push(element);
        console.log(arrayInventory);
    }
}
// function addObject11(element){
// const elementId = element.elementId;  
//   if(elementCounters[elementId]){
//     const existingElement = box.querySelector(elementId);
//     existingElement.innerHTML += `${counterObject++}`; 
//   } else {
//     const newInInventory = element.outerHTML;
//     box.innerHTML += newInInventory;  
//     elementCounters[elementId]++;
//   }
// }
 
   
var object1 = 0;
var object2 = 0;
var object3 = 0;
var object4 = 0;
var object5 = 0;
var bagstate = 1;

function bag(){
    if (bagstate == 1) {
    bagstate--;
    document.getElementById('inventoryContainer').style.opacity = '0%';
    document.getElementById('containerWithQuantity').classList.remove('quantity');
    document.getElementById('quantityInInventory').innerHTML = "Antall i inventory: " + counter;
    }
    else {
    document.getElementById('inventoryContainer').style.opacity = '100%';
    document.getElementById('containerWithQuantity').classList.add('quantity');
    bagstate++;
    }
}
function addObject1() {
    object1++;
    updateView();
}
function removeObject1() {
    if (object1 === 0) {
    }
    else if (object1 === 1) {
    object1--;
    document.getElementById('item1div').remove();
    }
    else {
    object1--;
    updateView();
    }
}
const returnId = document.getElementById("mainInventoryDiv");
function updateView() {
    returnId.innerHTML = /*HTML*/ `
     <div onclick="removeObject1()" id="item1div">
      <img id="inventoryImgs" src="https://wow.zamimg.com/images/wow/icons/large/inv_misc_bag_08.jpg">
      <span> name </span>
      <span>${object1}</span>
     </div>
     <br>
    `;
}