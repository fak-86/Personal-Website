function applyLanguage(lang) {
    // 切換文字
    document.querySelectorAll("[data-en]").forEach(el => {
        el.innerHTML = lang === "en" ? el.getAttribute("data-en")
                                     : el.getAttribute("data-tw");
    });

    // 更新 Learn More 連結網址
    document.querySelectorAll("[data-href-en]").forEach(el => {
        el.href = lang === "en" ? el.getAttribute("data-href-en")
                                : el.getAttribute("data-href-tw");
    });

    document.body.setAttribute("lang", lang);
}

// 讀取語言偏好
let currentLang = localStorage.getItem("lang") || "tw";
applyLanguage(currentLang);

// 按鈕切換
document.getElementById("lang-btn").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "tw" : "en";
    localStorage.setItem("lang", currentLang);
    applyLanguage(currentLang);
});