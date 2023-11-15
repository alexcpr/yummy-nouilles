document.addEventListener("DOMContentLoaded", function () {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validateEmail = (email) => {
    return emailRegex.test(String(email).toLowerCase());
  };

  const contactEmail = document.querySelector("#contact_email");

  contactEmail.addEventListener("change", () => {
    if (validateEmail(contactEmail.value)) {
      contactEmail.style.backgroundColor = "green";
    } else {
      contactEmail.style.backgroundColor = "red";
    }
  });

  const clickAndCollectBtn = document.querySelector(".cta");

  clickAndCollectBtn.addEventListener("click", () => {
    alert("Commande validée!");
  });
});
