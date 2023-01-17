function validate(e) {
  e.preventDefault();
  if (
    document.myForm.Name.value != "" ||
    document.myForm.Number.value != "" ||
    document.myForm.Duration.value != "" ||
    document.myForm.Email.value != ""
  ) {
    alert("success");
    return true;
  }
  if (document.myForm.Name.value == "") {
    alert("Please provide your name!");
    document.myForm.Name.focus();
    return false;
  }
  if (
    document.myForm.Number.value == "" ||
    parseInt(document.myForm.Number.value) <= 0
  ) {
    alert("Please provide appropriate value");
    document.myForm.Number.focus();
    return false;
  }
  if (
    document.myForm.Duration.value == "" ||
    parseInt(document.myForm.Duration.value) <= 0
  ) {
    alert("Please provide appropriate value");
    document.myForm.Duration.focus();
    return false;
  }
  if (document.myForm.Email.value == "") {
    alert("Please provide your Email!");
    document.myForm.Email.focus();
    return false;
  }
  return true;
}

const submite = document.querySelector(".submite-btn");

submite.addEventListener("click", (e) => {
  validate(e);
});
