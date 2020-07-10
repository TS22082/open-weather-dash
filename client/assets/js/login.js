$(document).ready(function () {
  const elem = document.getElementById("modal");
  const instance = M.Modal.init(elem, { dismissible: false });
  instance.open();

  $("#loginForm").on("submit", function (e) {
    e.preventDefault();
    console.log("score");

    const newUser = {
      email: $("#email").val().trim(),
      password: $("#password").val().trim(),
    };

    loginUser(newUser).then(() => window.location.replace("/dashboard"));
  });
});

const loginUser = (userObj) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "POST",
      url: "/api/login",
      data: userObj,
    }).then(resolve({ msg: "success" }), reject({ ms: "error" }));
  });
};
