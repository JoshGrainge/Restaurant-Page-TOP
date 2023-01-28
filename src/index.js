import { createTabMenu } from "./tabs";
import { createHomePage } from "./homePage";

const content = document.querySelector("#content");

createTabMenu(content);
createHomePage(content);
