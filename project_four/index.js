const btn = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const body = document.querySelector('.main-doc');
btn.addEventListener('click', toggle);

function toggle(){
    if(navbar.style.display == 'none'){
        navbar.style.display = 'block';
        navbar.style.width = '100%';
        btn.parentNode.removeChild(btn);
        navbar.appendChild(btn);
    }else{
        navbar.style.display = 'none';  
    }
}