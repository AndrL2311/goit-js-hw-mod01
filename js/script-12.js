function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line

const message = `You ordered droids worth ${orderedQuantity*pricePerDroid+deliveryFee} redits. Delivery (${deliveryFee} credits) is included in total price.`;

  // Change code above this line
    return message;
}

makeOrderMessage(2, 100, 50);

  console.log(message); 