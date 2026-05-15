const toggle = document.querySelector('.menu-tech');
const nav = document.querySelector('.nav-sommaire');

toggle.onclick = () =>{
    nav.classList.toggle('active');
}
    
const panels = document.querySelectorAll('.image');

panels.forEach(image => {

    image.addEventListener('click', () => {

        removeActive();

        image.classList.add('active');

    });

});

function removeActive(){

    panels.forEach(image => {

        image.classList.remove('active');

    });

}
