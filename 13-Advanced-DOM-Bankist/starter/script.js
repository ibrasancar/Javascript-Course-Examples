'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

btnScrollTo.addEventListener('click', e => {
  e.preventDefault();
  const s1coords = section1.getBoundingClientRect();
  window.scrollTo({
    left: s1coords.left + window.scrollX,
    top: s1coords.top + window.scrollY,
    behavior: 'smooth',
  });
  // section1.scrollIntoView({ behavior: 'smooth' });
});

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
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// creating a cookie banner
const header = document.querySelector('.header');
const message = document.createElement('div');
const sections = document.querySelectorAll('.section');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. Are you okay with that, bitch? <button class="btn btn--close-cookie">Got it!</button>';
header.append(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', e => message.parentElement.removeChild(message));
// styles
message.style.backgroundColor = '#37383d';
// message.style.padding = '20px';
message.style.width = '120%';
message.style.position = 'fixed';
message.style.bottom = '0';
message.style.zIndex = '2';
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const toScroll = document.querySelector(this.getAttribute('href'));
//     const toScrollCoordinates = toScroll.getBoundingClientRect();
//     // toScroll.scrollIntoView({ behavior: 'smooth' });
//     window.scroll({
//       left: toScrollCoordinates.x + window.scrollX,
//       top: toScrollCoordinates.y + window.scrollY,
//       behavior: 'smooth',
//     });
//   });
// });

// 1. ADD EVENT LISTENER TO COMMON PARENT ELEMENT
// 2. DETERMINE WHAT ELEMENT ORIGINATED THE EVENT

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const h1 = document.querySelector('h1');

/* // Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes[1]);
console.log((h1.children[0].style.color = 'white'));
console.log((h1.firstElementChild.style.color = 'white'));
console.log((h1.lastElementChild.style.color = 'white'));

// Going upwards: parent
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
 */
/* [...h1.parentElement.children].forEach(el => {
  if (el !== h1) {
    el.style.transform = 'scale(0.5)';
  }
}); */

/* [...btnsOpenTab].forEach(e => {
  e.addEventListener('click', function (el) {
    console.log(el.target.dataset.tab);
  });
});
 */

/* document
  .querySelector('.operations__tab-container')
  .addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('btn')) {
      const id = e.target.dataset.tab;
      console.log(`.operations__content--${id}`);
      document
        .querySelectorAll('.operations__content')
        .forEach(el => el.classList.remove('operations__content--active'));
      document
        .querySelector(`.operations__content--${id}`)
        .classList.add('operations__content--active');
    }
  });
 */

// tab settings

tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('button');

  if (!clicked) return;

  tabsContainer
    .querySelector('.operations__tab--active')
    .classList.remove('operations__tab--active');

  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(function (content) {
    content.classList.remove('operations__content--active');
    content.classList.contains(`operations__content--${clicked.dataset.tab}`)
      ? content.classList.add('operations__content--active')
      : false;
  });

  // tabsContent
  //   .querySelector('.operations__content--active')
  //   .classList.remove('operations__content--active');
  // tabsContent
  //   .querySelector(`operations__content--${clicked.dataset.tab}`)
  //   .classList.add('operations__content--active');
});

// menu fade aniimation

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
      logo.style.opacity = this;
    });
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// BAD CODE || PERFORMANCE ISSUE
// const initialCoords = section1.getBoundingClientRect();
// // sticky navigation
// window.addEventListener('scroll', e => {
//   // console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// Sticky navigation: Intersection Observer API

/* const obsCallback = function (entries, observer) {
  entries.forEach(e => console.log(e));
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
 */

const headerObserver = new IntersectionObserver(
  entries =>
    !entries[0].isIntersecting
      ? nav.classList.add('sticky')
      : nav.classList.remove('sticky'),
  {
    root: null,
    threshold: 0,
    rootMargin: `-${nav.getBoundingClientRect().height}px`,
  }
);
headerObserver.observe(header);

// reveal sections
const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0,
});

sections.forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

// image lazy loading
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImgs = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImgs, {
  root: null,
  threshold: 0,
  rootMargin: '+200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dots = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length - 1;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
    );
  };
  const createDots = function (slide) {
    for (let i = 0; i <= maxSlide; i++) {
      dots.insertAdjacentHTML(
        'beforeend',
        `<div class="dots__dot${
          curSlide == i ? ' dots__dot--active' : ''
        }" data-index="${i}"></div>`
      );
    }
  };
  const checkDots = function (slide) {
    const dotsItem = document.querySelectorAll('.dots__dot');
    dotsItem.forEach((d, i) => {
      if (i === slide) d.classList.add('dots__dot--active');
      else d.classList.remove('dots__dot--active');
    });
  };
  const nextSlide = function () {
    if (curSlide === maxSlide) curSlide = 0;
    else curSlide++;
    goToSlide(curSlide);
    checkDots(curSlide);
  };
  const prevSlide = function () {
    if (curSlide <= 0) curSlide = maxSlide;
    else curSlide--;
    goToSlide(curSlide);
    checkDots(curSlide);
  };
  const init = function () {
    goToSlide(0);
    createDots(curSlide);
  };
  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  dots.addEventListener('click', function (e) {
    const target = e.target.closest('.dots__dot');
    if (target) {
      curSlide = +target.dataset.index;
      goToSlide(curSlide);
      checkDots(curSlide);
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
};
slider();
