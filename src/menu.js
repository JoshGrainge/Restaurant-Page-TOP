export function createMenu(parent) {
  // Create elements
  const menuTitle = document.createElement("h1");
  const card = document.createElement("div");
  const cardTitle = document.createElement("h2");
  const line = document.createElement("hr");
  const cardText = document.createElement("p");
  const span = document.createElement("span");
  const orderBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  // Set element classes
  menuTitle.classList.add("title");
  card.classList.add("card");
  cardTitle.classList.add("card-title");
  cardText.classList.add("card-text");
  span.classList.add("button-section");

  // Set text content
  menuTitle.textContent = "Restaurant Title";
  cardTitle.textContent = "The best diner in all of New Jersey";
  cardText.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed. Suspendisse interdum consectetur libero id. Tellus in metus vulputate eu scelerisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna nunc id cursus metus aliquam eleifend mi in. Eu lobortis elementum nibh tellus. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed id semper. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Tempus quam pellentesque nec nam. Interdum velit laoreet id donec ultrices. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Molestie nunc non blandit massa. Diam ut venenatis tellus in metus vulputate eu. Luctus accumsan tortor posuere ac ut consequat semper. Mattis enim ut tellus elementum sagittis. Morbi tristique senectus et netus et malesuada. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.";
  orderBtn.textContent = "Order Now";
  contactBtn.textContent = "Contact Us";

  // Add children to parents
  span.appendChild(orderBtn);
  span.appendChild(contactBtn);

  card.appendChild(cardTitle);
  card.appendChild(line);
  card.appendChild(cardText);

  parent.appendChild(menuTitle);
  parent.appendChild(card);
  parent.appendChild(span);
}
