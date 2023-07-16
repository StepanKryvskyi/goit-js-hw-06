const input = document.getElementById("validation-input");

function handleInputBlur() {
  const enteredValue = input.value.trim();
  const validLength = input.getAttribute("data-length");

  if (enteredValue.length === Number(validLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

input.addEventListener("blur", handleInputBlur);
