var copy = document.querySelector("#copy");
var dynamic_year = new Date().getFullYear() - 1;

//This doesn't work
copy.innerText = dynamic_year;
