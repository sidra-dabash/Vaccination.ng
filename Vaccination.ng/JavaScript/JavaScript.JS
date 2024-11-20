document.getElementById("menu-btn").addEventListener("click", function() {
    var menu = document.getElementById("menu").querySelector("ul");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex"; // عرض القائمة
    } else {
        menu.style.display = "none"; // إخفاء القائمة
    }
});

  