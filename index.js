const input = initel("input");
let focusIndex = 0;
const fileTabInformation = []

class file {
  constructor(name, buffer) {
    this.buffer = buffer;
    this.name = name;
  }
}

function addInputListeners() {
  input.addEventListener("keydown", (key) => {
    if (key.key === "s" && key.ctrlKey) {
      key.preventDefault();
      saveBuffer();
    }
  });
  initel("notepad").addEventListener("mousedown", (mouse) => {
    console.log(mouse.x);

  });
  document.addEventListener("DOMContentLoaded", () => {
    initStyles();
  });
  initel("file").addEventListener("mousedown", () => {
    getLine();
  });
  initel("edit").addEventListener("mousedown", () => {

  });
  initel("view").addEventListener("mousedown", () => {

  });
  initel("settings").addEventListener("mousedown", () => {

  });
}

addInputListeners();

function saveBuffer() {
  console.log(input.value);
  return input.value;
}

function openTab() {
  const newTab = initel("tab").cloneNode(true);
  const computedStyles = window.getComputedStyle(initel("tab"));
  for (let i = 0; i < computedStyles.length; i++) {
    newTab.style.setProperty(computedStyles[i], computedStyles.getPropertyValue(computedStyles[i]));
  }

  initel("tabsection").insertBefore(newTab, initel("tabsection").children[initel("tabsection").children.length - 1]);
  focusIndex++;
  const fle = new file(focusIndex, input.value);
  fileTabInformation.push(fle);
  input.value = "";
}

function loadFile(index) {
  input.value = fileTabInformation[index].buffer
}

function getLine() {
  console.log(input.ariaColIndex + "\n" + input.ariaColSpan);
  input.ariaColIndex;
}

function initel(element) {
  return document.getElementById(element);
}

function initStyles() {
  const notepad = initel("notepad");
  const tabsection = initel("tabsection");
  const maintext = initel("maintext");



}
