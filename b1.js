let account = [];
let register = document.getElementById("btn-register");

register.onclick = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirm-password").value;

  if (email === "") {
    alert("Email không được để trống");
    return;
  }
  if (password === "") {
    alert("Password không được để trống");
    return;
  }
  if (password !== confirm) {
    alert("Mật khẩu xác nhận không đúng");
    return;
  }

  let accounts = JSON.parse(getAccount()) || [];
  let exitAccount = accounts.find((acc) => acc.email === email);

  if (exitAccount) {
    alert("email đã tồn tại");
    return;
  }

  let userInfor = {
    email: email,
    password: password,
  };

  accounts.push(userInfor);
  saveAccount(JSON.stringify(accounts));
};

function getAccount() {
  return localStorage.getItem("account") || "[]";
}

function saveAccount(acc) {
  localStorage.setItem("account", acc);
}
console.log(localStorage.getItem("account"));
