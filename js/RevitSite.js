document
  .getElementById("the-link-to-revit-site")
  .addEventListener("click", function () {
    window.open("https://revitsystems.org", "_blank");
  });

// the function that handles the form submittion
const form = document.getElementById("contactForm");
const submitBtn = form.querySelector('button[type="submit"]');
const statusDiv = document.getElementById("formStatus");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  // Button loading state
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  // Clear old status
  statusDiv.style.display = "none";
  statusDiv.textContent = "";

  const formData = new FormData(form);

  // Web3Forms access key
  formData.append("access_key", "f9a95d38-5f52-4a97-9d5d-2f19bd67c77f");

  // Deliverability boost
  formData.append("from_name", "E-SMEC Contact Form");
  formData.append("sender_name", "E-SMEC Website");
  formData.append("reply_to", formData.get("email"));

  // Better-formatted message
  const formattedMessage = `
Name: ${formData.get("name")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}
Subject: ${formData.get("subject")}

Message:
${formData.get("message")}
  `.trim();

  formData.set("message", formattedMessage);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      // SUCCESS MESSAGE
      statusDiv.textContent = "Message sent successfully!";
      statusDiv.style.display = "block";
      statusDiv.style.background = "#d4edda";
      statusDiv.style.color = "#155724";
      statusDiv.style.border = "1px solid #c3e6cb";

      form.reset();
    } else {
      // ERROR MESSAGE
      statusDiv.textContent = "Something went wrong. Please try again.";
      statusDiv.style.display = "block";
      statusDiv.style.background = "#f8d7da";
      statusDiv.style.color = "#721c24";
      statusDiv.style.border = "1px solid #f5c6cb";
    }
  } catch (error) {
    // NETWORK ERROR MESSAGE
    statusDiv.textContent = "Network error. Please check your connection.";
    statusDiv.style.display = "block";
    statusDiv.style.background = "#f8d7da";
    statusDiv.style.color = "#721c24";
    statusDiv.style.border = "1px solid #f5c6cb";
  }

  // Reset button
  submitBtn.textContent = originalText;
  submitBtn.disabled = false;
});
