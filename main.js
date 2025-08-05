window.onload = function () {
  // 🔁 تدوير الصور الخلفية تلقائيًا

  const images = [
    'images/Airport_transfer_bg.jpg',
    'images/Business_bag_bg.jpg',
    'images/Training_rooms_bg.jpg'
  ];

  let current = 0; // المؤشر الحالي للصورة
  let next = 1;    // المؤشر التالي للصورة

  // الحصول على عناصر الخلفية
  let bg1 = document.getElementById('bg1');
  let bg2 = document.getElementById('bg2');

  // تحميل أول صورة في العنصر الأول
  bg1.style.backgroundImage = `url('${images[current]}')`;
  bg1.classList.add('visible');

  // تغيير الصورة كل 3 ثوانٍ
  setInterval(() => {
    const nextImage = images[next];

    // تحميل الصورة التالية في العنصر الثاني
    bg2.style.backgroundImage = `url('${nextImage}')`;
    bg2.classList.add('visible');

    // بعد التلاشي، إخفاء العنصر الأول
    setTimeout(() => {
      bg1.classList.remove('visible');

      // تبادل الأدوار بين العنصرين
      const temp = bg1;
      bg1 = bg2;
      bg2 = temp;
    }, 1000); // مدة التلاشي (1 ثانية)

    // تحديث المؤشرات
    current = next;
    next = (next + 1) % images.length;
  }, 3000); // مدة التبديل (3 ثوانٍ)

  // 📖 زر "اقرأ المزيد / اقرأ أقل" لقسم "عن العربية"

  const toggleBtn = document.getElementById("toggle-button"); // الزر
  const fullText = document.getElementById("about-full");     // النص الكامل
  const shortText = document.getElementById("about-short");   // النص المختصر

  // التأكد من وجود العناصر قبل تنفيذ الكود
  if (toggleBtn && fullText && shortText) {
    toggleBtn.addEventListener("click", () => {
      // إذا كان النص الكامل مخفيًا، أظهره وأخفِ المختصر
      if (fullText.style.display === "none") {
        fullText.style.display = "block";
        shortText.style.display = "none";
        toggleBtn.textContent = "Read Less"; // تغيير نص الزر
      } else {
        // إذا كان النص الكامل ظاهرًا، أخفِه وأظهر المختصر
        fullText.style.display = "none";
        shortText.style.display = "block";
        toggleBtn.textContent = "Read More"; // تغيير نص الزر
      }
    });
  }

  // 🏆 عداد الإنجازات (بحركة متوازنة حسب حجم الرقم)

  const counters = document.querySelectorAll('.counter'); // جميع عناصر العداد

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target'); // الرقم النهائي
    const isPercent = counter.classList.contains('percent'); // هل هو نسبة مئوية؟

    let current = 0;
    const duration = 2000; // مدة العد كاملة (2 ثانية)
    const interval = 20;   // مدة كل تحديث (20 مللي ثانية)
    const steps = duration / interval; // عدد التحديثات
    const increment = target / steps;  // مقدار الزيادة في كل تحديث

    // دالة التحديث التدريجي
    const updateCount = () => {
      current += increment;

      if (current < target) {
        const displayValue = Math.floor(current);
        counter.innerText = isPercent ? `${displayValue}%` : displayValue;
        setTimeout(updateCount, interval);
      } else {
        // تأكيد الوصول للرقم النهائي
        counter.innerText = isPercent ? `${target}%` : target;
      }
    };

    // بدء العد لكل عنصر
    updateCount();
  });
};
