document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const serviceSelect = document.getElementById("service");
  const costText = document.getElementById("cost");

  serviceSelect.addEventListener("change", () => {
    const price = serviceSelect.value;
    costText.textContent = price
      ? `Estimated Cost: ₹${price}`
      : "Estimated Cost: ₹0";
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;
    const phone = form.querySelector("input[type='tel']").value;
    const date = form.querySelector("input[type='date']").value;
    const service = serviceSelect.options[serviceSelect.selectedIndex].text;

    if (!name || !phone || !date || !service) {
      alert("Please fill all details before booking.");
      return;
    }

    alert(
      `Appointment Confirmed!\n\nName: ${name}\nService: ${service}\nDate: ${date}`
    );

    form.reset();
    costText.textContent = "Estimated Cost: ₹0";
  });
});
