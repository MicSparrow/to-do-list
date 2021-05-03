import initializeWebsite from "./initialize";
import {addLocalStorage, checkLocalStorage} from "./storage";
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

  let tasklistP = [];
  let tasklistN = [];
  let tasklistProject = [];
  let tasklist = tasklistN.concat(tasklistP, tasklistProject);

  class Tasks {
    constructor(task, date, priority) {
      this.task = task;
      this.date = date;
      this.priority = priority;
    }
  }

  checkLocalStorage();
  initializeWebsite();
  start();
  render();

export {
tasklist,
tasklistP,
tasklistN,
tasklistProject,
Tasks,
}

