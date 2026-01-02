// Header Section
document.addEventListener("DOMContentLoaded", () => {

    // Load Header
    fetch("header.html")
        .then(res => res.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;
        });

    // Load Footer
    fetch("footer.html")
        .then(res => res.text())
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        });

});

// BreadCrumb Section
document.addEventListener("DOMContentLoaded", () => {

    /* Load Header */
    fetch("header.html")
        .then(res => res.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;
        });

    /* Load Footer */
    fetch("footer.html")
        .then(res => res.text())
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        });

    /* Load Breadcrumb */
    fetch("breadcrumb.html")
        .then(res => res.text())
        .then(data => {
            const breadcrumbContainer = document.querySelector(".breadcrumb-container");
            if (breadcrumbContainer) {
                breadcrumbContainer.innerHTML = data;

                // Set dynamic breadcrumb values
                const title = breadcrumbContainer.dataset.title;
                const current = breadcrumbContainer.dataset.current;

                if (title) {
                    document.getElementById("breadcrumb-title").innerText = title;
                }
                if (current) {
                    document.getElementById("breadcrumb-current").innerText = current;
                }
            }
        });

});



document.addEventListener("DOMContentLoaded", () => {

    /* Load Header */
    fetch("header.html")
        .then(res => res.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;
        });

    /* Load Footer */
    fetch("footer.html")
        .then(res => res.text())
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        });

    /* Load Breadcrumb */
    fetch("breadcrumb.html")
        .then(res => res.text())
        .then(data => {
            const bc = document.querySelector(".breadcrumb-container");
            if (bc) {
                bc.innerHTML = data;
                document.getElementById("breadcrumb-title").innerText = bc.dataset.title;
                document.getElementById("breadcrumb-current").innerText = bc.dataset.current;
            }
        });

    /* Load Sidebar */
    fetch("sidebar.html")
        .then(res => res.text())
        .then(data => {
            const sidebar = document.querySelector(".sidebar");
            if (sidebar) {
                sidebar.outerHTML = data;
                setActiveMenu();
            }
        });

    /* Active Menu Logic */
    function setActiveMenu() {
        const page = location.pathname.split("/").pop().replace(".html", "");
        document.querySelectorAll(".sidebar a").forEach(link => {
            if (link.dataset.page === page) {
                link.classList.add("active");
            }
        });
    }

});




document.addEventListener("DOMContentLoaded", () => {

    const loadHTML = async (selector, file, callback) => {
        const el = document.querySelector(selector);
        if (!el) return;

        try {
            const res = await fetch(file);
            if (!res.ok) throw new Error(file);
            const html = await res.text();
            el.innerHTML = html;
            if (callback) callback();
        } catch (err) {
            console.error("Failed to load:", file);
        }
    };

    loadHTML("header", "header.html");
    loadHTML(".sidebar", "sidebar.html", setActiveMenu);
    loadHTML("footer", "footer.html");
    loadHTML(".breadcrumb-container", "breadcrumb.html", setBreadcrumb);

    function setActiveMenu() {
        const page = location.pathname.split("/").pop().replace(".html", "") || "index";
        document.querySelectorAll(".sidebar a").forEach(link => {
            if (link.dataset.page === page) {
                link.classList.add("active");
            }
        });
    }

    function setBreadcrumb() {
        const bc = document.querySelector(".breadcrumb-container");
        if (!bc) return;

        const title = bc.dataset.title;
        const current = bc.dataset.current;

        const titleEl = document.getElementById("breadcrumb-title");
        const currentEl = document.getElementById("breadcrumb-current");

        if (title && titleEl) titleEl.innerText = title;
        if (current && currentEl) currentEl.innerText = current;
    }

});

