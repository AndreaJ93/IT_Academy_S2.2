// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'Cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart.
    // 2. Add found product to the cart array.
    for (let i = 0; i < products.length; i++) {
        if (id === products[i].id) {
            let productInCar = cart.find((prod) => prod.id === id);
            if (productInCar === undefined) {
                cart.push({...products[i], quantity: 1});
            } else {
                productInCar.quantity += 1;
            };
        }
    }

    //Change number to cart:
    totalQuantity = 0;

    for (let product of cart) {
        totalQuantity += product.quantity 
    }
    document.getElementById("count_product").innerHTML = totalQuantity;
    localStorage.setItem("quantity", totalQuantity);
    return cart;
}

// Exercise 2
function cleanCart() {
    cart = [];

    //Clean cart print:
    let cartListShoppingCart = document.getElementById('cart_list');
    cartListShoppingCart.innerHTML = '';

    //Change total to 0:
    document.getElementById("total_price").innerHTML = 0;

    //Change number to cart:
    document.getElementById("count_product").innerHTML = 0;
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        let price = cart[i].price;
        let quantity = cart[i].quantity;
        total += price * quantity;
    }
    localStorage.setItem("total", total);
    return total
}


// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let total = calculateTotal();
    let subtotalWithDiscount = total;
    let indexCookingOil = cart.findIndex((prod) => prod.id === 1);
    let indexCupcakeMixture = cart.findIndex((prod) => prod.id === 3);
    let cookingOilDiscount = 0;
    let cupcakeMixtureDiscount = 0;
    let cookingOilPrice = products[0].price;
    let cupcakeMixturePrice = products[2].price;

    
    if (indexCookingOil !== -1 && cart[indexCookingOil].quantity >= 3) {
        cookingOilDiscount = (cookingOilPrice * 0.20) * cart[indexCookingOil].quantity;
        cart[indexCookingOil].price = (cookingOilPrice * (1 - 0.20)).toFixed(2);
        subtotalWithDiscount -= cookingOilDiscount;
    } else if (indexCookingOil !== -1 && cart[indexCookingOil].quantity < 3){
        cart[indexCookingOil].price = cookingOilPrice;
    };
    
    if (indexCupcakeMixture !== -1 && cart[indexCupcakeMixture].quantity >= 10) {
        cupcakeMixtureDiscount = (cupcakeMixturePrice * 0.30) * cart[indexCupcakeMixture].quantity;
        cart[indexCupcakeMixture].price = (cupcakeMixturePrice * (1 - 0.30)).toFixed(2);
        subtotalWithDiscount -= cupcakeMixtureDiscount;
    } else if (indexCupcakeMixture !== -1 && cart[indexCupcakeMixture].quantity < 10) {
        cart[indexCupcakeMixture].price = cupcakeMixturePrice;
    };

    return subtotalWithDiscount;
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    applyPromotionsCart()
    let total = calculateTotal();

    let cartListShoppingCart = document.getElementById('cart_list');
    cartListShoppingCart.innerHTML = '';

    for (let i = 0; i < cart.length; i++) {
        let row = document.createElement('tr');

        let productName = document.createElement('th');
        productName.textContent = cart[i].name;

        let productPrice = document.createElement('td');
        productPrice.textContent = cart[i].price; 

        let productQuantity = document.createElement('td');
        productQuantity.textContent = cart[i].quantity; 

        let productTotal = document.createElement('td');
        productTotal.textContent = (cart[i].price * cart[i].quantity).toFixed(2);

        let removeButton = document.createElement('td');
        removeButton.innerHTML = `<button onclick='removeFromCart(${cart[i].id})' class='border border-0 bg-transparent'>  ─ </button>`

        row.appendChild(productName);
        row.appendChild(productPrice);
        row.appendChild(productQuantity);
        row.appendChild(productTotal);
        row.appendChild(removeButton);

        cartList = cartListShoppingCart.appendChild(row);  
    }

    document.getElementById("total_price").innerHTML = total.toFixed(2);
    
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    let product = cart.find((prod) => prod.id === id);
    let prodIndex = cart.findIndex((cart) => cart.id === id);

    if (product !== undefined && product.quantity === 1) {
        cart.splice(prodIndex, 1);
    } else if (product !== undefined && product.quantity > 1){
        cart[prodIndex].quantity -= 1  
    };

    applyPromotionsCart();
    printCart();

    // Change number to cart: 
    totalQuantity -= 1;
    document.getElementById("count_product").innerHTML = totalQuantity;
    localStorage.setItem("quantity", totalQuantity);

}


function open_modal() {
    printCart();
}