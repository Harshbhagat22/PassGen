document.getElementById("generate-btn").addEventListener("click", generatePassword);
document.getElementById("copy-btn").addEventListener("click", copyToClipboard);
document.getElementById("check-strength-btn").addEventListener("click", checkStrength);

let passwordHistory = [];

function generatePassword() {
    const length = 12;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("password").value = password;
    updatePasswordStrength(password);
    addToHistory(password);
}

function updatePasswordStrength(password) {
    const length = password.length;
    let strength = "Weak";

    if (length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(password)) {
        strength = "Strong";
    } else if (length >= 8) {
        strength = "Medium";
    }

    document.getElementById("strength").textContent = "Password Strength: " + strength;
}

function copyToClipboard() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

function addToHistory(password) {
    passwordHistory.push(password);
    displayHistory();
}

function displayHistory() {
    const historyList = document.getElementById("historyList");
    historyList.innerHTML = "";

    passwordHistory.forEach((password, index) => {
        const passwordItem = document.createElement("div");
        passwordItem.textContent = password;
        historyList.appendChild(passwordItem);
    });
}

function checkStrength() {
    const password = document.getElementById("password").value;
    updatePasswordStrength(password);
}
