// document.addEventListener("click", (e) => {
//   console.log(e.target);
//   like(e.target);
// });

const logIn = document.querySelector("button.btn");
logIn.addEventListener("click", log);
let likes = document.querySelector("span.like");
likes.addEventListener("click", like);

function log() {
  logIn.innerHTML === "LogIn"
    ? (logIn.innerHTML = "LogOut")
    : (logIn.innerHTML = "LogIn");
}

function like(e) {
  console.log(e);
  console.log("hi");
}
// function like(e) {
//
//   let count = +e.target.firstChild.textContent;
//   console.log(count);
//   count++;
//   e.target.firstChild.textContent = count;
//   console.log(count);
// }

// function like(elem) {
//   let count = +elem.firstChild.textContent;
//   count++;
//   elem.firstChild.textContent = count;
//   console.log(count);
// }
