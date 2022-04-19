'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////

const messenger = document.createElement('div');
messenger.classList.add('cookie-message');
messenger.innerHTML =
  'Chấp nhận cookies <button class="btn btn--close-cookie">Got it!<button>';
const header = document.querySelector('.header');
// header.append(messenger);
// header.append(messenger);

//////Scroll
const btnscrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnscrollTo.addEventListener('click', function () {
  const position = section1.getBoundingClientRect();

  console.log(section1.getBoundingClientRect());

  window.scrollTo({
    left: window.pageXOffset + position.x,
    top: window.pageYOffset + position.y,
    behavior: 'smooth',
  });
});

///Event

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {

//     const scrollTo =document.querySelector(this.getAttribute('href')) ;
//     scrollTo.scrollIntoView({behavior:'smooth'})
//     console.log(this.getAttribute('href'));
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const scrollTo = document.querySelector(e.target.getAttribute('href'));
    scrollTo.scrollIntoView({ behavior: 'smooth' });
  }
});

////Tab
const tabs = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelectorAll('.operations__content');

document
  .querySelector('.operations__tab-container')
  .addEventListener('click', function (e) {
    // console.log(e.target);

    const clicked = e.target.closest('.operations__tab');
    // console.log(clicked);
    if (!clicked) return;

    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    clicked.classList.add('operations__tab--active');

    const tabsContent = `.operations__content--${clicked.dataset.tab}`;
    tabsContainer.forEach(t =>
      t.classList.remove('operations__content--active')
    );
    document
      .querySelector(tabsContent)
      .classList.add('operations__content--active');

    console.log(document.querySelector(tabsContent));
  });

//// Nav

document.querySelector('nav').addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const allLink = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('.nav__logo');

    allLink.forEach(function (e) {
      if (e != link) e.style.opacity = '0.5';
    });
  }
});
document.querySelector('nav').addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const allLink = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('.nav__logo');

    allLink.forEach(function (e) {
      if (e != link) e.style.opacity = '1';
    });
  }
});

////sticky menu


const positionSticky=document.querySelector('.section').getBoundingClientRect();
console.log(positionSticky);

window.addEventListener('scroll',function(){
  
  const currentWindowY=window.scrollY;
  console.log(positionSticky.top,currentWindowY);
  if(positionSticky.top<=currentWindowY){
  document.querySelector('nav').classList.add('sticky');
  
}
else {document.querySelector('nav').classList.remove('sticky');}
}
)



// console.log(positionSticky);
// console.log(currentWindowY);
