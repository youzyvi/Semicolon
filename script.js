const CONTACT_EMAIL = "your.email@example.com";

const form = document.querySelector("#interest-form");
const note = document.querySelector("#form-note");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const subject = "C++ workshop interest";
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Experience level: ${data.get("experience")}`,
      "",
      "Message:",
      data.get("message")
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (note) {
      note.textContent = "Opening your email app now. If nothing opens, email me directly using the address above.";
    }
  });
}
