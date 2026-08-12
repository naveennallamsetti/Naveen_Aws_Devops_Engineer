/* =========================================================
   NAVEEN KUMAR - DEVOPS PORTFOLIO
   JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ACTIVE NAVIGATION LINK
       ===================================================== */

    const navLinks = document.querySelectorAll(".nav-container nav a");
    const sections = document.querySelectorAll("main section[id]");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (!targetId.startsWith("#")) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       TERMINAL TYPING EFFECT
       ===================================================== */

    const terminalOutput =
        document.querySelectorAll(".terminal-output");

    terminalOutput.forEach((element, index) => {

        const originalText =
            element.textContent.trim();

        element.textContent = "";

        setTimeout(() => {

            let characterIndex = 0;

            const typing =
                setInterval(() => {

                    element.textContent +=
                        originalText[characterIndex];

                    characterIndex++;

                    if (
                        characterIndex >=
                        originalText.length
                    ) {
                        clearInterval(typing);
                    }

                }, 35);

        }, 500 + index * 700);

    });


    /* =====================================================
       SCROLL REVEAL ANIMATION
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".skill-card, .project-card, " +
            ".experience-card, .stat-card, " +
            ".contact-card, .education-card, " +
            ".pipeline-step"
        );

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const footer =
        document.querySelector("footer");

    if (footer) {

        const paragraphs =
            footer.querySelectorAll("p");

        if (paragraphs.length > 0) {

            paragraphs[0].textContent =
                `© ${new Date().getFullYear()} Naveen Kumar Nallamsetti`;

        }

    }


    /* =====================================================
       CONTACT EMAIL CLICK TRACKING
       ===================================================== */

    const emailLink =
        document.querySelector(
            'a[href^="mailto:"]'
        );

    if (emailLink) {

        emailLink.addEventListener(
            "click",
            () => {

                console.log(
                    "Email contact selected."
                );

            }
        );

    }


    /* =====================================================
       GITHUB / LINKEDIN EXTERNAL LINKS
       ===================================================== */

    const externalLinks =
        document.querySelectorAll(
            'a[target="_blank"]'
        );

    externalLinks.forEach((link) => {

        link.addEventListener("click", () => {

            console.log(
                `Opening: ${link.href}`
            );

        });

    });


    /* =====================================================
       CONSOLE DEVELOPER MESSAGE
       ===================================================== */

    console.log(
        "%cNaveen Kumar | AWS DevOps Engineer",
        "color:#38bdf8;font-size:18px;font-weight:bold;"
    );

    console.log(
        "%cAWS • Kubernetes • Docker • Jenkins • Terraform • Ansible",
        "color:#22d3ee;font-size:13px;"
    );

});