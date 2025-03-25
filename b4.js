let more = document.getElementById("btn-more");
let ul = document.getElementById("myUl");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach((task) => {
  let li = document.createElement("li");
  li.classList.add("text");
  li.innerHTML = `${task} <button class="delete-btn">Xóa</button>`;
  ul.appendChild(li);
});

more.onclick = function () {
  let input = document.getElementById("job").value;
  if (input === "") {
    alert("Vui lòng nhập công việc!");
    return;
  } else {
    let li = document.createElement("li");
    li.classList.add("text");
    li.innerHTML = `${input} <button class="delete-btn">Xóa</button>`;
    ul.appendChild(li);
    tasks.push(input);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  let deleteBtn = document.getElementsByClassName("delete-btn");
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].onclick = function (event) {
      let li = event.target.parentElement;
      ul.removeChild(li);
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    };
  }
  document.getElementById("job").value = "";
};
