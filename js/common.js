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

    const loadHTML = (selector, file) => {
        const el = document.querySelector(selector);
        if (!el) return;

        fetch(file)
            .then(res => {
                if (!res.ok) throw new Error(file);
                return res.text();
            })
            .then(html => el.innerHTML = html)
            .catch(err => console.error("Failed to load:", err));
    };

    loadHTML("header", "pages/header.html");
    loadHTML(".sidebar", "pages/sidebar.html");
    loadHTML("footer", "pages/footer.html");
    loadHTML(".breadcrumb-container", "pages/breadcrumb.html");

});

