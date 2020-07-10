$(document).ready(function () {
  $(".parallax").parallax();
  $(".sidenav").sidenav();

  getUserData().then((data) => {
    console.log(data);
    if (!data.zip) {
      console.log("needs zip");
    } else {
      getWeather().then((res) => console.log(res));
    }
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

const getWeather = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "GET",
      url: "/api/weather",
    }).then((response) => {
      resolve(response);
    });
  });
};
