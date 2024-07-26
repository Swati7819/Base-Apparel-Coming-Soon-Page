document.addEventListener("DOMContentLoaded", () => {
  let email = document.querySelector("#email");
  let btn = document.querySelector("#btn");
  let inputStyle = document.querySelector(".input-style");
  let errorText = document.querySelector(".errorText");
  let container1 = document.querySelector(".show-c1");
  let container2 = document.querySelector(".show-c2");
  container2.style.display = "none";

  btn.addEventListener("click", () => {
    console.log(email.value);

    const isValid = validateEmail(email.value);
    console.log(isValid);

    if (isValid) {
      container1.style.display = "none";
      container2.style.display = "block";
    } else {
      email.classList.remove("inputStyle");
      email.classList.add("errorClass");
      errorText.style.display = "block";

      email.addEventListener("focus", () => {
        email.classList.remove("errorClass");
        errorText.style.display = "none";
      });
    }
  });

  function validateEmail(e) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|mil|biz|info|mobi|name|aero|jobs|museum|co\.[a-z]{2}|[a-z]{2,})$/;
    return emailPattern.test(e);
  }
});
