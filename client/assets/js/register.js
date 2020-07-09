$(document).ready(function () {
  const elem = document.getElementById("modal");
  const instance = M.Modal.init(elem, { dismissible: false });
  instance.open();
});
