const username = document.getElementById("username");
const email = document.getElementById("email");
const message = document.getElementById("msg");
const formData = document.getElementById("form");

const insertAfter = (referenceElement, newElement) => {
  referenceElement.parentNode.insertBefore(
    newElement,
    referenceElement.nextSibling
  );
};

const errorMessage = (field) => {
  let errorMessage = document.createElement("span");
  errorMessage.className = "error-message";
  errorMessage.textContent = "Please fill out this field.";
  insertAfter(field, errorMessage);
};

formData.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username.value === "") {
    errorMessage(username);
  }
  if (email.value === "") {
    errorMessage(email);
  }
  if (message.value === "") {
    errorMessage(message);
  } else {
    alert("Thank you for your message!");
    console.log({
      username: username.value,
      email: email.value,
      message: message.value,
    });

    username.value = "";
    email.value = "";
    message.value = "";
  }
});
