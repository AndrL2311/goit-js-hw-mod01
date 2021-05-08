// Change code below this line
const pricePerDroid = 800;
const orderQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
console.log(message);