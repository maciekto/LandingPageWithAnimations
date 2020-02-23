const hMenu__box = document.querySelector('.hMenu__box');

let preventScrollPosition = window.pageYOffset;


hMenu__box.addEventListener('click', list);

const item1 = document.querySelector('.item1');
    const item2 = document.querySelector('.item2');
    const item3 = document.querySelector('.item3');
    const item4 = document.querySelector('.item4');
    item1.addEventListener('click', hide);
    item2.addEventListener('click', hide);
    item3.addEventListener('click', hide);
    item4.addEventListener('click', hide);

function list (){
    const hr1 = document.querySelector('.hMenu__box__hr1');
    const hr2 = document.querySelector('.hMenu__box__hr2');
    const hr3 = document.querySelector('.hMenu__box__hr3');

    const hMenu__wrapper = document.querySelector('.hMenu__wrapper');
    const hMenu__mobile = document.querySelector('.hMenu__mobile');

    hr1.classList.toggle('hr1__click');
    hr2.classList.toggle('hr2__click');
    hr3.classList.toggle('hr3__click');

    hMenu__wrapper.classList.toggle("hMenu__wrapper--click");
    hMenu__mobile.classList.toggle("hMenu__mobile--click");
}
// Hide when link is clicked
    function hide (){
        const hr1 = document.querySelector('.hMenu__box__hr1');
        const hr2 = document.querySelector('.hMenu__box__hr2');
        const hr3 = document.querySelector('.hMenu__box__hr3');
        const hMenu__wrapper = document.querySelector('.hMenu__wrapper');
        const hMenu__mobile = document.querySelector('.hMenu__mobile');
        hMenu__wrapper.classList.toggle("hMenu__wrapper--click");
        hMenu__mobile.classList.toggle("hMenu__mobile--click");
        hr1.classList.toggle('hr1__click');
    hr2.classList.toggle('hr2__click');
    hr3.classList.toggle('hr3__click');
    }
//hide navbar

const submit = document.querySelector('.submit');

submit.addEventListener('click', submitFunction);

function submitFunction (e){
    e.preventDefault();
    const email = document.querySelector('#email');
    const ms = document.querySelector('#ms');

    const objectSend = {
        emailSend: email.value,
        msSend: ms.value
    }
   
    fetch('emailSend.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(objectSend)
    }).then((result) => result.text())
    .then((data)=> {
        console.log(data);
        const form = document.querySelector('form');
        form.reset();
    });

}




console.log(window);
const art1 = document.querySelector('.front');
const art2 = document.querySelector('.flexContainer');
const art3 = document.querySelector('.front2');
const art4 = document.querySelector('.front3');
window.onload = art1.style.cssText = "transform: scale(1);";
function scroll(){
    //console.log('hejo');
    const viewport = window.visualViewport.height;
   
    if(window.scrollY >= viewport/5 && window.scrollY < viewport*1.4){
        setTimeout(() => {
            art2.style.cssText = "transform: scale(1);"
        },100);
    }else if(window.scrollY > viewport*1.4 && window.scrollY < viewport*2.2){
        setTimeout(() => {
            art3.style.cssText = "transform: scale(1);"
        },100);
    }else if(window.scrollY > viewport*2.2 && window.scrollY < viewport*2.5){
        setTimeout(() => {
            art4.style.cssText = "transform: scale(1);"
        },100);
        
    }else{
        
        
    }
}