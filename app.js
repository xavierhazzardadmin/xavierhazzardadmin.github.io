//  main holds all the content
const main = document.querySelector(
    "main"
);

const copy = document.querySelector(
    "#copy"
);

//  main fades in 400ms after page load
window.onload = () => {
    setTimeout(() => {
        main.classList.add("fadeIn");
    }, 300);

    console.log("We have loaded");
};

//  controls year dynamically

var dynamic_year = new Date().getFullYear();

//This doesn't work
copy.innerText = dynamic_year;
