$(document).ready(function () {
  const elem = document.getElementById("modal");
  const instance = M.Modal.init(elem, { dismissible: false });
  instance.open();

  $("#loginForm").on("submit", function (e) {
    e.preventDefault();
    console.log("score");

    const newUser = {
      email: $("#password").val().trim(),
      password: $("#password").val().trim(),
    };
  });
});

const loginUser = () => {};
