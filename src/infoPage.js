export function createInfo(parent) {
  const infoTitle = document.createElement("h1");
  const infoSection = document.createElement("div");
  const storeInfoSection = document.createElement("div");
  const founderImage = document.createElement("img");
  const founderText = document.createElement("h3");
  const establishedText = document.createElement("h3");
  const storeDesciption = document.createElement("p");
  const contactButton = document.createElement("button");

  infoTitle.classList.add("info-title");
  infoSection.classList.add("info-section");
  storeInfoSection.classList.add("store-info-section");
  founderImage.classList.add("founder-image");

  founderImage.src = "founder.jpg";
  founderImage.alt = "Picture of Jack Montague";

  infoTitle.textContent = "Restaurant Name";
  founderText.textContent = "Founder: Jack Montague";
  establishedText.textContent = "Established: 1954";
  storeDesciption.textContent =
    "The backbone of this company is bringing the best food and service possible. The Montague family has ran this buisness for generations. With life long customers and multiple 5 star dishes you will be coming back again and again just to try all these amazing dishes.";
  contactButton.textContent = "Contact Us";

  storeInfoSection.appendChild(founderImage);
  storeInfoSection.appendChild(founderText);
  storeInfoSection.appendChild(establishedText);
  storeInfoSection.appendChild(storeDesciption);

  infoSection.appendChild(storeInfoSection);

  parent.appendChild(infoTitle);
  parent.appendChild(infoSection);
  parent.appendChild(contactButton);
}
