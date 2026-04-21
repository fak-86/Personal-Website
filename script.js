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

// 根據當前頁面設定 menu 的 active 狀態
function updateActiveMenuItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    
    // 移除所有菜單連結和 dropdown 連結的 active 類
    document.querySelectorAll('.menu_botton').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.classList.remove('active');
    });
    
    // 根據當前頁面添加 active 類到正確的菜單項
    // 先檢查主菜單連結
    document.querySelectorAll('.menu > a.menu_botton').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(currentPage)) {
            link.classList.add('active');
        }
    });
    
    // 再檢查 dropdown 連結
    document.querySelectorAll('.dropdown-content a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(currentPage)) {
            link.classList.add('active');
        }
    });
}

// 頁面加載時更新 active 狀態
updateActiveMenuItem();

// 讀取語言偏好
let currentLang = localStorage.getItem("lang") || "tw";
applyLanguage(currentLang);

// 按鈕切換
document.getElementById("lang-btn").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "tw" : "en";
    localStorage.setItem("lang", currentLang);
    applyLanguage(currentLang);
});
