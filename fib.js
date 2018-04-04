// Set the document title
document.title = "Dynamic Fibonacci Sequence in JavaScript";

// Create a red div in the body
var div = document.createElement("div");
div.setAttribute("class", "red shadowed stuff-box");
document.querySelector("body").appendChild(div);

// Add instructions
// var para = document.createElement("p");
// para.textContent =
//   "Write the code necessary to add a <form>, an <input> with an onchange attribute, as well as the functions to compute the Fibonacci sequence and output each number as an HTML element";
// div.appendChild(para);
var slider = document.createElement("INPUT");
slider.setAttribute("type", "range");
div.appendChild(slider);

var text = document.createElement("p");
text.textContent = "Fib(" + slider.value + ")";
div.appendChild(text);

slider.oninput = function() {
  text.textContent = "Fib(" + this.value + ")";
};
