const hours = document.querySelector(".Hours");
const minutes = document.querySelector(".Minutes");
const seconds = document.querySelector(".Seconds");
const timeStamp = document.querySelector(".timeStamp");


setInterval(() => {
    let date = new Date();
    let formattedHours = date.getHours() % 12 || 12;
    hours.innerText = String(formattedHours).padStart(2,'0');
    minutes.innerText = String(date.getMinutes()).padStart(2,'0');
    seconds.innerText = String(date.getSeconds()).padStart(2,'0');
    timeStamp.innerText = (date.getHours() >= 12) ? "PM" : "AM";
},1000);


const dark = document.querySelector(".dark");
const body = document.body;
const timeCircle = document.querySelector(".timeCircle");
const modeImg = document.querySelector(".moon");

dark.addEventListener("click", () => {
    if(dark.className === "dark"){
        body.style.backgroundColor = "black";
        body.animate(
            [{ opacity: 0 }, { opacity: 1 }], 
            { duration: 2000, easing: "ease-in-out", fill: "backwards" }
        );
          
        timeCircle.classList.toggle("shadow-sky-200");
        body.style.color = "white";
        dark.classList.toggle("dark");
        dark.classList.toggle("light");
        modeImg.setAttribute("src","./Images/sunAnimated.svg");
        modeImg.classList.toggle("shadow-sky-300");
        modeImg.classList.toggle("shadow-sm");
    }else{
        body.style.backgroundColor = "white";
        body.animate(
            [{ opacity: 0 }, { opacity: 1 }], 
            { duration: 2000, easing: "ease-in-out", fill: "backwards" }
        );
        timeCircle.classList.toggle("shadow-sky-200");
        body.style.color = "black";
        dark.classList.toggle("dark");
        dark.classList.toggle("light");
        modeImg.setAttribute("src","./Images/cutmoon.svg");
        modeImg.classList.toggle("shadow-sm");
    }

});


