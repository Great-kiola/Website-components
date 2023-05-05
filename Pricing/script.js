let close =  document.querySelector('.btnClass');
let Mycontainer = document.querySelector('.container');

close.addEventListener('click', closeContainer);

function closeContainer (){
    Mycontainer.addEventListener('click', () => {
        Mycontainer.forEach(containers => {
            containers.classList.add('remove');
        })
    });

};



// container.forEach(containers =>
//     containers.addEventListener( 'click', () => {
//         containers.classList.add('remove');
// }));