const input = initel("input");
let focusIndex = 0;
let currentTab = "tab";
const fileTabInformation = {};

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
    // console.log(mouse.x);
  });
  document.addEventListener("DOMContentLoaded", () => {
    initStyles();
    createListenerMD("tab");
  });
  document.addEventListener("keydown", (key) => {
    getLine();
  });
  initel("file").addEventListener("mousedown", () => {
    // getLine();
  });
  initel("edit").addEventListener("mousedown", () => {
  });
  initel("view").addEventListener("mousedown", () => {
  });
  initel("settings").addEventListener("mousedown", () => {
  });
  initel("xtab").addEventListener("mousedown", () => {
    if (currentTab === "tab") return;
    initel(currentTab).remove();
    currentTab = "tab" + focusIndex--;
    if (focusIndex < 0) {
      currentTab = "tab";
    }
  });
}

addInputListeners();

function saveBuffer() {
  console.log(input.value);
  return input.value;
}

function openTab() {
  const newTab = initel(currentTab).cloneNode(true);
  const computedStyles = window.getComputedStyle(initel("tab"));
  for (let i = 0; i < computedStyles.length; i++) {
    newTab.style.setProperty(
      computedStyles[i],
      computedStyles.getPropertyValue(computedStyles[i]),
    );
  }
  newTab.id = "tab" + focusIndex;
  currentTab = newTab.id;

  initel("tabsection").insertBefore(
    newTab,
    initel("tabsection").children[initel("tabsection").children.length - 1],
  );
  let oldFile = "tab";
  if (focusIndex !== 0) {
    oldFile += focusIndex - 1;
  }
  focusIndex++;
  const fle = new file(oldFile, input.value);
  console.log(oldFile + "line");
  fileTabInformation[oldFile] = fle;
  input.value = "";
  createListenerMD(newTab.id);
}

function createListenerMD(id) {
  initel(id).addEventListener("mousedown", () => {
    console.log(id);
    fileTabInformation[currentTab] = new file(currentTab, input.value);
    currentTab = id;
    if (fileTabInformation[id] !== undefined) {
      input.value = fileTabInformation[id].buffer;
    } else {
      fileTabInformation[id] = new file(id, "");
      input.value = "";
    }
  });
}

function loadFile(index) {
  input.value = fileTabInformation[index].buffer;
}

function getLine() {
  const charPosition = input.selectionStart;
  console.log(charPosition);
  const row = input.value.split(/\r?\n/).length;
  console.log(row);
}

function initel(element) {
  return document.getElementById(element);
}

function initStyles() {
  const notepad = initel("notepad");
  const tabsection = initel("tabsection");
  const maintext = initel("maintext");
}
