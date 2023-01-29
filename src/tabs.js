import { createHomePage } from "./homePage";
import { createMenu } from "./menuPage";

const content = document.querySelector("#content");

function homeTabClick() {
  clearAllChildren();
  createTabMenu(content);
  createHomePage(content);
  console.log("Created home page");
}

function menuTabClick() {
  clearAllChildren();
  createTabMenu(content);
  createMenu(content);
  console.log("Created MENU page");
}

function infoTabClick() {
  clearAllChildren();
  createTabMenu(content);
}

function clearAllChildren() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

export function createTabMenu(parent) {
  const container = document.createElement("div");
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const infoBtn = document.createElement("button");

  container.id = "tabs-container";

  homeBtn.textContent = "Home";
  menuBtn.textContent = "Menu";
  infoBtn.textContent = "Info";

  homeBtn.addEventListener("click", homeTabClick);
  menuBtn.addEventListener("click", menuTabClick);
  infoBtn.addEventListener("click", infoTabClick);

  container.appendChild(homeBtn);
  container.appendChild(menuBtn);
  container.appendChild(infoBtn);

  parent.appendChild(container);
}
