const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target.id);
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id;
        }

        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id;
        }

        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
        }

        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
        }
    })
})

function createToaster(config) {
    return function(notification) {
        let div = document.createElement("div");

        // Apply dynamic classes based on theme and position
        div.className = `fixed px-4 py-2 m-4 rounded shadow-lg transition-all duration-300 
            ${config.positionX === "left" ? "left-0" : "right-0"}
            ${config.positionY === "top" ? "top-0" : "bottom-0"}
            ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`;

        div.textContent = notification;

        // Append to body
        document.body.appendChild(div);

        // Auto-remove after duration (convert seconds to ms)
        setTimeout(() => {
            document.body.removeChild(div);
        }, (config.duration || 3) * 1000);  // Default to 3 seconds if not provided
    };
}

// Usage:
let toaster = createToaster({
    positionX: "left",
    positionY: "bottom",
    theme: "light",
    duration: 3
});

toaster("please select colour");
