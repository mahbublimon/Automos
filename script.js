let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(item + " added to cart!");
}

function loadCart() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let cartList = document.getElementById("cart-items");
    let total = 0;

    cartList.innerHTML = "";
    cartItems.forEach(product => {
        cartList.innerHTML += `<li class="list-group-item">${product.item} - ${product.price} BDT</li>`;
        total += product.price;
    });

    document.getElementById("cart-total").innerText = total;
}

function checkout() {
    let total = document.getElementById("cart-total").innerText;
    window.location.href = `https://securepay.sslcommerz.com/?amount=${total}&currency=BDT`;
}

if (window.location.pathname.includes("cart.html")) {
    loadCart();
}

// Load Navbar & Footer
document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => document.getElementById("navbar").innerHTML = data);

    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
});