let cart = JSON.parse(localStorage.getItem("cart")) || [];

let items_div = document.getElementById("checkout_items");
let total_div = document.getElementById("total_price");

function displayCheckout() {
    items_div.innerHTML = "";

    let total = 0;

    cart.forEach((item) => {
        items_div.innerHTML += `
            <div>
                <h4>${item.name}</h4>
                <p>Price: ${item.price || 0} EGP</p>
            </div>
            <hr>
        `;

        total += item.price || 0;
    });

    total_div.innerHTML = "Total Price: " + total + " EGP";
}

displayCheckout();

function placeOrder() {

    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;

    // Validation
    if (!name || !address || !phone) {
        alert("Please fill all fields");
        return;
    }

    if (phone.length != 11) {
        alert("Phone must be 11 digits");
        return;
    }

    // Clear cart
    localStorage.removeItem("cart");

    // Show success message
    alert("Order placed successfully !");

    // Redirect to products page
    window.location.href = "products.html";
}