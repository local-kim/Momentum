const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault(); // 새로고침 방지
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASS);
  paintGreetings(username);
}

function paintGreetings(username){
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}