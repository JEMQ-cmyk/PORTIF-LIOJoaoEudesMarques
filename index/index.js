
const navbarLinks = document.querySelectorAll('.navbar-link');
navbarLinks.forEach(navbarLinks =>{

    // define variáveis para icon e texto dos menus
    const navbarText = navbarLinks.querySelector('.navbar-text');
    const navbarIcon = navbarLinks.querySelector('.navbar-icon');
    
    // caso mouse passe por cima de um icon no menu aplica os efeitos
    navbarLinks.addEventListener('mouseenter', () =>{

        navbarText.style.opacity = '1';
        navbarIcon.style.transform = 'translateY(0px)';
        navbarIcon.style.background = '#ffd700';
        navbarIcon.style.border = '8px solid #d3b615';

    });
    // caso o mouse não estiver passando por cima do icone volta ao estado normal
    navbarLinks.addEventListener('mouseleave', () =>{

        navbarText.style.opacity = '0';
        navbarIcon.style.transform = 'translateY(30px)';
        navbarIcon.style.background = 'transparent';
        navbarIcon.style.border = 'none';

    });
});
