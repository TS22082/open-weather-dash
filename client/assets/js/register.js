$(document).ready(function () {
  const elem = document.getElementById("modal");
  const instance = M.Modal.init(elem, { dismissible: false });
  instance.open();

  $("#registerForm").on("submit", function (e) {
    e.preventDefault();
    console.log("score");
  });
});
