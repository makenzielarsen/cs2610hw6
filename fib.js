// Set the document title
document.title = "Dynamic Fibonacci Sequence in JavaScript";

// Create a red div in the body
var div = document.createElement("div");
div.setAttribute("class", "red shadowed stuff-box");
document.querySelector("body").appendChild(div);

var slider = document.createElement("INPUT");
slider.setAttribute("type", "range");
slider.setAttribute("max", "50");
slider.setAttribute("value", "25");

var text = document.createElement("p");
text.textContent = "Fib(" + slider.value + ")";
div.appendChild(text);

slider.oninput = function() {
  var replace = document.createElement("p");
  text.textContent = "Fib(" + this.value + ")";
  nums_text.textContent = fib_string(slider.value);

  // var replace = document.createElement("p");
  // var replace_nums = document.createElement("p");
  // replace.textContent = "Fib(" + this.value + ")";
  // replace_nums.textContent = fib_string(slider.value);
  // div.removeChild(text);
  // div.removeChild(slider);
  // div.removeChild(nums_text);
  // div.appendChild(replace);
  // div.appendChild(slider);
  // div.appendChild(replace_nums);
};

div.appendChild(slider);

var nums_text = document.createElement("p");
nums_text.textContent = fib_string(slider.value);
div.appendChild(nums_text);

function fibonacci(num) {
  var a = 1,
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
  var string = "1";
  for (i = 1; i <= num; i++) {
    string += ",\xa0\xa0\xa0\xa0  " + fibonacci(i).toString();
  }
  return string;
}
