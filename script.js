// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // Sticky Header Effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const navContainer = document.querySelector('.navbar');
    let isMenuOpen = false;

    menuIcon.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            menuIcon.innerHTML = "<i class='bx bx-x'></i>";
            navContainer.classList.add('nav-active');
            
            // Re-show links for mobile menu
            navLinks.style.display = 'flex';
        } else {
            menuIcon.innerHTML = "<i class='bx bx-menu'></i>";
            navContainer.classList.remove('nav-active');
            
            // Reset to default css state (hidden on mobile)
            setTimeout(() => {
                navLinks.style.display = '';
            }, 400); // slightly longer timeout to match slower luxury transition
        }
    });

    // Close mobile menu when clicking a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                menuIcon.click();
            }
            
            // Active link highlighting
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Handle form submission (Prevent default for demo)
    const bookingForm = document.querySelector('.booking-form');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const location = document.getElementById('location').value;
        
        if(location) {
            alert(`Our concierge will begin crafting your journey to ${location}...`);
        } else {
            alert('Please select a dream destination to begin.');
        }
    });

    // Set today's date as min for checkin dates
    const datesInput = document.getElementById('dates');
    if(datesInput) {
        const today = new Date().toISOString().split('T')[0];
        datesInput.min = today;
    }
});
