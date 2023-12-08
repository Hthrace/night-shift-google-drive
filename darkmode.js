const header = document.querySelector(".YkfxEe ");
const navBar = document.querySelector(".ALpC8b ");
const filterBar = document.querySelector(".S630me ");
const foldersMain = document.querySelector(".PolqHc ");
const newBtnBlock = document.querySelector(".ZHllM ");
const newBtn = document.querySelector(".brbsPe ");
const genColor = document.querySelector(".vhoiae");

const backgroundArry = [
  navBar,
  filterBar,
  foldersMain,
  newBtn,
  newBtnBlock,
  header,
];

//Changes all background colors for above classes asigned to elements.
for (let bg of backgroundArry) {
  bg.style.background = "#030303";
}

setTimeout(() => {
  // Search bar
  document.querySelector(".a-WErN3d-OEtP0").style.background = "#1a1a1b";
  //Search bar menu drop down
  document.querySelector(".cloudsearch_suggestion_overlay").style.background =
    "#1a1a1b";
}, 1500);

//Changes font color for navBar, folder, filter bar, and right click menu.
genColor.style.setProperty("--dt-on-surface", "#d7dadc");

//Changes background color for folders
genColor.style.setProperty("--dt-surface2", "#1a1a1b");

//Changes right click menu background color
genColor.style.setProperty("--dt-background", "#1a1a1b");



