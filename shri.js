function toggleTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme');
  }


  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-left, .animate-right');
    for (let i = 0; i < elements.length; i++) {
      if (isElementInViewport(elements[i])) {
        elements[i].classList.add('show');
      }
    }
  }
  
  window.addEventListener('scroll', animateOnScroll);

//   idhr hmm logo ke through top me jana
const logo = document.querySelector('#logo'); // Replace "#logo" with the ID of your logo element

logo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// monomial

const testimonials = document.querySelector('.testimonial-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let counter = 1;
const size = testimonials.clientWidth / 3;

testimonials.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener('click', () => {
  if (counter >= testimonials.children.length - 1) return;
  testimonials.style.transition = "transform 0.5s ease-in-out";
  counter++;
  testimonials.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  testimonials.style.transition = "transform 0.5s ease-in-out";
  counter--;
  testimonials.style.transform = `translateX(${-size * counter}px)`;
});

testimonials.addEventListener('transitionend', () => {
    if (testimonials.children[counter].id === 'last-clone') {
      testimonials.style.transition = "none";
      counter = testimonials.children.length - 2;
      testimonials.style.transform = `translateX(${-size * counter}px)`;
    }
    if (testimonials.children[counter].id === 'first-clone') {
      testimonials.style.transition = "none";
      counter = testimonials.children.length - counter;
      testimonials.style.transform = `translateX(${-size * counter}px)`;
    }
  });
//   khjkjhk