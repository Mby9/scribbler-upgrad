function openModal(modalElement) {
  console.log("called open");
  var modal = document.getElementById(modalElement);
  modal.style.display = "block";
}

function closeModal(modalElement) {
  console.log("called close");
  var modal = document.getElementById(modalElement);
  modal.style.display = "none";
}

function navigateToSignUp() {
  document.getElementById("sign-in").style.display = "none";
  document.getElementById("sign-up").style.display = "block";
}