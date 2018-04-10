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

div.appendChild(slider);

var cache = [0, 1];

let updateTopBox = function() {
  let replace = document.createElement("p");
  replace.id = "text";
  replace.textContent = "Fib(" + slider.value + ")";
  let replace_nums = document.createElement("p");
  replace_nums.id = "nums";
  replace_nums.textContent = fib_string(slider.value);
  if (document.getElementById("text") != undefined) {
    div.removeChild(document.getElementById("text"));
  }
  if (document.getElementById("nums") != undefined) {
    div.removeChild(document.getElementById("nums"));
  }
  div.insertBefore(replace, slider);
  div.appendChild(replace_nums);
};

slider.oninput = updateTopBox;
updateTopBox();

let div2 = document.createElement("div");
div2.setAttribute("class", "red shadowed stuff-box");
document.querySelector("body").appendChild(div2);

let slider2 = document.createElement("INPUT");
slider2.setAttribute("type", "range");
slider2.setAttribute("max", "11");
slider2.setAttribute("value", "4");

div2.appendChild(slider2);

let updateBottomBox = function() {
  let replace = document.createElement("p");
  replace.id = "text2";
  replace.textContent = "Fib(" + slider2.value + ")";
  let replace_nums = document.createElement("div");
  replace_nums.setAttribute("class", "fib");
  replace_nums.id = "nums2";
  // let complete_tree = fibonacci2(slider2.value);
  // console.log(complete_tree);
  if (document.getElementById("text2") != undefined) {
    div2.removeChild(document.getElementById("text2"));
  }
  if (document.getElementById("nums2")) {
    div2.removeChild(document.getElementById("nums2"));
  }

  // for (i = 0; i < slider2.value * 2 + 1; i++) {
  //   if (i === 0) {
  //     replace_nums.textContent = complete_tree[0];
  //   }
  //   j = i;
  //   while (complete_tree[2 * j] != undefined) {
  //     let temp = document.createElement("div");
  //     temp.setAttribute("class", "fib-left");
  //     temp.textContent = complete_tree[2 * j];
  //     j *= 2;
  //   }
  //   j = i;
  //   while (complete_tree[2 * i + 1] != undefined) {
  //     let temp = document.createElement("div");
  //     temp.setAttribute("class", "fib-right");
  //     temp.textContent = complete_tree[j * 2 + 1];
  //     j = j * 2 + 1;
  //   }
  // }

  div2.insertBefore(replace, slider2);
  div2.appendChild(replace_nums);
};

slider2.oninput = updateBottomBox;
updateBottomBox();

function fibonacci(num) {
  if (cache[num]) {
    return;
  }
  for (let i = cache.length; i <= num; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }
}

function fib_string(num) {
  fibonacci(num);
  return cache.slice(0, num + 1).join(",\xa0\xa0\xa0\xa0  ");
}
