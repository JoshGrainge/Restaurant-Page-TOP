function createMenuItem(item, parent) {
  console.log(item.toString());

  const menuItem = document.createElement("div");
  const thumbnail = document.createElement("img");
  const itemTextContainer = document.createElement("div");
  const itemTitle = document.createElement("h4");
  const priceSpan = document.createElement("span");
  const itemDescription = document.createElement("p");

  menuItem.classList.add("menu-item");
  itemTextContainer.classList.add("item-text-container");
  itemTitle.classList.add("item-title");
  priceSpan.classList.add("price");

  thumbnail.src = item.image;
  itemTitle.textContent = item.name;
  priceSpan.textContent = item.price;
  itemDescription.textContent = item.description;

  menuItem.appendChild(thumbnail);
  menuItem.appendChild(itemTextContainer);
  itemTextContainer.appendChild(itemTitle);
  itemTextContainer.appendChild(itemDescription);
  itemTitle.appendChild(priceSpan);

  parent.appendChild(menuItem);
}

import Items from "./menuItems.json";

export function createMenu(parent) {
  const menuTitle = document.createElement("h2");
  const menuItemContainer = document.createElement("div");

  menuTitle.textContent = "Menu";

  menuItemContainer.classList.add("menu-items-container");

  for (const item in Items) {
    createMenuItem(Items[item], menuItemContainer);
  }

  parent.appendChild(menuTitle);
  parent.appendChild(menuItemContainer);
}
