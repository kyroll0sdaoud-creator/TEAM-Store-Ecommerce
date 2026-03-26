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
let cart = JSON.parse(localStorage.getItem("cart")) || [];  // this form json to array 
let parent_div = document.querySelector(".cart_div");

function desplay() {
   parent_div.innerHTML = "";
   cart.forEach((element) => {
      parent_div.innerHTML += `
         <div id="one_cart">
            <img src="${element.img}" id="cart_img">
            <div>
               <h2 id="cart_title">${element.name}</h2>
               <button onclick='delete_by_name("${element.name}")' class="btn btn-warning">Delete</button>
            </div>
         </div>
         <hr>
      `;
   });
}

// if I click will give the name of element to this function
window.delete_by_name = function (name) {

   for (let i = 0; i < cart.length; i++) {
      // if name of i == name of my button
      if (cart[i].name === name) {
         cart.splice(i, 1);
         break;
      }
   }
   localStorage.setItem("cart", JSON.stringify(cart));
   // this for array to -> json (string)
   desplay();
}

desplay();