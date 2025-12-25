// script.js

document.addEventListener('DOMContentLoaded', () => {
    // ===== DARK MODE CODE =====
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const THEME_KEY = 'preferred-theme';

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        }
    };

    // Load saved theme
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }

    // Toggle on click
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = body.classList.contains('dark-mode');
            const newTheme = isDark ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem(THEME_KEY, newTheme);
        });
    }

    // ===== TYPED.JS CODE =====
    const typedElement = document.querySelector('#typed');
    if (typedElement) {
        new Typed('#typed', {
            strings: [
                'Software Developer.',
                'Tech Enthusiast.',
                'Entrepreneur.',
                
            ],
            typeSpeed: 70,
            backSpeed: 50,
            backDelay: 2000,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: '_',
            smartBackspace: true
        });
    }

    // ===== ACTIVE NAV HIGHLIGHT (ON LOAD + SCROLL) =====
    const navLinkAnchors = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    function updateActiveLink() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150; // Adjust for navbar height
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 1) { // -1 for precision
                current = section.getAttribute('id');
            }
        });

        // If at the very top, force Home
        if (window.scrollY < 50) {
            current = 'home-page';
        }

        navLinkAnchors.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }

    // Run on load and on scroll
    updateActiveLink(); // Run immediately after DOM loaded
    window.addEventListener('scroll', updateActiveLink);

    // Optional: Also update when clicking a link
    navLinkAnchors.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(updateActiveLink, 100); // Small delay for smooth scroll to finish
        });
    });

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
});
