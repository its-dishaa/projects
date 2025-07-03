document.addEventListener("DOMContentLoaded",()=>{
    const products=[
        {id:1,name:"product 1",price: 29.9},
        {id:2, name:"product 2",price:52.6},
        {id:3, name:"product 3",price: 45.6},
        {id:4,name:"Product 4",price: 50.2}
    ];
    const cart=[]


    const productList=document.getElementById("product-list");
    const cartItems=document.getElementById("cart-items");
    const emptyCarMessage=document.getElementById("empty-cart");
    const cartTotalMessage=document.getElementById("cart-total");
    const totalPriceDisplay=document.getElementById("total-price");
    const checkOutBtn=document.getElementById("checkout-btn");
    const removeBtn=document.getElementById("remove-btn");
    
    products.forEach((product)=>{
        const productDiv=document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML=`
        <span>${product.name}-$${product.price.toFixed(2)}</span>
        <button data-id="${product.id}">Add to cart</button>
        `;
        productList.appendChild(productDiv);
    });
  
    productList.addEventListener("click",(e)=>{
        if(e.target.tagName==="BUTTON"){
            const productId=parseInt(e.target.getAttribute("data-id"));
            const product=products.find((p)=>p.id===productId);
            addToCart(product);
        }

    });

    function addToCart(product){
        cart.push(product);
        console.log(cart);
        renderCart();
    }



function renderCart() {
    cartItems.innerText = "";
    let totalPrice = 0;

    if (cart.length > 0) {
        emptyCarMessage.classList.add("hidden");
        cartTotalMessage.classList.remove("hidden");

        cart.forEach((item, index) => {
            totalPrice += item.price;

            const cartItem = document.createElement('div');
            cartItem.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)}
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;

            cartItems.appendChild(cartItem);
        });

        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;

        // Attach event listeners for each remove button
        document.querySelectorAll(".remove-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const index = parseInt(btn.getAttribute("data-index"));
                cart.splice(index, 1);
                renderCart();
            });
        });

    } else {
        emptyCarMessage.classList.remove("hidden");
        cartTotalMessage.classList.add("hidden");
    }
}


removeBtn.addEventListener("click", () => {
    if (cart.length > 0) {
        cart.pop();  // Removes last item
        renderCart();
    } else {
        alert("Cart is already empty");
    }
});

checkOutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout successful!");
    renderCart();
});

});


