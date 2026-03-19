//----------------- login جزء خاص بتخزين بيانات -------------------//


let outbtn = document.getElementById("outbtn");


if (outbtn) {
    outbtn.addEventListener("click", function () {
        // localStorage.removeItem("User_Email");
        // localStorage.removeItem("passwored");
        // localStorage.removeItem("User_Name");
        localStorage.clear();


        window.location.href = "../pages/login.html";
    });
}
//----------------------------------------//




const productsContainer = document.querySelector(".products-grid");



let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
        displayProducts(data);
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
        console.error("error:", xhr.status);
    }
};

xhr.open("GET", "https://69adfd7fb50a169ec880ae28.mockapi.io/store/products", true);
xhr.send();

function displayProducts(products) {

    productsContainer.innerHTML = "";

    for (let product of products) {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="card-img">
                <img src="${product.image}" alt="${product.title}" />
            </div>
            <div class="card-body">
                <p class="card-name">${product.title}</p>
                <p class="card-price">${product.price} <span>EGP</span></p>
                <div class="card-actions">
                    <a href="product-detail.html?id=${product.id}" class="btn btn-outline">View Details</a>
                    </div>
            </div>
        `;
        const New_btn = document.createElement("button");

        New_btn.className = "btn-danger";
        New_btn.textContent = "Delete";
        New_btn.addEventListener("click", () => {
            Delete_Element(product.id, card)
        })


        card.querySelector(".card-actions").append(New_btn);
        productsContainer.append(card);


    }

}
// delete elment

function Delete_Element(id, cardElement) {
    let New_xhr = new XMLHttpRequest();
    New_xhr.open("DELETE", `https://69adfd7fb50a169ec880ae28.mockapi.io/store/products/${id}`, true);

    New_xhr.onreadystatechange = function () {
        if (New_xhr.readyState === 4 && New_xhr.status === 200) {
            cardElement.remove();
            console.log("card has been deleted");

        };

        
    }
    New_xhr.send();
}


