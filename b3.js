document.getElementById("loginBtn").onclick = function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
      alert("Vui lòng nhập đầy đủ Email và Mật khẩu!");
      return;
    }

    let accounts = JSON.parse(localStorage.getItem("account")) || [];

    let existAccount = accounts.find(
      acc => acc.email === email && acc.password === password
    );

    if (!existAccount) {
      alert("Tài khoản hoặc mật khẩu không đúng!");
    } else {
      alert("Đăng nhập thành công!");
      window.location.href = "https://anime47.one/";
    }
  };
