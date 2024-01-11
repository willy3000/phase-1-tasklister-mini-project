document.addEventListener("DOMContentLoaded", (e) => {
  // your code here
  const form = document.getElementById("create-task-form");
  const list = document.getElementById("tasks");
  const input = document.getElementById("new-task-description");

  let tasks = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    tasks.push(input.value);
    input.value = null;
    const li = document.createElement("li");
    tasks.map((task) => {
      li.textContent = task;
      list.appendChild(li);
    });
  });
});
