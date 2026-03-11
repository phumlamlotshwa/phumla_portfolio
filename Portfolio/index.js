const toggleSwitch = document.querySelector("#checkbox");
const themeText = document.querySelector("#theme-text");

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeText.innerText = "Dark Mode On";
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeText.innerText = "Dark Mode Off";
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme);

// Check for saved theme preference
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    themeText.innerText = "Dark Mode On";
  }
}
