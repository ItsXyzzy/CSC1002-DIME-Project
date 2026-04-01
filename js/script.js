
// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});


function calculateSavings() {
    const monthlySpend = document.getElementById('monthlySpend').value;
    const savingsPercentage = 0.15; // PAM's average 15% saving for users
    const totalSavings = monthlySpend * savingsPercentage;
    
    document.getElementById('savingsResult').innerText = 
        "PAM could save you €" + totalSavings.toFixed(2) + " per month!";
}