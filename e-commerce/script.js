document.addEventListener("DOMContentLoaded",()=>{
    const products=[
        {id:1,name:"product 1",price: 29.9},
        {id:2, name:"product 2",price:52.6},
        {id:3, name:"product 3",price: 45.6},
    ];
    const cart=[]


    const productList=document.getElementById("product-list");
    const cartItems=document.getElementById("cart-items");
    const emptyCarMessage=document.getElementById("empty-cart");
    const cartTotalMessage=document.getElementById("cart-total");
    const totalPriceDisplay=document.getElementById("total-price");
    const checkOutBtn=document.getElementById("checkout-btn");
    
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
    }


});

