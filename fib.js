// Set the document title
document.title = "Dynamic Fibonacci Sequence in JavaScript";

// Create a red div in the body
let div = document.createElement("div");
div.setAttribute("class", "red shadowed stuff-box");
document.querySelector("body").appendChild(div);

let slider = document.createElement("INPUT");
slider.setAttribute("type", "range");
slider.setAttribute("max", "50");
slider.setAttribute("value", "25");

let text = document.createElement("p");
text.textContent = "Fib(" + slider.value + ")";
text.id = "text";
div.appendChild(text);

slider.oninput = function() {
  let replace = document.createElement("p");
  replace.id = "text";
  replace.textContent = "Fib(" + this.value + ")";
  let replace_nums = document.createElement("p");
  replace_nums.id = "nums";
  replace_nums.textContent = fib_string(slider.value);
  div.removeChild(document.getElementById("text"));
  div.removeChild(document.getElementById("nums"));
  div.insertBefore(replace, slider);
  div.appendChild(replace_nums);
};

div.appendChild(slider);

let nums_text = document.createElement("p");
nums_text.textContent = fib_string(slider.value);
nums_text.id = "nums";
div.appendChild(nums_text);

function fibonacci(num) {
  let a = 1,
    b = 0,
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

function fib_string(num) {
  let string = "1";
  for (i = 1; i <= num; i++) {
    string += ",\xa0\xa0\xa0\xa0  " + fibonacci(i).toString();
  }
  return string;
}
