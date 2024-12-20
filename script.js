function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);

    // Update the theme icon
    const themeIcon = document.getElementById("theme-icon");
    themeIcon.className = newTheme === "light" ? "fas fa-sun" : "fas fa-moon";

    // Save theme preference to localStorage
    localStorage.setItem("theme", newTheme);
}

// Apply saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Set the correct theme icon
    const themeIcon = document.getElementById("theme-icon");
    themeIcon.className = savedTheme === "light" ? "fas fa-sun" : "fas fa-moon";
});
