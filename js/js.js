// document.addEventListener("click", (e) => {
//   console.log(e.target);
// });

const logIn = document.querySelector("button.btn");
logIn.addEventListener("click", log);

let likes = document.querySelectorAll("button.btn.likes");
likes = Array.from(likes);
likes = likes.map((elem) => elem.addEventListener("click", like));

const addDef = document.querySelector(".btn.add");
addDef.addEventListener("click", addDefinition);

function log() {
  logIn.innerHTML === "LogIn"
    ? (logIn.innerHTML = "LogOut")
    : (logIn.innerHTML = "LogIn");
}

function like(e) {
  let count = +e.target.firstChild.textContent;
  // console.log(count);
  count++;
  e.target.firstChild.textContent = count;
  // console.log(count);
  alert(
    `${e.target.parentNode.childNodes[1].innerHTML} was liked ${e.target.firstChild.textContent}`
  );
}

function addDefinition() {
  const left = document.querySelector("section.left");
  left.firstElementChild.classList.remove("hidden");
  addDef.classList.add("hidden");
  console.log(left.firstElementChild);
}
