/*
    Task # 8
    Create Default parameter function of handloom shop which by default has 10% discount on each item, 
    also they offer total 20%discount during sale on MRP price. Display the discount price & Total selling price
*/
function hanloomShop(mrp_price:number,discount:number=10){
    console.log(`You have ${discount}% discount.`); //default 10 %
    console.log(`Your total Amount  = ${mrp_price}`); //undefined
    console.log(`Save Amount        = ${(mrp_price*(discount/100))}`); 
    console.log(`Final Total Amount = ${(mrp_price)-(mrp_price*(discount/100))}`)
}
console.log("Regulare Billing Systeam ")
hanloomShop(100);


console.log("\nDuring sale Billing System ")
hanloomShop(100,20);
