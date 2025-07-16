document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop form from refreshing page

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Fake login details just for demo
    if (username === "admin" && password === "1234") {
      alert("✅ Login successful!");
      // You can redirect to another page: window.location.href = "dashboard.html";
    } else {
      alert("❌ Invalid username or password!");
    }
  });
});
