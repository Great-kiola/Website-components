let close =  document.getElementById('close');
let myContainer = document.querySelector('.container');
let toggle = document.querySelector('.toggle');

toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('active');
});


close.addEventListener('click', ()=>{
    myContainer.classList.add('remove');
});