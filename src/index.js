console.log("test");

const title = document.getElementById("title");
console.log(title);

const title2 = document.querySelector("#title");
console.log(title2);

const containers = document.getElementsByClassName("container");
console.log(containers);

const divEl = document.createElement("div");
const pEl = document.createElement("p");
const h2El = document.createElement("h2");
divEl.appendChild(pEl);
divEl.prepend(h2El);

console.log(divEl);

const buttonEl = document.createElement("button");
buttonEl.textContent = "ボタン";
const div1El = document.querySelector(".container");
div1El.appendChild(buttonEl);

const h1El = document.getElementById("title");
const bodyEl = document.querySelector("body");
bodyEl.removeChild(h1El);
