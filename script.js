const dropdownToggler = document.querySelector("#dropdown-toggle");
const dropdownDiv = document.querySelector("#dropdown-items");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const arrow = document.querySelector("#arrow");
const dropdownLink = document.querySelector("#dropdown-link");

dropdownToggler.addEventListener("click", () => {
  toggleDropDown();
});

Array.from(dropdownItems).forEach((element) => {
  element.addEventListener("click", (e) => selected(e.target));
});

function toggleDropDown() {
  dropdownDiv.classList.toggle("hide");
  dropdownDiv.classList.contains("hide")
    ? (arrow.className = "fa-solid fa-caret-down")
    : (arrow.className = "fa-solid fa-caret-up");
}
function selected(el) {
  dropdownLink.textContent = el.textContent;
  const id = el.id;
  Array.from(dropdownItems).forEach((element) => {
    element.classList.remove("flex");
    element.innerHTML = element.textContent
    element.id === id
      ? (element.innerHTML += `<i class="fa-solid fa-circle-check"></i>`)
      : null;
    element.classList.add("flex");
  });
  toggleDropDown();
}
