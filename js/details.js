
//----------------- login جزء خاص بتخزين بيانات -------------------//

let outbtn = document.getElementById("outbtn");

if (outbtn) {
    outbtn.addEventListener("click", () => {
        // localStorage.removeItem("User_Email");
        // localStorage.removeItem("passwored");
        // localStorage.removeItem("User_Name");
        localStorage.clear();

        window.location.href = "../pages/login.html";
    });
}
//-----------------------------------------------------------------------//
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

let xhr = new XMLHttpRequest();
let myProduct;
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {

        let data = JSON.parse(xhr.responseText);
        console.log(data);


        for (let i = 0; i < data.length; i++) {
            if (data[i].id == productId) {
                myProduct = data[i];
                document.getElementById("product-title").textContent = myProduct.title;
                document.getElementById("product-image").src = myProduct.image;
                document.getElementById("product-price").textContent = myProduct.price;
                document.getElementById("product-desc").textContent = myProduct.description;
                document.getElementById("product-category").textContent = myProduct.category;
                document.getElementById("breadcrumb-name").textContent = myProduct.title;
                const featuresList = document.querySelector(".product-features ul");
                featuresList.innerHTML = "";
                for (const feature of myProduct.key_features) {
                    featuresList.innerHTML += `<li>${feature}</li>`;
                }

                // related
                const relatedContainer = document.getElementById("related-products");
                let count = 0;

                for (let item of data) {

                    if (item.category === myProduct.category && item.id !== myProduct.id && count < 4) {
                        relatedContainer.innerHTML += `
            <div class="card">
                <div class="card-img">
                    <img src="${item.image}" alt="${item.title}" />
                </div>
                <div class="card-body">
                    <p class="card-name">${item.title}</p>
                    <p class="card-price">${item.price} <span>EGP</span></p>
                    <div class="card-actions">
                        <a href="product-detail.html?id=${item.id}" class="btn btn-outline">View Details</a>
                    </div>
                </div>
            </div>
        `;
                        count++;
                    }
                };


                break;
            }


        }

    }
}
xhr.open("GET", "https://69adfd7fb50a169ec880ae28.mockapi.io/store/products", true);
xhr.send();


//---------------------------

const counter = document.getElementById("quantity");
const btn_plus = document.getElementById("qty-plus");
const btn_minus = document.getElementById("qty-minus");
const alert = document.getElementById("alert");



btn_plus.addEventListener("click", () => {
    counter.value = parseInt(counter.value) + 1;
});

btn_minus.addEventListener("click", () => {
    if (counter.value > 1) {
        counter.value = parseInt(counter.value) - 1;
    }

});

let user = localStorage.getItem("User_Email");
let pass = localStorage.getItem("passwored");
// add to cart
const add_to_cart = document.getElementById("brn-add-to-cart");
add_to_cart.addEventListener('click', (e) => {
    e.preventDefault();
    if (!user) {
        window.location.href = "../pages/login.html";
    }

    else {
        let product = {
            img: `${myProduct.image}`,
            name: `${myProduct.title}`
        };
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));

        //localStorage.clear()
        alert.style.display = 'block';
    }

})


