let selectedProfile = "";

function selectProfile(profile) {
  selectedProfile = profile;
  document.querySelector(".select-profile").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

function goBack() {
  document.getElementById("loginForm").style.display = "none";
  document.querySelector(".select-profile").style.display = "flex";
  selectedProfile = "";
  document.getElementById("cpf").value = "";
  document.getElementById("senha").value = "";
}

function loginUser() {
  const cpf = document.getElementById("cpf").value;
  const senha = document.getElementById("senha").value;

  if (cpf && senha) {
    if (selectedProfile === "cliente") {
      window.location.href = "cliente.html";
    } else {
      window.location.href = "parceiro.html";
    }
  }

  return false;
}