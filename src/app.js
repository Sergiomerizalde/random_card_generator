/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let icons = ["♦", "♥", "♠", "♣"];
  let suite = Math.floor(Math.random() * icons.length);

  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let randomnumber = Math.floor(Math.random() * number.length);

  let color = icons[suite] === "♥" || icons[suite] === "♠" ? "red" : "black";

  document.querySelector("#addsuite").innerHTML = icons[suite];
  document.querySelector("#addsuite").style.color = color;
  document.querySelector("#addsuite2").innerHTML = icons[suite];
  document.querySelector("#addsuite2").style.color = color;
  document.querySelector("#addnumber").innerHTML = number[randomnumber];
};
