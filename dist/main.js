(()=>{"use strict";function e(e){const t=document.createElement("h1"),n=document.createElement("div"),i=document.createElement("h2"),u=document.createElement("hr"),a=document.createElement("p"),s=document.createElement("span"),d=document.createElement("button"),c=document.createElement("button");t.classList.add("title"),n.classList.add("card"),i.classList.add("card-title"),a.classList.add("card-text"),s.classList.add("button-section"),t.textContent="Restaurant Title",i.textContent="The best diner in all of New Jersey",a.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed. Suspendisse interdum consectetur libero id. Tellus in metus vulputate eu scelerisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna nunc id cursus metus aliquam eleifend mi in. Eu lobortis elementum nibh tellus. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed id semper. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Tempus quam pellentesque nec nam. Interdum velit laoreet id donec ultrices. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Molestie nunc non blandit massa. Diam ut venenatis tellus in metus vulputate eu. Luctus accumsan tortor posuere ac ut consequat semper. Mattis enim ut tellus elementum sagittis. Morbi tristique senectus et netus et malesuada. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.",d.textContent="Order Now",c.textContent="Contact Us",s.appendChild(d),s.appendChild(c),n.appendChild(i),n.appendChild(u),n.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(s)}const t=document.querySelector("#content");function n(){a(),s(t),e(t),console.log("Created home page")}function i(){a(),s(t)}function u(){a(),s(t)}function a(){for(;t.firstChild;)t.removeChild(t.firstChild)}function s(e){const t=document.createElement("div"),a=document.createElement("button"),s=document.createElement("button"),d=document.createElement("button");t.id="tabs-container",a.textContent="Home",s.textContent="Menu",d.textContent="Info",a.addEventListener("click",n),s.addEventListener("click",i),d.addEventListener("click",u),t.appendChild(a),t.appendChild(s),t.appendChild(d),e.appendChild(t)}const d=document.querySelector("#content");s(d),e(d)})();