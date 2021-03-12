const form = document.querySelector("form");
const input = document.getElementById("name");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input);
});
input.addEventListener("input", (e) => {
  console.log(input.value);
  if (input.value !== "") {
    fetch("assets/php/ajax.php", {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
});
