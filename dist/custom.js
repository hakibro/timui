function btnOpenModal() {
  $("#formModal").removeClass("hidden");
}

function btnCloseModal() {
  $("#formModal").addClass("hidden");
}

function btnFormDaftar() {
  $("#formMasuk").addClass("hidden");
  $("#formDaftar").removeClass("hidden");
}

function btnFormMasuk() {
  $("#formDaftar").addClass("hidden");
  $("#formMasuk").removeClass("hidden");
}

function btnJoinSekarang() {
  $("#formModal").removeClass("hidden");
  $("#formDaftar").removeClass("hidden");
  $("#formMasuk").addClass("hidden");
}

// Password show hide
const passwordToggle = document.querySelector(".js-password-toggle");

passwordToggle.addEventListener("change", function () {
  const password = document.querySelector(".js-password"),
    passwordLabel = document.querySelector(".js-password-label");

  if (password.type === "password") {
    password.type = "text";
    passwordLabel.innerHTML = "hide";
  } else {
    password.type = "password";
    passwordLabel.innerHTML = "show";
  }
  password.focus();
});
