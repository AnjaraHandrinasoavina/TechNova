const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.onclick = () =>{
    nav.classList.toggle('active');
}
    
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {

    panel.addEventListener('click', () => {

        removeActive();

        panel.classList.add('active');

    });

});

function removeActive(){

    panels.forEach(panel => {

        panel.classList.remove('active');

    });

}