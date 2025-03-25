const courses = JSON.parse(localStorage.getItem("courses")) || [
  {
    id: 1,
    content: "Learn Javascript Session 01",
    dueDate: "2023-04-17",
    status: "Pending",
    assignedTo: "Anh Bách",
  },
  {
    id: 2,
    content: "Learn Javascript Session 2",
    dueDate: "2023-04-17",
    status: "Pending",
    assignedTo: "Lâm thì",
  },
  {
    id: 3,
    content: "Learn CSS Session 1",
    dueDate: "2023-04-17",
    status: "Pending",
    assignedTo: "Hiếu Ci ớt ớt",
  },
];
saveCourses();
function saveCourses() {
  localStorage.setItem("courses", JSON.stringify(courses));
}

function renderTasks() {
  let tasks = JSON.parse(localStorage.getItem("courses")) || [];
  let taskTable = document.getElementById("card");
  taskTable.innerHTML = "";
  tasks.forEach((task, index) => {
    let current = `<tr>
              <td>${task.id}</td>
              <td>${task.content}</td>
              <td>${task.dueDate}</td>
              <td>${task.status}</td>
              <td>${task.assignedTo}</td>
              <td>
                  <button class="edit" onclick="editTask(${index})">Sửa</button>
                  <button class="delete" onclick="deleteTask(${index})">Xóa</button>
              </td>
          </tr>`;
    taskTable.innerHTML += current;
  });
}
renderTasks();

let submit = document.getElementById("submit");
let editIndex = -1;

submit.onclick = function () {
  let content = document.getElementById("content").value;
  let dueDate = document.getElementById("date").value;
  let status = document.getElementById("status").value;
  let assignedTo = document.getElementById("assignedTo").value;

  if (!content || !dueDate || !assignedTo) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  let tasks = JSON.parse(localStorage.getItem("courses")) || [];

  if (editIndex === -1) {
    let newTask = {
      id: Math.ceil(Math.random() * 10000),
      content: content,
      dueDate: dueDate,
      status: status,
      assignedTo: assignedTo,
    };
    tasks.push(newTask);
  } else {
    tasks[editIndex].content = content;
    tasks[editIndex].dueDate = dueDate;
    tasks[editIndex].status = status;
    tasks[editIndex].assignedTo = assignedTo;
    editIndex = -1;
    submit.textContent = "Submit";
  }

  localStorage.setItem("courses", JSON.stringify(tasks));
  renderTasks();
  resetForm();
};

function editTask(index) {
  let tasks = JSON.parse(localStorage.getItem("courses")) || [];
  let task = tasks[index];

  document.getElementById("content").value = task.content;
  document.getElementById("date").value = task.dueDate;
  document.getElementById("status").value = task.status;
  document.getElementById("assignedTo").value = task.assignedTo;

  document.getElementById("submit").textContent = "Cập nhật";
  editIndex = index;
}

function deleteTask(index) {
  if (confirm("Bạn có chắc chắn muốn xóa công việc này?")) {
    let tasks = JSON.parse(localStorage.getItem("courses")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("courses", JSON.stringify(tasks));
    renderTasks();
  }
}

function resetForm() {
  document.getElementById("content").value = "";
  document.getElementById("date").value = "";
  document.getElementById("assignedTo").value = "";
}
