import initializeWebsite from "./initialize";
import {
tasklist,
tasklistP,
tasklistN,
tasklistProject,
Tasks,
}from "./index";
import apply from "./apply";
import {addLocalStorage, checkLocalStorage} from "./storage";

function render() {
    const parent2 = document.querySelector(".table-body");
    parent2.innerHTML = "";
    tasklist.forEach((item) => {
      const table = `<tr>
        <td>${item.task}</td>
        <td>${item.date}</td>
        <td>${item.priority}</td>
        <td><a class="delete">delete</a></td>
        </tr>`;
      parent2.insertAdjacentHTML("afterbegin", table);
    });
  }

  function deleteTask(current) {
    tasklist.splice(current, 1);
  }

  function findTask(taskArray, task) {
    if (taskArray.length === 0 || taskArray === null) {
      return;
    }
    for (let item of taskArray)
      if (item.task === task) {
        return taskArray.indexOf(item);
      }
  }

  function start() {
    const Table = document.querySelector("table").addEventListener("click", (e) => {
      const currentTarget = e.target.parentNode.parentNode.childNodes[1];
      if (e.target.innerHTML == "delete") {
        if (confirm(`are you sure you want to delete ${currentTarget.innerText}`))
          deleteTask(findTask(tasklist, currentTarget.innerText));
      }
      addLocalStorage();
      render();
    });
  }

  function Priorities() {
    const priorityButton = document.querySelector(".priority");
    priorityButton.addEventListener("click", (e) => {
      e.preventDefault();
      renderP();
    });
  }
  Priorities();

  function Normals() {
    const normalButton = document.querySelector(".normal");
    normalButton.addEventListener("click", (e) => {
      e.preventDefault();
      renderN();
    });
  }
  Normals();

  function All() {
    const allButton = document.querySelector(".all");
    allButton.addEventListener("click", (e) => {
      e.preventDefault();
      render();
    });
  }
  All();
  
  function newProject () {
    const newPrButton = document.querySelector("#plus");
    newPrButton.addEventListener("click", (e) => {
      e.preventDefault();
      renderProject();
      showProjectTitle();
    });
    
    function showProjectTitle () {
      const PR = document.querySelector(".pr");
      PR.style.display = "block";
    }
  }
  newProject();

  function renderP() {
    const parent2 = document.querySelector(".table-body");
    parent2.innerHTML = "";
    tasklistP.forEach((item) => {
      const table = `<tr>
        <td>${item.task}</td>
        <td>${item.date}</td>
        <td>${item.priority}</td>
        <td><a class="delete">delete</a></td>
        </tr>`;
      parent2.insertAdjacentHTML("afterbegin", table);
    });
  }

  function renderN() {
    const parent2 = document.querySelector(".table-body");
    parent2.innerHTML = "";
    tasklistN.forEach((item) => {
      const table = `<tr>
        <td>${item.task}</td>
        <td>${item.date}</td>
        <td>${item.priority}</td>
        <td><a class="delete">delete</a></td>
        </tr>`;
      parent2.insertAdjacentHTML("afterbegin", table);
    });
  }
  
  function renderProject() {
    const parent2 = document.querySelector(".table-body");
    parent2.innerHTML = "";
    tasklistProject.forEach((item) => {
      const table = `<tr>
        <td>${item.task}</td>
        <td>${item.date}</td>
        <td>${item.priority}</td>
        <td><a class="delete">delete</a></td>
        </tr>`;
      parent2.insertAdjacentHTML("afterbegin", table);
    });
  }

export {
  render,
  start,
  Priorities,
  Normals,
  All,
  newProject,
  renderN,
  renderP,
  renderProject
}
