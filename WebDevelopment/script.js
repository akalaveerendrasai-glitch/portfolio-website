// ===============================
// SHOPPING CART
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cart-count");

function updateCartCount() {
    cartCount.textContent = cart.length;
    localStorage.setItem("cart", JSON.stringify(cart));
}

updateCartCount();

// ===============================
// ADD TO CART
// ===============================

const buttons = document.querySelectorAll(".card button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const card = button.parentElement;

        const name = card.querySelector("h3").innerText;
        const price = card.querySelector("p").innerText;
        const image = card.querySelector("img").src;

        cart.push({
            name,
            price,
            image
        });

        updateCartCount();

        alert(name + " added to cart!");

    });

});

// ===============================
// SEARCH PRODUCTS
// ===============================

const searchBox = document.createElement("input");

searchBox.placeholder = "Search Products...";

searchBox.style.width = "300px";
searchBox.style.padding = "12px";
searchBox.style.margin = "30px auto";
searchBox.style.display = "block";

const products = document.querySelector(".products");

products.insertBefore(searchBox, products.children[1]);

searchBox.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {

        const text = card.querySelector("h3").innerText.toLowerCase();

        if(text.includes(value)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

});

// ===============================
// DARK MODE
// ===============================

const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🌙 Dark Mode";

darkBtn.style.position = "fixed";
darkBtn.style.bottom = "20px";
darkBtn.style.right = "20px";
darkBtn.style.padding = "15px";
darkBtn.style.background = "#111827";
darkBtn.style.color = "white";
darkBtn.style.border = "none";
darkBtn.style.borderRadius = "10px";
darkBtn.style.cursor = "pointer";

document.body.appendChild(darkBtn);

let dark = false;

darkBtn.onclick = () => {

    dark = !dark;

    if(dark){

        document.body.style.background="#111827";
        document.body.style.color="white";

    }

    else{

        document.body.style.background="#f5f5f5";
        document.body.style.color="#333";

    }

};

// ===============================
// CONTACT FORM
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});

// ===============================
// SCROLL TO TOP
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.style.position = "fixed";
topBtn.style.left = "20px";
topBtn.style.bottom = "20px";
topBtn.style.padding = "15px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.background = "#2563eb";
topBtn.style.color = "white";

document.body.appendChild(topBtn);

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};