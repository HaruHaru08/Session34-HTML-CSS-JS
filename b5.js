let employees = JSON.parse(localStorage.getItem("employees")) || [];

function renderEmployees() {
  let tableBody = document.getElementById("employeeList");
  tableBody.innerHTML = "";
  employees.forEach((employee, index) => {
    let row = `<tr>
                    <td>${index + 1}</td>
                    <td>${employee.name}</td>
                    <td>${employee.position}</td>
                    <td><button onclick="deleteEmployee(${index})">Xóa</button></td>
                </tr>`;
    tableBody.innerHTML += row;
  });
}

document.getElementById("addEmployee").onclick = function () {
  let name = document.getElementById("name").value;
  let position = document.getElementById("position").value;

  if (name === "" || position === "") {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  employees.push({ name, position });
  localStorage.setItem("employees", JSON.stringify(employees));
  renderEmployees();

  document.getElementById("name").value = "";
  document.getElementById("position").value = "";
};

function deleteEmployee(index) {
  employees.splice(index, 1);
  localStorage.setItem("employees", JSON.stringify(employees));
  renderEmployees();
}

renderEmployees();
