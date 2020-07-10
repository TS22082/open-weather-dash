$(document).ready(function () {
  $(".parallax").parallax();
  $(".sidenav").sidenav();

  getUserData().then((data) => {
    console.log(data);
  });
});

const getUserData = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "GET",
      url: "/api/dashboard",
    }).then((userInfo) => {
      resolve(userInfo);
    });
  });
};
