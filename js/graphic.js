'use strict';
// モダールウィンドウ
const thumbWrapGroup =document.querySelectorAll('.thumbnail');
const modalWrapGroup = document.querySelectorAll('.modal-wrap');

thumbWrapGroup.forEach(function(thumbnail){
    thumbnail.addEventListener('click', function(){
        let modalWrap = this.nextElementSibling;
        // console.log(this.firstElementChild);
        let imageSrc = this.firstElementChild.getAttribute('data-src');

        modalWrap.classList.add('active');        
        modalWrap.firstElementChild.src = imageSrc;
    });
});

modalWrapGroup.forEach(function(modal) {
    modal.addEventListener('click', function(){
        this.classList.remove('active');
    });
});