import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";
import { controls2 } from "./elements.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
  sounds.buttonPressAudio.play();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
}

export function set() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}

export function addMinutes() {
  const currentValue = state.minutes;
  const minute = 5;
  const minutesToAdd = minute + currentValue;
  state.minutes = minutesToAdd;

  timer.updateDisplay();
}

export function subMinutes() {
  const currentValue = state.minutes;

  const minute = 5;

  if (currentValue < minute) {
    return;
  }

  const minutesToAdd = currentValue - minute;

  state.minutes = minutesToAdd;

  timer.updateDisplay();
}

export function soundTree() {
  state.IsSelected = controls2
    .querySelector(".ph-tree")
    .classList.toggle("selected");
  if (state.IsSelected) {
    sounds.treeSound.play();
    return;
  }
  sounds.treeSound.pause();
}

export function soundRain() {
  state.IsSelected = controls2
    .querySelector(".ph-cloud-snow")
    .classList.toggle("selected");
  if (state.IsSelected) {
    sounds.rainSound.play();
    return;
  }
  sounds.rainSound.pause();
}

export function soundCoffeeShop() {
  state.IsSelected = controls2
    .querySelector(".ph-storefront")
    .classList.toggle("selected");
  if (state.IsSelected) {
    sounds.coffeeSound.play();
    return;
  }
  sounds.coffeeSound.pause();
}

export function soundFireplace() {
  state.IsSelected = controls2
    .querySelector(".ph-campfire")
    .classList.toggle("selected");
  if (state.IsSelected) {
    sounds.fireSound.play();
    return;
  }
  sounds.fireSound.pause();
}
