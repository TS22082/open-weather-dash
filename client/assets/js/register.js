$(document).ready(function () {
  const elem = document.getElementById("modal");
  const instance = M.Modal.init(elem, { dismissible: false });
  instance.open();

  $("#registerForm").on("submit", function (e) {
    e.preventDefault();
    const newUser = {
      email: $("#email").val().trim(),
      password: $("#password").val().trim(),
    };
    registerUser(newUser).then(() => location.replace("/"));
  });
});

const registerUser = (userObj) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "POST",
      url: "/api/register",
      data: userObj,
    }).then(
      (res) => resolve(res),
      (err) => reject(err)
    );
  });
};
