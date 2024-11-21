let counter = 0;
const inventoryMap = new Map();

function addObject(element) {
    const objectId = element.id;

    if (inventoryMap.has(objectId)) {
        inventoryMap.set(objectId, inventoryMap.get(objectId) + 1);
        document.getElementById(`count-${objectId}`).textContent = inventoryMap.get(objectId);
    } else {
        inventoryMap.set(objectId, 1);

    const inventoryList = document.getElementById('inventoryList');
    const newItem = document.createElement('li');
    newItem.id = `item-${objectId}`;
    newItem.innerHTML = /*HTML*/`
    <img src="${element.src}" alt="${element.alt}" class="inventoryImgs" onclick="removeObject('${objectId}')"/>
    <span>${element.alt}: <span id="count-${objectId}">1</span></span>
    `;
        inventoryList.appendChild(newItem);
}
    counter++;
    document.getElementById('quantityInInventory').textContent = `Number of objects: ${counter}`;
}

function removeObject(elementId){
    if(inventoryMap.has(elementId)){
        const currentCount = inventoryMap.get(elementId);

        if(currentCount > 1){
            inventoryMap.set(elementId, currentCount -1);
            document.getElementById(`count-${elementId}`).textContent = inventoryMap.get(elementId);
            
        } else {
            inventoryMap.delete(elementId);

            const itemToRemove = document.getElementById(`item-${elementId}`);
            if(itemToRemove){
                itemToRemove.remove();
            }
        }
        counter--;
        document.getElementById('quantityInInventory').textContent = `Total objects in inventory: ${counter}`;
    }
}


function toggleInventoryView(){
    // const inventoryList = document.getElementById('inventoryList');
    // inventoryList.innerHTML = '';

    // inventoryMap.forEach((count, objectId) => {
    //     const element = document.getElementById(objectId);
    //     const newItem = document.createElement('li');
    //     newItem.innerHTML = /*HTML*/ `
    //     <img src="${element.src}" alt="${element.alt}" class="inventoryImgs"/>
    //     <span>${element.alt}: ${count}</span>
    //     `;
    //     inventoryList.appendChild(newItem);
    // });
    const inventoryContainer = document.getElementById('inventoryContainer');
    const quantityContainer = document.getElementById('containerWithQuantity');
    inventoryContainer.classList.toggle('hidden');
    quantityContainer.classList.toggle('hidden');
}
document.getElementById('inventoryContainer').classList.remove('hidden');
document.getElementById('containerWithQuantity').classList.add('hidden');