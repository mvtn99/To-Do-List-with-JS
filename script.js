"use strict";
const addItem = document.querySelector(".addBtn");
const list = document.querySelector("#myUL");
let remove = document.querySelectorAll(".remove");
let edit = document.querySelectorAll(".edit");
let check = document.querySelectorAll(".checkbox");
let storedValues = JSON.parse(window.localStorage.getItem("allItem"));
let allItems;

if (storedValues) {
  allItems = storedValues;
} else {
  allItems = [];
}

function getValues() {
  console.log(storedValues);
  if (storedValues) {
    for (let i = 0; i < storedValues.length; i++) {
      addTodo(storedValues[i]);
    }
  }
}
getValues();

const store = function () {
  window.localStorage.setItem("allItem", JSON.stringify(allItems));
};

function addTodo(text) {
  let listItem = document.createElement("li");
  let div1 = document.createElement("div");
  div1.classList.add("checkbox");
  let a1 = document.createElement("a");
  a1.classList.add("icons");
  let i1 = document.createElement("i");
  i1.classList = "far fa-square";
  a1.appendChild(i1);
  div1.appendChild(a1);
  let div2 = document.createElement("div");
  div2.classList.add("item");
  div2.innerHTML = text;
  let div3 = document.createElement("div");
  div3.classList.add("editInput");
  let input = document.createElement("input");
  input.classList.add("hidden");
  input.placeholder = "عنوان جدید";
  div3.appendChild(input);
  let div4 = document.createElement("div");
  div4.classList.add("edit");
  let a4 = document.createElement("a");
  a4.classList = "icons icons-left";
  let i4 = document.createElement("i");
  i4.classList = "fas fa-pen";
  a4.appendChild(i4);
  div4.appendChild(a4);
  let div5 = document.createElement("div");
  div5.classList.add("remove");
  let a5 = document.createElement("a");
  a5.classList = "icons icons-left";
  let i5 = document.createElement("i");
  i5.classList = "fas fa-trash-alt";
  a5.appendChild(i5);
  div5.appendChild(a5);
  listItem.append(div1, div2, div3, div4, div5);
  list.appendChild(listItem);
  remove = document.querySelectorAll(".remove");
  edit = document.querySelectorAll(".edit");
  check = document.querySelectorAll(".checkbox");

  for (let i = 0; i < edit.length; i++) {
    edit[i].onclick = function () {
      console.log(this);
      let list = this.parentElement;
      let inp = this.parentElement.querySelector("input");
      inp.classList.toggle("hidden");
      inp.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          let newName = inp.value;
          console.log(newName);
          newName && (list.querySelector(".item").innerHTML = newName);
          inp.classList.add("hidden");
          inp.value = "";
        }
      });
    };
  }
  for (let i = 0; i < check.length; i++) {
    check[i].onclick = function () {
      this.classList.toggle("active");
      let icon = this.querySelector("i");
      if (icon.classList.contains("fa-square")) {
        icon.classList = "fas fa-check";
      } else if (icon.classList.contains("fa-check")) {
        icon.classList = "far fa-square";
      }
    };
  }
}

addItem.addEventListener("click", function () {
  let text = document.querySelector("#myInput").value;
  allItems.push(text);
  store();
  addTodo(text);
  document.querySelector("#myInput").value = "";
});

document
  .querySelector("#myInput")
  .addEventListener("keypress", function (event) {
    let text = document.querySelector("#myInput").value;
    if (event.key === "Enter") {
      allItems.push(text);
      store();
      addTodo(text);
      document.querySelector("#myInput").value = "";
    }
  });

document.addEventListener("click", function (event) {
  if (event.srcElement.classList.contains("fa-trash-alt")) {
    list.removeChild(
      event.srcElement.parentElement.parentElement.parentElement
    );
  }
});

// for (let i = 0; i < remove.length; i++) {
//   remove[i].addEventListener("click", function () {
//     list.removeChild(this.parentElement);
//   });
// }
// for (let i = 0; i < remove.length; i++) {
//   edit[i].addEventListener("click", function () {
//     console.log(edit[i]);
//     let list = this.parentElement;
//     let inp = this.parentElement.querySelector("input");
//     inp.classList.toggle("hidden");
//     inp.addEventListener("keypress", function (event) {
//       if (event.key === "Enter") {
//         list.querySelector(".item").innerHTML = inp.value;
//         inp.classList.toggle("hidden");
//       }
//     });
//   });
// }
// for (let i = 0; i < remove.length; i++) {
//   check[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     let icon = this.querySelector("i");
//     if (icon.classList.contains("fa-square")) {
//       icon.classList = "fas fa-check";
//     } else if (icon.classList.contains("fa-check")) {
//       icon.classList = "far fa-square";
//     }
//   });
// }
// for (let i = 0; i < remove.length; i++) {
//   remove[i].addEventListener("click", function () {
//     list.removeChild(this.parentElement);
//   });
//   edit[i].addEventListener("click", function () {
//     let list = this.parentElement;
//     let inp = this.parentElement.querySelector("input");
//     inp.classList.toggle("hidden");
//     inp.addEventListener("keydown", function (event) {
//       if (event.key === "Enter") {
//         list.querySelector(".item").innerHTML = inp.value;
//         inp.value = "";
//         inp.classList.toggle("hidden");
//       }
//     });
//   });
// }
