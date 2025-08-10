const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme preference in local storage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save theme preference
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙 Dark Mode";
    }
});
