var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cart = getCart()
  setCart([...cart, { itemName: item, itemPrice: Math.floor(Math.random() * (100 - 1) + 1) }])
  return `${item} has been added to your cart.`
}

function itemToString(item) {
  return `${item.itemName} at $${item.itemPrice}`
}

function viewCart() {
  var cart = getCart()
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var msg = 'In your cart, you have '
  for (var i = 0; i < cart.length; i++) {
    if (i == 0) {
      msg += `${itemToString(cart[i])}`
    } else if (i + 1 === cart.length) {
      msg += `, and ${itemToString(cart[i])}`
    } else {
      msg += `, ${itemToString(cart[i])}`
    }
  }
  return msg + '.'
}

function total() {
  return getCart().reduce((sum, item) => sum + item.itemPrice)
}

function removeFromCart(item) {
  var cart = getCart()
  for (var i = 0; i < cart.length; i++) {
    if ( item === cart[i].itemName ) {
      return cart.splice(i, 0)
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  }
  var msg = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  setCart([])
  return msg
}
