/** @format */

import "./styles.sass";
import img from "./photo.png";

function titleComponent() {
  const elemH1 = document.createElement("h1");

  elemH1.innerHTML = "Module Webepack";
  elemH1.classList.add("title");

  return elemH1;
}

function imageCoponent() {
  const elemImg = new Image(980, 800);
  elemImg.src = img;

  return elemImg;
}

function effectPhoto() {
  const effect = document.createElement("div");
  effect.classList.add("effectPhoto");
  effect.innerHTML = `<p>Hover over the image to see it</p>`;

  return effect;
}

function rootStyle() {
  const elemRoot = document.getElementById("root");
  elemRoot.classList.add("container");

  elemRoot.appendChild(titleComponent());
  elemRoot.appendChild(imageCoponent());
  elemRoot.appendChild(effectPhoto());
}

rootStyle();
