const healthPill = document.getElementById("health-pill");
const form = document.getElementById("checkout-form");
const result = document.getElementById("result");
const submitButton = document.getElementById("submit-btn");

async function refreshHealth() {
  try {
    const response = await fetch("/health");
    if (!response.ok) {
      throw new Error("health endpoint returned non-200");
    }

    const payload = await response.json();
    healthPill.textContent = payload.ok ? "API healthy" : "API unhealthy";
    healthPill.classList.remove("fail");
    healthPill.classList.add("ok");
  } catch (error) {
    healthPill.textContent = "API unreachable";
    healthPill.classList.remove("ok");
    healthPill.classList.add("fail");
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const customerId = String(formData.get("customerId") ?? "").trim();
  const subtotal = Number(formData.get("subtotal"));
  const couponRaw = String(formData.get("couponCode") ?? "").trim();

  submitButton.disabled = true;
  submitButton.textContent = "Running...";

  try {
    const response = await fetch("/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        customerId,
        subtotal,
        couponCode: couponRaw || undefined,
        currency: "USD"
      })
    });

    const payload = await response.json();
    result.textContent = JSON.stringify(
      {
        statusCode: response.status,
        ...payload
      },
      null,
      2
    );
  } catch (error) {
    result.textContent = JSON.stringify(
      {
        error: "Request failed",
        detail: error instanceof Error ? error.message : String(error)
      },
      null,
      2
    );
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Run Checkout";
  }
});

refreshHealth();
