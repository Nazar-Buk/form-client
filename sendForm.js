const forma = document.querySelector("form");
// console.log(forma, "forma");
const email = document.querySelector("input.email");
// console.log(email, "email");
const text = document.querySelector("input.text");
// console.log(text, "text");

forma.addEventListener("submit", async (e) => {
  e.preventDefault();
  // alert(email.value + " " + text.value);
  const values = {
    email: email.value,
    text: text.value,
  };

  console.log(values, "values");

  try {
    const response = await fetch("http://localhost:5901/submit", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      alert("Form submitted successfully!");
    } else {
      alert("Error submitting form!");
    }
  } catch (err) {
    console.log(err, "err");
    alert("An error occurred while submitting the form.");
  }
});
