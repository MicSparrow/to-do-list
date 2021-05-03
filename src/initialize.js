import {
tasklist,
tasklistP,
tasklistN,
tasklistProject,
Tasks,
}from "./index";
import apply from "./apply";
import {addLocalStorage, checkLocalStorage} from "./storage";
import {render,
  start,
  Priorities,
  Normals,
  All,
  newProject,
  renderN,
  renderP,
  renderProject} from "./render";

function initializeWebsite() {

    const Plus2 = document.querySelector("#plus2");
    Plus2.addEventListener("click", append);

    const parent = document.querySelector(".addtask");

    const input = document.createElement("input");
    input.type = "text";
    input.className = "task-form";
    input.placeholder = "Write your task here...";

    const checker = document.createElement("input");
    checker.type = "checkbox";
    checker.className = "check-box";
    checker.title = "Done/undone";

    const calendar = document.createElement("input");
    calendar.type = "datetime-local";
    calendar.className = "date";

    const applyButton = document.createElement("button");
    applyButton.textContent = "Apply";
    applyButton.className = "button1";

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.className = "button2";

    const lineBreak = document.createElement('br');

    function append() {
      parent.appendChild(input);
      parent.appendChild(calendar);
      parent.appendChild(checker);
      parent.appendChild(lineBreak);
      parent.appendChild(applyButton);
      parent.appendChild(cancelButton);
      const removePrompt = document.querySelector(".button2");
      const addPrompt = document.querySelector(".button1");
      removePrompt.addEventListener("click", abort);
      addPrompt.addEventListener("click", apply);
    }

    function abort() {
      parent.removeChild(input);
      parent.removeChild(checker);
      parent.removeChild(calendar);
      parent.removeChild(lineBreak);
      parent.removeChild(applyButton);
      parent.removeChild(cancelButton);
    }
  }
  
export default initializeWebsite;