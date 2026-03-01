document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;
    const phone = form.querySelector("input[type='tel']").value;
    const date = form.querySelector("input[type='date']").value;
    const service = form.querySelector("select").value;

    if (!name || !phone || !date || !service) {
      alert("Please fill all details before booking.");
      return;
    }

    alert(
      `Appointment Confirmed!\n\nName: ${name}\nService: ${service}\nDate: ${date}`
    );

    form.reset();
  });
});
