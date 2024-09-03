AOS.init();

const btnMobile = document.getElementById('btnMobile');

btnMobile.addEventListener('click', function () {
    let navMobile = document.getElementById('navMobile');
    // Obtém o estilo de exibição atual do elemento
    let displayStyle = window.getComputedStyle(navMobile).display;

    // Alterna entre 'none' e 'flex'
    if (displayStyle === 'none') {
        navMobile.style.display = 'flex';
    } else {
        navMobile.style.display = 'none';

    }
});

document.addEventListener('click', function (event) {
   // Verifica se o clique não foi no botão nem no menu
   if (!navMobile.contains(event.target) && event.target !== btnMobile) {
       navMobile.style.display = 'none'; // Remove a classe que exibe o menu
   }
});