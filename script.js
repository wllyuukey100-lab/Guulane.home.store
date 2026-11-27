let cart = [];

let total = 0;

// ADD TO CART

function addToCart(product, price) {

cart.push({
    name: product,
    price: price
});

total += price;

updateCart();

alert(product + " added to your cart!");

}

// UPDATE CART

function updateCart() {

let cartItems = document.getElementById("cart-items");

let cartCount = document.getElementById("cart-count");

let totalDisplay = document.getElementById("total");

cartItems.innerHTML = "";

cart.forEach(function(item, index) {

    cartItems.innerHTML += `
        <p>
            ${item.name} - $${item.price}
            <button onclick="removeItem(${index})">
                Remove
            </button>
        </p>
    `;

});

if (cart.length === 0) {
    cartItems.innerHTML = "Your cart is empty.";
}

cartCount.innerText = cart.length;

totalDisplay.innerText = total;

}

// REMOVE ITEM

function removeItem(index) {

total -= cart[index].price;

cart.splice(index, 1);

updateCart();

}

// SEARCH PRODUCTS

function searchProducts() {

let search = document
    .getElementById("search")
    .value.toLowerCase();

let products = document.querySelectorAll(".product");

products.forEach(function(product) {

    let name = product.querySelector("h3")
        .innerText.toLowerCase();

    product.style.display =
        name.includes(search) ? "block" : "none";

});

}

// WHATSAPP CHECKOUT

function checkout() {

if (cart.length === 0) {
    alert("Your shopping cart is empty!");
    return;
}

let message = "Hello Guulane Home Store! I want to order:\n\n";

cart.forEach(function(item) {
    message += item.name + " - $" + item.price + "\n";
});

message += "\nTotal: $" + total;

let whatsappURL =
    "https://wa.me/252614495294?text=" +
    encodeURIComponent(message);

window.open(whatsappURL, "_blank");

}