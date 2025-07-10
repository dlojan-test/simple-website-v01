// صور الخلفية المتغيرة
const images = [
  "images/image1.jpeg",
  "images/image2.jpg",
  "images/image3.jpg"
];

const bg1 = document.getElementById('bg1');
const bg2 = document.getElementById('bg2');

let currentIndex = 0;
let visibleBg = bg1;

// 🔘 إنشاء النقاط داخل .hero-nav
const heroNav = document.querySelector('.hero-nav');
images.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.dataset.bg = index;
  if (index === 0) dot.classList.add('active');
  heroNav.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateDots(index) {
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
}

function showBackground(index) {
  const hiddenBg = (visibleBg === bg1) ? bg2 : bg1;
  hiddenBg.style.backgroundImage = `url('${images[index]}')`;
  hiddenBg.classList.add('visible');
  visibleBg.classList.remove('visible');
  visibleBg = hiddenBg;
  currentIndex = index;
  updateDots(index);
}

function changeBackground() {
  const nextIndex = (currentIndex + 1) % images.length;
  showBackground(nextIndex);
}

// ✅ بدء الخلفية الأولى
bg1.style.backgroundImage = `url('${images[0]}')`;
bg1.classList.add('visible');

// 🔁 تشغيل تلقائي
let autoSlide = setInterval(changeBackground, 5000);

// ▶️ عند النقر على نقطة: تغيير الخلفية يدويًا
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(autoSlide);       // أوقف التلقائي مؤقتًا
    showBackground(index);
    autoSlide = setInterval(changeBackground, 5000); // أعد تشغيله
  });
});

// تحريك الأرقام في قسم الإنجازات
function animateCounter(counter) {
  const target = +counter.getAttribute('data-target');
  const increment = target / 200;
  let current = 0;

  function update() {
    current += increment;
    if (current < target) {
      counter.innerText = Math.ceil(current);
      requestAnimationFrame(update);
    } else {
      counter.innerText = counter.classList.contains('percent') ? `${target}%` : target;
    }
  }

  update();
}

function handleScroll() {
  const counters = document.querySelectorAll('.counter');
  const section = document.getElementById('our-achievements');
  const sectionTop = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100 && !section.classList.contains('started')) {
    section.classList.add('started');
    counters.forEach(counter => animateCounter(counter));
  }
}

window.addEventListener('scroll', handleScroll);

// زر "اقرأ المزيد" / "اقرأ أقل"
const toggleBtn = document.getElementById('toggle-btn');
const shortText = document.getElementById('about-short');
const fullText = document.getElementById('about-full');

toggleBtn.addEventListener('click', () => {
  const isHidden = fullText.style.display === 'none';
  fullText.style.display = isHidden ? 'block' : 'none';
  shortText.style.display = isHidden ? 'none' : 'block';
  toggleBtn.textContent = isHidden ? 'اقرأ أقل' : 'اقرأ المزيد';
});
