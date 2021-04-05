document.getElementById('btn-menu').addEventListener('click', () => { document.getElementById('wrapper').classList.add('menu-open') });
document.getElementById('menu-button-close').addEventListener('click', () => { document.getElementById('wrapper').classList.remove('menu-open') });
document.getElementsByClassName('nav-item')[0].addEventListener('click', () => { document.getElementById('wrapper').classList.remove('menu-open') });
document.getElementsByClassName('nav-item')[1].addEventListener('click', () => { document.getElementById('wrapper').classList.remove('menu-open') });
document.getElementsByClassName('nav-item')[2].addEventListener('click', () => { document.getElementById('wrapper').classList.remove('menu-open') });