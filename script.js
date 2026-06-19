/* ═══════════════════════════════════════
   AIRAS — Minimal interaction script
   ═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    // Mobile nav toggle
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('open');
            links.classList.toggle('open');
        });
    }

    // Smooth scroll without keeping #section in the URL
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');

            if (targetId === '#') {
                e.preventDefault();

                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });

                if (toggle && links) {
                    toggle.classList.remove('open');
                    links.classList.remove('open');
                }

                history.pushState(null, '', window.location.pathname);
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                e.preventDefault();

                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                if (toggle && links) {
                    toggle.classList.remove('open');
                    links.classList.remove('open');
                }

                history.pushState(null, '', window.location.pathname);
            }
        });
    });
});
