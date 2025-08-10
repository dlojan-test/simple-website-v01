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

  // ✅ الحصول على النقاط
  const dots = document.querySelectorAll('.dot');

  // ✅ تفعيل النقطة الأولى عند البداية
  dots[current].classList.add('active');

  // ✅ تغيير الصورة كل 3 ثوانٍ تلقائيًا
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

    // ✅ تحديث النقاط النشطة تلقائيًا
    dots.forEach(d => d.classList.remove('active'));
    dots[current].classList.add('active');
  }, 3000); // مدة التبديل (3 ثوانٍ)

  // ✅ تغيير الصورة يدويًا عند الضغط على النقاط
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = +dot.getAttribute('data-index');

      // تحميل الصورة المحددة يدويًا
      bg1.style.backgroundImage = `url('${images[index]}')`;
      bg1.classList.add('visible');
      bg2.classList.remove('visible');

      // تحديث المؤشرات
      current = index;
      next = (index + 1) % images.length;

      // تحديث النقاط النشطة
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });

  // 📖 زر "اقرأ المزيد / اقرأ أقل" لقسم "عن العربية"
  const toggleBtn = document.getElementById("toggle-button");
  const fullText = document.getElementById("about-full");
  const shortText = document.getElementById("about-short");

  if (toggleBtn && fullText && shortText) {
    toggleBtn.addEventListener("click", () => {
      if (fullText.style.display === "none") {
        fullText.style.display = "block";
        shortText.style.display = "none";
        toggleBtn.textContent = "Read Less";
      } else {
        fullText.style.display = "none";
        shortText.style.display = "block";
        toggleBtn.textContent = "Read More";
      }
    });
  }

  // 🏆 عداد الإنجازات
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const isPercent = counter.classList.contains('percent');

    let current = 0;
    const duration = 5000;
    const interval = 20;
    const steps = duration / interval;
    const increment = target / steps;

    const updateCount = () => {
      current += increment;
      if (current < target) {
        const displayValue = Math.floor(current);
        counter.innerText = isPercent ? `${displayValue}%` : displayValue;
        setTimeout(updateCount, interval);
      } else {
        counter.innerText = isPercent ? `${target}%` : target;
      }
    };

    updateCount();
  });


// ======= دعم تغيير اللغة للنصوص (دون تغيير الاتجاه) =======

// عناصر النصوص التي سنغيرها (تأكد من وجودها في HTML)
const panelTitle = document.querySelector('.panel-title');
const panelSubtitle = document.querySelector('.panel-subtitle');

// عناصر قائمة التنقل (تأكد من وجود id لكل عنصر في HTML)
const navHome = document.getElementById('nav-home');
const navAbout = document.getElementById('nav-about');
const navServices = document.getElementById('nav-services');
const navGallery = document.getElementById('nav-gallery');
const navAchievements = document.getElementById('nav-achievements');
const navPartners = document.getElementById('nav-partners');
const navContact = document.getElementById('nav-contact');

// عناصر قسم الخدمات (معرفات الخدمة من 1 إلى 7)
const servicesTitle = document.getElementById('services-title');
const serviceTitles = [];
const serviceExtras = [];
const serviceContacts = [];
for(let i = 1; i <= 7; i++) {
  serviceTitles.push(document.getElementById(`service${i}-title`));
  serviceExtras.push(document.getElementById(`service${i}-extra`));
  serviceContacts.push(document.getElementById(`service${i}-contact`));
}

// عناصر قسم About Alarabia
const aboutTitle = document.getElementById('about-title');
const aboutShort = document.getElementById('about-short');
const aboutFull = document.getElementById('about-full');
const toggleButton = document.getElementById('toggle-button');

// عناصر قسم الإنجازات
const achievementsSection = document.getElementById('our-achievements');
const achievementsHeading = achievementsSection.querySelector('h2');
const achievementLabels = achievementsSection.querySelectorAll('p');

// عناصر قسم الشركاء
// قسم الشركاء
const partnersSection = document.getElementById('partners');
const partnersHeading = document.getElementById('partners-heading');
const partnersDescription = document.getElementById('partners-description');

// عناصر قسم الاتصال
//const contactHeading = document.getElementById('contact-Heading');


const translations = {
  ar: {
    // رأس الصفحة
    title: 'مرحبا بكم في العربية',
    subtitle: 'شريككم الموثوق في التدريب والفعاليات',
    navHome: 'الرئيسية',
    navAbout: 'من نحن',
    navServices: 'خدماتنا',
    navGallery: 'معرض الصور',
    navAchievements: 'إنجازاتنا',
    navPartners: 'شركاؤنا',
    navContact: 'تواصل معنا',

    // خدمات
    servicesTitle: 'خدماتنا',
    service1Title: 'مدرب خبير',
    service1Extra: 'العربية لخدمات التدريب',
    service1Contact: 'info@alarabiats.com',

    service2Title: 'غرف تدريب',
    service2Extra: 'العربية لخدمات التدريب',
    service2Contact: 'info@alarabiats.com',

    service3Title: 'تخطيط المؤتمرات',
    service3Extra: 'العربية لخدمات التدريب',
    service3Contact: 'info@alarabiats.com',

    service4Title: 'حقيبة أعمال',
    service4Extra: 'العربية لخدمات التدريب',
    service4Contact: 'info@alarabiats.com',

    service5Title: 'حجز فنادق',
    service5Extra: 'العربية لخدمات التدريب',
    service5Contact: 'info@alarabiats.com',

    service6Title: 'نقل المطار',
    service6Extra: 'العربية لخدمات التدريب',
    service6Contact: 'info@alarabiats.com',

    service7Title: 'حجز رحلات',
    service7Extra: 'العربية لخدمات التدريب',
    service7Contact: 'info@alarabiats.com',

    // قسم من نحن (About Alarabia)
    aboutTitle: 'من نحن',
    aboutShort: 'لقد عملنا مع العديد من الشركات الرائدة والمنظمات المتنوعة. كل فعالية أُنجزت بدقة واحترافية...',
    aboutFull: `
      <p>
        لقد عملنا مع العديد من الشركات الرائدة والمنظمات المتنوعة. كل فعالية أُنجزت بدقة واحترافية، مما انعكس على نتائج وتجارب عملائنا. نقوم باستمرار بتوثيق وتقييم أعمالنا داخلياً لدعم التحسين المستمر وضمان جودة الخدمة.
      </p>
      <p>
        نقدم مجموعة شاملة من الخدمات، بما في ذلك:
        <ul>
          <li>تخطيط وتنسيق برامج تدريب متخصصة</li>
          <li>توفير مدربين خبراء ومحترفين</li>
          <li>الدعم اللوجستي الكامل بما في ذلك الحجز والتنظيم الميداني</li>
          <li>خدمات الترجمة والمرافقة اللغوية</li>
          <li>خدمات النقل من وإلى المطار</li>
          <li>رحلات سياحية منظمة كجزء من البرنامج</li>
          <li>خدمات إضافية مصممة حسب الطلب واحتياجات الفعالية</li>
        </ul>
      </p>
      <p>
        في العربية لخدمات التدريب والمؤتمرات، نولي اهتماماً خاصاً للحفاظ على خصوصية البرامج المقدمة وحماية معلومات عملائنا. نحن ملتزمون بالتعامل مع كافة البيانات والمحتويات بعناية واحترام، لضمان شعور شركائنا بالثقة والأمان في كل مرحلة من التعاون.
      </p>
      <p>
        جميع خدماتنا تُنفذ بواسطة فريق محترف وذو خبرة، ملتزم بأعلى معايير الجودة والدقة لضمان تجربة فريدة واستثنائية لعملائنا.
      </p>
      <p>
        في العربية لخدمات التدريب والمؤتمرات، لا ننظم فقط فعاليات ناجحة — بل نطمح لأن نكون شركاء نجاح حقيقيين لعملائنا، مقدمين بيئة تدريب ملهمة وتجربة سفر متكاملة وسلسة في جميع أنحاء تركيا.
      </p>
    `,
    toggleReadMore: 'اقرأ المزيد',
    toggleReadLess: 'اقرأ أقل',

    // قسم الإنجازات
    achievementsHeading: 'إنجازاتنا',
    achievementLabels: [
    'سنوات من الخبرة',
    'عدد الدورات المقدمة',
    'معدل رضا العملاء'
  ],

    // قسم الشركاء
    partnersHeading: 'شركاؤنا',
    partnersDescription: 'ثقتهم فخر لنا — شركاؤنا من بين المؤسسات الرائدة في العالم.',
  },

  // قسم الاتصال
    contactLocationLabel: 'الموقع',
    contactHeading: 'تواصل معنا الآن!',

  en: {
    // رأس الصفحة
    title: 'Welcome to Alarabia',
    subtitle: 'Your Trusted Partner in Professional Training and Events',
    navHome: 'Home',
    navAbout: 'About',
    navServices: 'Our Services',
    navGallery: 'Gallery',
    navAchievements: 'Our Achievements',
    navPartners: 'Our Partners',
    navContact: 'Contact',

    // خدمات
    servicesTitle: 'Our Services',
    service1Title: 'Expert Trainer',
    service1Extra: 'ALARABIA FOR TRAINING SERVICES',
    service1Contact: 'info@alarabiats.com',

    service2Title: 'Training Rooms',
    service2Extra: 'ALARABIA FOR TRAINING SERVICES',
    service2Contact: 'info@alarabiats.com',

    service3Title: 'Conference Planning',
    service3Extra: 'ALARABIA FOR TRAINING SERVICES',
    service3Contact: 'info@alarabiats.com',

    service4Title: 'Business Bag',
    service4Extra: 'ALARABIA FOR TRAINING SERVICES',
    service4Contact: 'info@alarabiats.com',

    service5Title: 'Hotel Booking',
    service5Extra: 'ALARABIA FOR TRAINING SERVICES',
    service5Contact: 'info@alarabiats.com',

    service6Title: 'Airport Transfer',
    service6Extra: 'ALARABIA FOR TRAINING SERVICES',
    service6Contact: 'info@alarabiats.com',

    service7Title: 'Flight Booking',
    service7Extra: 'ALARABIA FOR TRAINING SERVICES',
    service7Contact: 'info@alarabiats.com',

    // قسم من نحن (About Alarabia)
    aboutTitle: 'About Alarabia',
    aboutShort: 'We have worked with numerous leading companies and diverse organizations. Each event we’ve handled has been delivered with precision and professionalism...',
    aboutFull: `
      <p>
        We have worked with numerous leading companies and diverse organizations. Each event we’ve handled has been delivered with precision and professionalism, reflecting in the results and experiences of our clients. We consistently document and evaluate our work internally to support continuous improvement and ensure service quality.
      </p>
      <p>
        We offer a comprehensive range of services, including:
        <ul>
          <li>Planning and coordinating specialized training programs</li>
          <li>Providing expert and professional trainers</li>
          <li>Complete logistical support including booking and on-ground organization</li>
          <li>Translation services and language accompaniment</li>
          <li>Airport pick-up and drop-off services</li>
          <li>Organized touristic trips as part of the program</li>
          <li>Additional services tailored to specific requests and event needs</li>
        </ul>
      </p>
      <p>
        At Alarabia for Training and Conference Services, we give special attention to maintaining the privacy of the programs we deliver and safeguarding our clients’ information. We are committed to handling all data and content with care and respect, ensuring our partners feel confident and secure at every stage of our collaboration.
      </p>
      <p>
        All our services are carried out by a professional and experienced team, dedicated to the highest standards of quality and accuracy to guarantee a unique and exceptional experience for our clients.
      </p>
      <p>
        At Alarabia for Training and Conference Services, we don’t just organize successful events — we aim to become true success partners for our clients, providing an inspiring training environment and a smooth, integrated travel experience throughout Turkey.
      </p>
    `,
    toggleReadMore: 'Read More',
    toggleReadLess: 'Read Less',

    // قسم الإنجازات
    achievementsHeading: 'Our Achievements',
    achievementLabels: [
      'Years of Experience',
      'Number of Courses Offered',
      'Customer Satisfaction Rate'
    ],

    // قسم الشركاء
    partnersHeading: 'Our Partners',
    partnersDescription: 'Their trust is our pride — our partners are among the world’s leading institutions.', 

  // قسم الاتصال  
    contactLocationLabel: 'Location',
    contactHeading: 'Get In Touch With Us Now!',
  }
};

function setLanguage(lang) {
  // تعيين لغة المستند (HTML lang attribute)
  document.documentElement.lang = lang;

  // تحديث نصوص الرأس
  if (panelTitle) panelTitle.textContent = translations[lang].title;
  if (panelSubtitle) panelSubtitle.textContent = translations[lang].subtitle;

  // تحديث نصوص القائمة
  if (navHome) navHome.textContent = translations[lang].navHome;
  if (navAbout) navAbout.textContent = translations[lang].navAbout;
  if (navServices) navServices.textContent = translations[lang].navServices;
  if (navGallery) navGallery.textContent = translations[lang].navGallery;
  if (navAchievements) navAchievements.textContent = translations[lang].navAchievements;
  if (navPartners) navPartners.textContent = translations[lang].navPartners;
  if (navContact) navContact.textContent = translations[lang].navContact;

  // تحديث عنوان قسم الخدمات
  if (servicesTitle) servicesTitle.textContent = translations[lang].servicesTitle;

  // تحديث نصوص الخدمات 1 إلى 7
  for (let i = 0; i < 7; i++) {
    if (serviceTitles[i]) serviceTitles[i].textContent = translations[lang][`service${i + 1}Title`];
    if (serviceExtras[i]) serviceExtras[i].textContent = translations[lang][`service${i + 1}Extra`];
    if (serviceContacts[i]) serviceContacts[i].textContent = translations[lang][`service${i + 1}Contact`];
  }

  // تحديث قسم من نحن (About Alarabia)
  if (aboutTitle) aboutTitle.textContent = translations[lang].aboutTitle;
  if (aboutShort) aboutShort.textContent = translations[lang].aboutShort;
  if (aboutFull) aboutFull.innerHTML = translations[lang].aboutFull;
  if (aboutFull) {
    aboutFull.innerHTML = translations[lang].aboutFull;
    aboutFull.dir = (lang === 'ar') ? 'rtl' : 'ltr'; // ✅ تغيير الاتجاه
  }
  if (toggleButton) {
    toggleButton.textContent = translations[lang].toggleReadMore;
    toggleButton.addEventListener('click', () => {
      aboutFull.innerHTML = translations[lang].aboutFull;
      aboutFull.dir = (lang === 'ar') ? 'rtl' : 'ltr';
      toggleButton.textContent = translations[lang].toggleReadLess;
    });
  }

    // قسم الإنجازات
  if (achievementsHeading) achievementsHeading.textContent = translations[lang].achievementsHeading;

  if (achievementLabels.length === 3) {
    achievementLabels.forEach((label, index) => {
      label.textContent = translations[lang].achievementLabels[index];
    });
  }

  // تغيير اتجاه القسم بالكامل
  if (achievementsSection) {
    achievementsSection.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  }

  // قسم الشركاء
  // تحديث نصوص قسم الشركاء
  if (partnersHeading) partnersHeading.textContent = translations[lang].partnersHeading;
  if (partnersDescription) partnersDescription.textContent = translations[lang].partnersDescription;
  if (partnersSection) partnersSection.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // قسم الاتصال
  //if (contactHeading) contactHeading.textContent = translations[lang].contactHeading;

  //console.log('Selected language:', lang);
  //console.log(translations[lang].contactHeading); // هل النص موجود؟
}

// ربط أزرار تغيير اللغة
const btnAr = document.getElementById('lang-ar');
const btnEn = document.getElementById('lang-en');

if (btnAr) btnAr.addEventListener('click', () => setLanguage('ar'));
if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));


// تعيين اللغة الافتراضية عند تحميل الصفحة (يمكن تغيرها إلى 'ar' حسب رغبتك)
setLanguage('en');


};
