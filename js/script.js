// =========================================================
// NAVEEN KUMAR NALLAMSETTI - AWS DEVOPS PORTFOLIO
// Scroll reveal + active nav highlighting
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    const revealTargets = document.querySelectorAll(
        ".metric, .skill-card, .timeline-item, .project-card, .pipeline-step, .education-card, .contact-card, .about-card"
    );

    revealTargets.forEach((el) => el.classList.add("reveal"));

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal-visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        { threshold: 0.01, rootMargin: "0px 0px -5% 0px" }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));

    // Safety net: guarantee every element becomes visible even if the
    // observer misses a fast scroll, jump-to-anchor, or unusual viewport.
    window.setTimeout(() => {

        revealTargets.forEach((el) => el.classList.add("reveal-visible"));

    }, 1800);


    const navLinks = document.querySelectorAll(".nav-container nav a");

    const sections = Array.from(navLinks)
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    const navObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    navLinks.forEach((link) => link.classList.remove("active"));

                    const activeLink = document.querySelector(
                        `.nav-container nav a[href="#${entry.target.id}"]`
                    );

                    if (activeLink) {
                        activeLink.classList.add("active");
                    }

                }

            });

        },
        { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => navObserver.observe(section));

});