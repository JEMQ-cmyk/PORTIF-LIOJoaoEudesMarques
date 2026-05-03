const navbarLinks = document.querySelectorAll('.navbar-link');

navbarLinks.forEach(navbarLinks =>{

    const navbarText = navbarLinks.querySelector('.navbar-text');
    const navbarIcon = navbarLinks.querySelector('.navbar-icon');
    

    navbarLinks.addEventListener('mouseenter', () =>{

        navbarText.style.opacity = '1';
        navbarIcon.style.transform = 'translateY(0px)';
        navbarIcon.style.background = '#ffd700';
        navbarIcon.style.border = '8px solid #d3b615';

    });

    navbarLinks.addEventListener('mouseleave', () =>{

        navbarText.style.opacity = '0';
        navbarIcon.style.transform = 'translateY(30px)';
        navbarIcon.style.background = 'transparent';
        navbarIcon.style.border = 'none';

    });
});
