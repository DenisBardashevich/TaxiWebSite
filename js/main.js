// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    menu.addEventListener("click", (event) => {
      if(event.target){
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()
  
  
  // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
  function fixedNav() {
    const nav = document.querySelector('nav')
  
    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
      nav.classList.add('fixed__nav')
    } else {
      nav.classList.remove('fixed__nav')
    }
  }
  window.addEventListener('scroll', fixedNav)
  

  document.querySelectorAll('.faq-item h3.question').forEach((item) => {
    item.addEventListener('click', () => {
      const parent = item.parentElement;
      parent.classList.toggle('active');
    });
  });
  
  
  
  
  
  document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      const isOpen = faqItem.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach((item) => item.classList.remove('active'));
      if (!isOpen) {
        faqItem.classList.add('active');
      }
    });
  });


  
let index = 0;

function showReview() {
    const slider = document.getElementById('slider');
    const totalReviews = document.querySelectorAll('.review').length;

    slider.style.transform = `translateX(${-index * 55}%)`;
}

function nextReview() {
    const totalReviews = document.querySelectorAll('.review').length - 4;
    index = (index + 1) % totalReviews; // Зацикливание
    showReview();
}

function prevReview() {
    const totalReviews = document.querySelectorAll('.review').length - 4;
    index = (index - 1 + totalReviews) % totalReviews; // Зацикливание
    showReview();
}