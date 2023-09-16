const toggleButton = document.getElementById("toggleNav");
const sideNav = document.getElementById("sideNav");
const text = document.getElementById("text");
const itemMenu1 = document.getElementById("itemMenu1");
const itemMenu2 = document.getElementById("itemMenu2");
const itemMenu3 = document.getElementById("itemMenu3");
const itemMenu4 = document.getElementById("itemMenu4");
const itemMenu5 = document.getElementById("itemMenu5");
// open menu
toggleButton.addEventListener("click", function (e) {
  e.stopPropagation();
  sideNav.classList.toggle("show-nav");
});
// close menu
document.addEventListener("click", function (e) {
  if (!sideNav.contains(e.target)) {
    sideNav.classList.remove("show-nav");
  }
});
// get text content of item menu
function handleItemMenuClick(event) {
  const clickedItemText = event.target.textContent;
  text.textContent = `>> ${clickedItemText}`;
  sideNav.classList.remove("show-nav");
}
itemMenu1.addEventListener("click", handleItemMenuClick);
itemMenu2.addEventListener("click", handleItemMenuClick);
itemMenu3.addEventListener("click", handleItemMenuClick);
itemMenu4.addEventListener("click", handleItemMenuClick);
itemMenu5.addEventListener("click", handleItemMenuClick);
