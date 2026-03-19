
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
//---------------------------------------------------//

const form_card=document.querySelector(".form-card");
//console.log(form_card);
form_card.addEventListener('submit',(e)=>{
    e.preventDefault();
    let data={
        title: form_card["product-name"].value,
        price: form_card["price"].value,
        image: form_card["image-url"].value
    }
    //console.log(data);
    let Jsondata=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    xhr.open('POST','https://69adfd7fb50a169ec880ae28.mockapi.io/store/products')
    xhr.setRequestHeader('Content-Type',"application/json");
    xhr.send(Jsondata);
    xhr.onload=()=>{
        if(xhr.status===201){
            console.log("Done");
            
        }
        else{
            console.log("error");
        }
    }
    
})

