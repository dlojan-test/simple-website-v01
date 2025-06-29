// صور الخلفية المتغيرة
const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg"
];

const bg1 = document.getElementById('bg1');
const bg2 = document.getElementById('bg2');

let currentIndex = 0;
let visibleBg = bg1;

function changeBackground() {
  const nextIndex = (currentIndex + 1) % images.length;
  const hiddenBg = (visibleBg === bg1) ? bg2 : bg1;

  // حط الصورة القادمة في العنصر المخفي
  hiddenBg.style.backgroundImage = `url('${images[nextIndex]}')`;

  // خلي العنصر المخفي يظهر تدريجياً
  hiddenBg.classList.add('visible');
  // خفي العنصر الحالي تدريجياً
  visibleBg.classList.remove('visible');

  // حدث المرجع للعنصر الظاهر والاندكس
  visibleBg = hiddenBg;
  currentIndex = nextIndex;
}

// نبدأ بالصورة الأولى
bg1.style.backgroundImage = `url('${images[0]}')`;
bg1.classList.add('visible');

// تغيير الخلفية كل 5 ثواني
setInterval(changeBackground, 5000);

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
      counter.innerText = target;
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
