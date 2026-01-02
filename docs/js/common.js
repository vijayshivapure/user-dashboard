document.addEventListener("DOMContentLoaded", () => {

    // Generic HTML loader
    const loadHTML = async (selector, file, callback) => {
        const el = document.querySelector(selector);
        if (!el) return;

        try {
            const res = await fetch(file);
            if (!res.ok) throw new Error(`${file} not found`);
            el.innerHTML = await res.text();
            if (callback) callback();
        } catch (err) {
            console.error("Failed to load:", file);
        }
    };

    // Load layout parts (paths relative to docs/)
    loadHTML("header", "header.html");
    loadHTML(".sidebar", "sidebar.html", setActiveMenu);
    loadHTML("footer", "footer.html");
    loadHTML(".breadcrumb-container", "breadcrumb.html", setBreadcrumb);

    // Sidebar active menu
    function setActiveMenu() {
        const page =
            location.pathname.split("/").pop().replace(".html", "") || "index";

        document.querySelectorAll(".sidebar a").forEach(link => {
            if (link.dataset.page === page) {
                link.classList.add("active");
            }
        });
    }

    // Breadcrumb dynamic text
    function setBreadcrumb() {
        const bc = document.querySelector(".breadcrumb-container");
        if (!bc) return;

        const titleEl = document.getElementById("breadcrumb-title");
        const currentEl = document.getElementById("breadcrumb-current");

        if (titleEl) titleEl.innerText = bc.dataset.title || "";
        if (currentEl) currentEl.innerText = bc.dataset.current || "";
    }

});
