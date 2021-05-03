import initializeWebsite from "./initialize";
import {
tasklist,
tasklistP,
tasklistN,
tasklistProject,
Tasks,
}from "./index";
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

 function apply() {
    const Tasktask = document.querySelector(".task-form");
    const Taskdate = document.querySelector(".date");
    const Taskpriority = document.querySelector(".check-box");

    function prevent() {
      if (Tasktask.value.length === 0 || Taskdate.value === "") {
        alert("Fields cannot be empty!");
      } else {
        pushed();
        render();
        clear();
      }
    }
    prevent();

    function pushed() {
      priorityCheck();
      let newTasks = new Tasks(Tasktask.value, Taskdate.value, Taskpriority.value);
      tasklist.push(newTasks);

      function choosePvN() {
        if (Taskpriority.value === "priority") {
          tasklistP.push(newTasks);
        } else if (Taskpriority.value === "normal") {
          tasklistN.push(newTasks);
        } else if (newProject() == true) {
          tasklistProject.push(newTasks);
        }
      }
      choosePvN();
      addLocalStorage();
    }

    function priorityCheck() {
      if (Taskpriority.checked === true) {
        Taskpriority.value = "priority"
      } else {
        Taskpriority.value = "normal"
      }
    }

    function clear() {
      Tasktask.value = "";
      Taskdate.value = "";
      Taskpriority.checked = false;
    }
  }

export default apply;