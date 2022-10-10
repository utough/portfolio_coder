'use strict';
// 2行以上だったら、省略する実装
function btnToggle() {
    const txtBox = document.getElementsByClassName('overview');
    const btnWrap = document.getElementsByClassName('btn-wrap');

    for(let i = 0; i < txtBox.length; i++){
        let innerTxt = txtBox[i].outerText;
        let innerTxtLength = innerTxt.length;
        const limit = 42;
        if(innerTxtLength > limit){
            txtBox[i].nextElementSibling.classList.add('exceed');
            txtBox[i].classList.add('exceed');
        } else {
            txtBox[i].nextElementSibling.classList.remove('exceed');
            txtBox[i].classList.remove('exceed');
        }
        
    }

    for(let i = 0; i < btnWrap.length; i++){
        btnWrap[i].addEventListener('click', () =>{
            if(!btnWrap[i].classList.contains('open')){
                btnWrap[i].classList.add('open');
                btnWrap[i].previousElementSibling.classList.add('open');
            }else if(btnWrap[i].classList.contains('open')){
                btnWrap[i].classList.remove('open');
                btnWrap[i].previousElementSibling.classList.remove('open');
            }
        });
    }

};
btnToggle();
// ハンバーガメニュー
const toffleMenu = document.getElementById('toggle-navi');
const openMenu = document.getElementById('inner-navi');
const closeMask = document.getElementById('toggle-mask');
toffleMenu.addEventListener('click', function(){
    this.classList.toggle('open');
    openMenu.classList.toggle('open');
    closeMask.classList.toggle('open');
    if(this.classList.contains('open')) {
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style.overflowY = '';
    }
});
closeMask.addEventListener('click', function(){
    this.classList.remove('open');
    toffleMenu.classList.remove('open');
    openMenu.classList.remove('open');
    if(!this.classList.contains('open')) {
        document.body.style.overflowY = '';
    }
});
// 下スクロールで消え、上スクロールで表示されるナビゲーション
const header = document.getElementById('header-section'); 
const headerHeight = document.getElementById('header-section').clientHeight; 
let scrollTop = 0;
window.addEventListener('scroll', function() {
    if(scrollTop < this.pageYOffset) {
        header.style.transform = `TranslateY(-${headerHeight}px)`;
    } else if(scrollTop > this.pageYOffset) {
        header.style.transform = 'TranslateY(0px)';
    }
    scrollTop = this.pageYOffset;
});
// スキル紹介へボタン　表示非表示。
const toSkilBtn = document.querySelector('#to-skil-btn');
const toTop = document.querySelector('#to-top-btn');
const skilSection = document.querySelector('#skil-section');
const hideOffset = skilSection.offsetTop - window.innerHeight;
window.addEventListener('scroll', function(){
    if(this.pageYOffset >= hideOffset) {
        toSkilBtn.classList.add('hide');
        toTop.classList.remove('hide');
    } else {
        toSkilBtn.classList.remove('hide');
        toTop.classList.add('hide');
    }
});
//　スライダーポーズ
// const slide = document.getElementById('first-view');
// const slidePhotoWrap = document.getElementsByClassName('image-wrapper');

// slide.addEventListener('mouseover', function() {
//     slidePhotoWrap.style.setProperty('animation-play-state', 'pased');
// });


