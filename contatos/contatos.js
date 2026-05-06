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
// ------------------------------------------

// ENVIAR FORMULÁRIO

// define o formulário e o botão
const forms = document.getElementById('forms');
const btn = document.getElementById('button');

// adiciona um eventode enviar
forms.addEventListener('submit', function(e){

    e.preventDefault();

    btn.disabled = true;
    btn.innerText = "enviando...";
    btn.style.backgroundColor = "#333";
    btn.style.borderColor = "#333";
// converte os dados dos inputs 
    const formData = new FormData(forms);
    const data = Object.fromEntries(formData);

// através do formsubmit faz a verificação e envia pro email
    fetch("https://formsubmit.co/ajax/joaoeudesmarques.jemq@gmail.com",{
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
// trsnforma os dados em json
        body: JSON.stringify(data)  
    })

    .then(response => response.json())
    .then(data => {
        btn.innerText = "enviado!"
        btn.style.backgroundColor = "#14dc14";
        btn.style.borderColor = "#14dc14";
        forms.reset();

        setTimeout(() =>{
            btn.style.backgroundColor = "#dc143c";
            btn.style.borderColor = "#dc143c";
            btn.innerText = "Enviar"
            btn.disabled = false;
            btn.style.color = "#ffff"
            
        }, 2000);
    })
    .catch(error => console.log(error));

    
});