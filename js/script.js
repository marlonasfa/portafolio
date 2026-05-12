const navbarCollapseElement = document.getElementById('mainNav');
const navbarCollapse =
    window.bootstrap && navbarCollapseElement
        ? bootstrap.Collapse.getOrCreateInstance(navbarCollapseElement, { toggle: false })
        : null;

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        const targetSelector = anchor.getAttribute('href');
        const target = targetSelector ? document.querySelector(targetSelector) : null;

        if (!target) {
            return;
        }

        event.preventDefault();
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        if (navbarCollapseElement && navbarCollapseElement.classList.contains('show') && navbarCollapse) {
            navbarCollapse.hide();
        }
    });
});
