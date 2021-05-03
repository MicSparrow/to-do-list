import initializeWebsite from "./initialize";
import {
tasklist,
tasklistP,
tasklistN,
tasklistProject,
Tasks,
}from "./index";
import apply from "./apply";
import {render,
  start,
  Priorities,
  Normals,
  All,
  newProject,
  renderN,
  renderP,
  renderProject} from "./render";

function addLocalStorage() {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
    localStorage.setItem("tasklistN", JSON.stringify(tasklistN));
    localStorage.setItem("tasklistP", JSON.stringify(tasklistP));
    localStorage.setItem("tasklistProject", JSON.stringify(tasklistProject));
  }

  function checkLocalStorage() {
    if (localStorage.getItem("tasklist") || localStorage.getItem("tasklistN") || localStorage.getItem("tasklistP") || localStorage.getItem("tasklistProject")) {
      tasklist = JSON.parse(localStorage.getItem("tasklist"));
      tasklistN = JSON.parse(localStorage.getItem("tasklistN"));
      tasklistP = JSON.parse(localStorage.getItem("tasklistP"));
      tasklistProject = JSON.parse(localStorage.getItem("tasklistProject"));
      } else {
      tasklist = [];
    }
  }

export {
  addLocalStorage,
  checkLocalStorage
}