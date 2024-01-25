'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShow = document.querySelectorAll('.show-modal');
const btnClose = document.querySelector('.close-modal');

//classList is used to access / manipulate classes
const show = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const close = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden'); 
}; 

for(let i = 0; i< btnShow.length; i++){
    btnShow[i].addEventListener('click', show);
}

btnClose.addEventListener('click', close);
overlay.addEventListener('click', close);

document.addEventListener('keydown', function(es){
    //here es.key is used because keydown object contains many property.
    //to check the key value we use .key to access that property. 
    if(es.key === 'Escape' && !modal.classList.contains('hidden')){
        close();
    }
})