const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

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
  todoForm.classList.remove(HIDDEN_CLASS);
  todoList.classList.remove(HIDDEN_CLASS);
  greeting.classList.remove(HIDDEN_CLASS);

  const date = new Date();
  let greetingExpression = "Good ";

  if(date.getHours() >= 6 && date.getHours() < 10){
    greetingExpression += "morning, ";
  } else if(date.getHours() >= 12 && date.getHours() < 17) {
    greetingExpression += "afternoon, ";
  } else if(date.getHours() >= 17 && date.getHours() < 21) {
    greetingExpression += "evening, ";
  } else if(date.getHours() >= 21 && date.getHours() < 24){
    greetingExpression += "night, ";
  } else {
    greetingExpression = "Hello, ";
  }
  greeting.innerText = greetingExpression + username + "!";
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}