// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //validasi username dan password, username dan password bisa diganti sesuai keinginan
  if (username === "copiii" && password === "080211") {
    Swal.fire({
      icon: "success",
      title: "Login berhasil!",
      text: "Selamat datang ayanggg",
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Login gagal!",
      text: "Coba cek lagi username sama passwordnya ya Cantik:)",
      confirmButtonText: "Coba lagi ya ",
      confirmButtonColor: "#ff7675",
    });
  }
}