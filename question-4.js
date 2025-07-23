// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
// let newArray = [{name:0,price:0,quantity:0}];
// function checkInventory(inventory){
//   let inventoryName=0;
//   let inventoryPrice=0;
//   let inventoryQty=0;
//   for (let i=0;i<inventory.length;i++){
//     if (inventoryQty>inventory[i].quantity ||inventoryQty===0){
//       inventoryName = inventory[i].name;
//       inventoryPrice = inventory[i].price;
//       inventoryQty = inventory[i].quantity;
//     }
// } 
// return {name:inventoryName,price:inventoryPrice,quantity:inventoryQty};
// }
// newArray = checkInventory(inventory);
// console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${newArray.name} ซึ่งมี ${(newArray.quantity)} ชิ้น`);

function checkInventory(inventory){
  let newArray=[];
  let inventoryQty=0;
  for (let i=0;i<inventory.length;i++){
    if (inventoryQty>inventory[i].quantity ||inventoryQty===0){
      inventoryQty = inventory[i].quantity;
      newArray = inventory[i]
    }
} 
return newArray;
}
let minQtyInventory = checkInventory(inventory);
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minQtyInventory.name} ซึ่งมี ${(minQtyInventory.quantity)} ชิ้น`);