window.onload = function () {
  // 🔁 Background image rotation (if present)
  const images = [
    'images/Training_Rooms_2_bg.jpg',
    'images/Conference_Service_2_bg.jpg',
    'images/Training_rooms_bg.jpg',
    'images/Airport_transfer_bg.jpg',
    'images/Business_bag_bg.jpg',
    'images/Expert_Trainer_bg.jpg',
  ];
  let current = 0;
  let next = 1;

  let bg1 = document.getElementById('bg1');
  let bg2 = document.getElementById('bg2');

  if (bg1 && bg2) {
    bg1.style.backgroundImage = `url('${images[current]}')`;
    bg1.classList.add('visible');

    const dots = document.querySelectorAll('.dot');
    if (dots.length) {
      dots[current].classList.add('active');

      let intervalId = setInterval(() => {
        const nextImage = images[next];
        bg2.style.backgroundImage = `url('${nextImage}')`;
        bg2.classList.add('visible');
        setTimeout(() => {
          bg1.classList.remove('visible');
          const temp = bg1;
          bg1 = bg2;
          bg2 = temp;
        }, 1000);
        current = next;
        next = (next + 1) % images.length;
        dots.forEach(d => d.classList.remove('active'));
        dots[current].classList.add('active');
      }, 3000);

      dots.forEach(dot => {
        dot.addEventListener('click', () => {
          const index = +dot.getAttribute('data-index');
          bg1.style.backgroundImage = `url('${images[index]}')`;
          bg1.classList.add('visible');
          bg2.classList.remove('visible');
          current = index;
          next = (index + 1) % images.length;
          dots.forEach(d => d.classList.remove('active'));
          dot.classList.add('active');
          clearInterval(intervalId); // Stop auto-rotation when a dot is clicked
        });
      });
    }
  }

  // 📖 Read more/less button for About section
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

  // 🏆 Achievements counter
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

  // ==== Typewriter Effect ====
  let typeWriterTimeout = null;
  function typeWriter(text) {
    const typedTextElement = document.getElementById('typed-text');
    if (!typedTextElement) return;
    // Cancel any previous animation
    if (typeWriterTimeout) {
      clearTimeout(typeWriterTimeout);
      typeWriterTimeout = null;
    }
    typedTextElement.textContent = '';
    let i = 0;
    function typing() {
      if (i < text.length) {
        typedTextElement.textContent += text.charAt(i);
        i++;
        typeWriterTimeout = setTimeout(typing, 18);
      } else {
        typeWriterTimeout = null;
      }
    }
    typing();
  }

  // ==== Translations ====
  const translations = {
    ar: {
      title: 'مرحبا بكم في العربية',
  subtitle: '<img src="https://flagcdn.com/w20/tr.png" alt="تركيا" style="vertical-align:middle; margin-right:6px;" /> شريككم الموثوق في التدريب والفعاليات في تركيا',
      navHome: 'الرئيسية',
      navAbout: 'من نحن',
      navServices: 'خدماتنا',
      navGallery: 'معرض الصور',
      navAchievements: 'إنجازاتنا',
      navPartners: 'شركاؤنا',
      navContact: 'تواصل معنا',
      servicesTitle: 'خدماتنا',
      service1Title: 'افضل المدربين بكافة القطاعات التدريبية',
      service1Extra: '🌐www.alarabiats.com',
      service1Contact: '✉️info@alarabiats.com',
      service2Title: 'لدينا افضل القاعات التدريبيةالمميزة',
      service2Extra: '🌐www.alarabiats.com',
      service2Contact: '✉️info@alarabiats.com',
      service3Title: 'تنظيم المؤتمرات',
      service3Extra: '🌐www.alarabiats.com',
      service3Contact: '✉️info@alarabiats.com',
      service4Title: 'حقائب تدريبية للمتدربين',
      service4Extra: '🌐www.alarabiats.com',
      service4Contact: '✉️info@alarabiats.com',
      service5Title: 'حجز الفنادق بأفضل الأسعار',
      service5Extra: '🌐www.alarabiats.com',
      service5Contact: '✉️info@alarabiats.com',
      service6Title: 'الاستقبال و التوديع بالمطار',
      service6Extra: '🌐www.alarabiats.com',
      service6Contact: '✉️info@alarabiats.com',
      service7Title: 'حجز طيران',
      service7Extra: '🌐www.alarabiats.com',
      service7Contact: '✉️info@alarabiats.com',
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
      achievementsHeading: 'إنجازاتنا',
      achievementLabels: [
        'سنوات من الخبرة',
        'عدد الدورات المقدمة',
        'معدل رضا العملاء'
      ],
      partnersHeading: 'شركاؤنا',
      partnersDescription: 'ثقتهم فخر لنا — شركاؤنا من بين المؤسسات الرائدة في العالم.',
      serviceDescriptions: {
        expertTrainer: `افضل المدربين بكافة القطاعات التدريبية

في العربية لخدمات التدريب والمؤتمرات، يقدم مدربونا الخبراء سنوات من الخبرة والمعرفة العميقة في كل جلسة تدريبية. نختار بعناية محترفين هم رواد في مجالاتهم لضمان أن يكون تدريبكم مؤثراً وملائماً.

يستخدم مدربونا أساليب حديثة وتقنيات تفاعلية لتحفيز المشاركين وتعظيم نتائج التعلم.

مع العربية، تستفيد من تدريب عالي الجودة يقدمه خبراء شغوفون ملتزمون بنجاحك.`,
        trainingRooms: `لدينا افضل القاعات التدريبية المميزة

توفر العربية لخدمات التدريب والمؤتمرات غرف تدريب مجهزة بالكامل مصممة للراحة والإنتاجية. تتميز قاعاتنا بتقنيات حديثة وتصاميم مرنة وأجواء احترافية تدعم جميع أنواع الدورات وورش العمل.

نتولى جميع الجوانب اللوجستية من التجهيز إلى الدعم الفني، لتتمكن من التركيز على برنامجك.

مع العربية، استمتع بتجربة تدريب سلسة في أماكن مصممة خصيصاً لاحتياجاتك.`,
        conferenceService: `خدمات تنظيم المؤتمرات

تتخصص العربية لخدمات التدريب والمؤتمرات في تنظيم المؤتمرات الاحترافية بمختلف الأحجام. من اختيار المكان والترتيبات اللوجستية إلى تنسيق المتحدثين والإدارة الميدانية، يضمن فريقنا تنفيذ كل التفاصيل بدقة.

نقدم حلولاً متكاملة تشمل التسجيل، الدعم الفني، وخدمات الضيافة.

مع العربية، يُقام مؤتمرك بسلاسة ويترك أثراً إيجابياً لدى جميع الحضور.`,
        trainingKits: `حقائب تدريبية للمتدربين

في العربية لخدمات التدريب والمؤتمرات، نقدم حقائب تدريبية شاملة تتضمن جميع المواد الأساسية لجلساتك. يتم تخصيص كل حقيبة حسب برنامجك وقد تشمل كتيبات عمل، أدوات مكتبية، موارد رقمية، ومنتجات تحمل شعارك.

نولي اهتماماً كبيراً بالتفاصيل لضمان تجهيز كل مشارك لتجربة تعلم فعالة.

مع العربية، يحصل تدريبك على دعم مواد عالية الجودة تُسلم في الوقت المناسب، في كل مرة.`,
        airportTransfer: `في العربية لخدمات التدريب والمؤتمرات، نجعل رحلتك سلسة من البداية إلى النهاية. خدماتنا الاحترافية للنقل من وإلى المطار تضمن انتقالات مريحة وفي الوقت المناسب إلى الفنادق أو أماكن التدريب.

فريقنا اللطيف يستقبلك في المطار ويتولى جميع الترتيبات اللوجستية، لتتمكن من التركيز على فعاليتك دون أي توتر.

مع العربية، استمتع بتجربة سفر خالية من المتاعب، حيث يحظى كل ضيف برعاية واهتمام من لحظة الوصول وحتى المغادرة.`,
        flightBooking: `حجز طيران

في العربية لخدمات التدريب والمؤتمرات، نجعل رحلتك سلسة من البداية إلى النهاية. خدماتنا الاحترافية لحجز الرحلات تضمن ترتيبات سفر مريحة وفي الوقت المناسب لفعاليتك أو تدريبك.

فريقنا اللطيف يتولى جميع الترتيبات اللوجستية، لتتمكن من التركيز على فعاليتك دون أي توتر.

مع العربية، استمتع بتجربة سفر خالية من المتاعب، حيث يحظى كل ضيف برعاية واهتمام من الحجز وحتى الوصول.`,
        hotelBooking: `حجز الفنادق بأفضل الأسعار

في العربية لخدمات التدريب والمؤتمرات، نقدم خدمة حجز الفنادق بسلاسة واحترافية، سواء كنت تفضل الفنادق الفاخرة أو الخيارات الاقتصادية. شراكاتنا القوية في جميع أنحاء تركيا تتيح لنا تأمين أفضل أماكن الإقامة بأفضل الأسعار.

فريقنا يتولى جميع التفاصيل — من اختيار الغرف والحجوزات الجماعية إلى تسجيل الوصول المبكر أو المغادرة المتأخرة وتلبية الطلبات الخاصة — كل ذلك بما يتناسب مع موقع برنامجك وجدوله الزمني.

مع العربية، استمتع بإقامة خالية من المتاعب تدعم نجاح تدريبك أو مؤتمرك، مع دعم موثوق واهتمام دقيق بكل التفاصيل.`,
        airportPickup: `الاستقبال و التوديع بالمطار

في العربية لخدمات التدريب والمؤتمرات، نقدم خدمة استقبال احترافية في المطار لضمان بداية مريحة لرحلتك. فريقنا ينتظرك عند الوصول، يساعدك في الأمتعة، ويوفر لك وسيلة نقل آمنة وسريعة إلى الفندق أو مكان التدريب.

نحن نهتم بكل التفاصيل من لحظة وصولك حتى استقرارك، لتبدأ فعاليتك أو تدريبك براحة واطمئنان.

مع العربية، استمتع باستقبال دافئ وخدمة موثوقة من أول خطوة في تركيا.`
      }
    },
    en: {
      title: 'Welcome to Alarabia',
  subtitle: 'Your Trusted Partner in Professional Training and Events in Turkey <img src="https://flagcdn.com/w20/tr.png" alt="Turkey Flag" style="vertical-align:middle; margin-left:6px;" />',
      navHome: 'Home',
      navAbout: 'About',
      navServices: 'Our Services',
      navGallery: 'Gallery',
      navAchievements: 'Our Achievements',
      navPartners: 'Our Partners',
      navContact: 'Contact',
      servicesTitle: 'Our Services',
      service1Title: 'Providing Best Lectures',
      service1Extra: '🌐www.alarabiats.com',
      service1Contact: '✉️info@alarabiats.com',
      service2Title: 'Comfortable Training Rooms',
      service2Extra: '🌐www.alarabiats.com',
      service2Contact: '✉️info@alarabiats.com',
      service3Title: 'Conference Services',
      service3Extra: '🌐www.alarabiats.com',
      service3Contact: '✉️info@alarabiats.com',
      service4Title: 'Training Kits',
      service4Extra: '🌐www.alarabiats.com',
      service4Contact: '✉️info@alarabiats.com',
      service5Title: 'Hotel Bookings',
      service5Extra: '🌐www.alarabiats.com',
      service5Contact: '✉️info@alarabiats.com',
      service6Title: 'Airport Transfers',
      service6Extra: '🌐www.alarabiats.com',
      service6Contact: '✉️info@alarabiats.com',
      service7Title: 'Flight Booking',
      service7Extra: '🌐www.alarabiats.com',
      service7Contact: '✉️info@alarabiats.com',
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
      achievementsHeading: 'Our Achievements',
      achievementLabels: [
        'Years of Experience',
        'Number of Courses Offered',
        'Customer Satisfaction Rate'
      ],
      partnersHeading: 'Our Partners',
      partnersDescription: 'Their trust is our pride — our partners are among the world’s leading institutions.',
      serviceDescriptions: {
        expertTrainer: `Expert Trainer

At Alarabia for Training and Conference Services, our expert trainers bring years of experience and deep knowledge to every session. We carefully select professionals who are leaders in their fields to ensure your training is impactful and relevant.

Our trainers use modern methods and interactive techniques to engage participants and maximize learning outcomes.

With Alarabia, you benefit from high-quality training delivered by passionate experts dedicated to your success.`,
        trainingRooms: `Training Rooms

Alarabia for Training and Conference Services offers fully equipped training rooms designed for comfort and productivity. Our venues feature modern technology, flexible layouts, and a professional atmosphere to support all types of training and workshops.

We handle all logistics, from setup to technical support, so you can focus on your program.

With Alarabia, enjoy seamless training experiences in spaces tailored to your needs.`,
        conferenceService: `Conference Service

Alarabia for Training and Conference Services specializes in organizing professional conferences of all sizes. From venue selection and logistics to speaker coordination and on-site management, our team ensures every detail is handled with precision.

We offer end-to-end solutions, including registration, technical support, and hospitality services.

With Alarabia, your conference runs smoothly, leaving a lasting impression on every attendee.`,
        trainingKits: `Training Kits

At Alarabia for Training and Conference Services, we provide comprehensive training kits that include all essential materials for your sessions. Each kit is customized to your program and may include workbooks, stationery, digital resources, and branded items.

Our attention to detail ensures every participant is well-equipped for an effective learning experience.

With Alarabia, your training is supported by high-quality materials delivered on time, every time.`,
        airportTransfer: `At Alarabia for Training and Conference Services, we make your journey smooth from start to finish. Our professional airport pick-up and drop-off services ensure timely, comfortable transfers to and from hotels or training venues.

Our courteous team welcomes you at the airport and handles all logistics, so you can focus on your event without stress.

With Alarabia, enjoy a seamless, hassle-free travel experience, where every guest receives attentive care from arrival to departure.`,
        flightBooking: `Flight Booking

At Alarabia for Training and Conference Services, we make your journey smooth from start to finish. Our professional flight booking services ensure timely, comfortable travel arrangements for your training or event.

Our courteous team handles all logistics, so you can focus on your event without stress.

With Alarabia, enjoy a seamless, hassle-free travel experience, where every guest receives attentive care from booking to arrival.`,
        hotelBooking: `Hotel Booking

At Alarabia for Training and Conference Services, we offer seamless hotel booking tailored to your needs. Whether you prefer luxury hotels or budget-friendly options, our strong partnerships across Turkey allow us to secure the best accommodations at competitive rates.

Our dedicated team manages every detail — from room selection and group bookings to early check-ins, late check-outs, and special requests — all customized to fit your program’s location and schedule.

With Alarabia, enjoy a hassle-free stay that perfectly complements your training or conference, backed by reliable support and meticulous attention to detail.`,
        airportPickup: `Airport Pickup

At Alarabia for Training and Conference Services, we provide a professional airport pickup service to ensure a comfortable start to your journey. Our team greets you upon arrival, assists with your luggage, and provides safe, fast transportation to your hotel or training venue.

We take care of every detail from the moment you land until you are settled, so you can begin your event or training with peace of mind.

With Alarabia, enjoy a warm welcome and reliable service from your very first step in Turkey.`
      }
    }
  };

  // ====== DOM ELEMENTS FOR LANGUAGE SWITCHING (safe for all pages) ======
  const panelTitle = document.querySelector('.panel-title');
  const panelSubtitle = document.querySelector('.panel-subtitle');
  const navHome = document.getElementById('nav-home');
  const navAbout = document.getElementById('nav-about');
  const navServices = document.getElementById('nav-services');
  const navGallery = document.getElementById('nav-gallery');
  const navAchievements = document.getElementById('nav-achievements');
  const navPartners = document.getElementById('nav-partners');
  const navContact = document.getElementById('nav-contact');
  const servicesTitle = document.getElementById('services-title');
  const serviceTitles = [];
  const serviceExtras = [];
  const serviceContacts = [];
  for (let i = 1; i <= 7; i++) {
    serviceTitles.push(document.getElementById(`service${i}-title`));
    serviceExtras.push(document.getElementById(`service${i}-extra`));
    serviceContacts.push(document.getElementById(`service${i}-contact`));
  }
  const aboutTitle = document.getElementById('about-title');
  const aboutShort = document.getElementById('about-short');
  const aboutFull = document.getElementById('about-full');
  const toggleButton = document.getElementById('toggle-button');
  const achievementsSection = document.getElementById('our-achievements');
  const achievementsHeading = achievementsSection ? achievementsSection.querySelector('h2') : null;
  const achievementLabels = achievementsSection ? achievementsSection.querySelectorAll('p') : [];
  const partnersSection = document.getElementById('partners');
  const partnersHeading = document.getElementById('partners-heading');
  const partnersDescription = document.getElementById('partners-description');

  // ====== Language switching logic ======
  function setLanguage(lang) {
    document.documentElement.lang = lang;

    // Header
    if (panelTitle) panelTitle.textContent = translations[lang].title;
  if (panelSubtitle) panelSubtitle.innerHTML = translations[lang].subtitle;

    // Navigation
    if (navHome) navHome.textContent = translations[lang].navHome;
    if (navAbout) navAbout.textContent = translations[lang].navAbout;
    if (navServices) navServices.textContent = translations[lang].navServices;
    if (navGallery) navGallery.textContent = translations[lang].navGallery;
    if (navAchievements) navAchievements.textContent = translations[lang].navAchievements;
    if (navPartners) navPartners.textContent = translations[lang].navPartners;
    if (navContact) navContact.textContent = translations[lang].navContact;

    // Services
    if (servicesTitle) servicesTitle.textContent = translations[lang].servicesTitle;
    for (let i = 0; i < 7; i++) {
      if (serviceTitles[i]) serviceTitles[i].textContent = translations[lang][`service${i + 1}Title`];
      if (serviceExtras[i]) serviceExtras[i].textContent = translations[lang][`service${i + 1}Extra`];
      if (serviceContacts[i]) serviceContacts[i].textContent = translations[lang][`service${i + 1}Contact`];
    }

    // About
    if (aboutTitle) aboutTitle.textContent = translations[lang].aboutTitle;
    if (aboutShort) aboutShort.textContent = translations[lang].aboutShort;
    if (aboutFull) {
      aboutFull.innerHTML = translations[lang].aboutFull;
      aboutFull.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    }
    if (toggleButton) {
      toggleButton.textContent = translations[lang].toggleReadMore;
      toggleButton.addEventListener('click', () => {
        aboutFull.innerHTML = translations[lang].aboutFull;
        aboutFull.dir = (lang === 'ar') ? 'rtl' : 'ltr';
        toggleButton.textContent = translations[lang].toggleReadLess;
      });
    }

    // Achievements
    if (achievementsHeading) achievementsHeading.textContent = translations[lang].achievementsHeading;
    if (achievementLabels.length === 3) {
      achievementLabels.forEach((label, index) => {
        label.textContent = translations[lang].achievementLabels[index];
      });
    }
    if (achievementsSection) {
      achievementsSection.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    }

    // Partners
    if (partnersHeading) partnersHeading.textContent = translations[lang].partnersHeading;
    if (partnersDescription) partnersDescription.textContent = translations[lang].partnersDescription;
    if (partnersSection) partnersSection.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Service pages: all services
    const typedTextElement = document.getElementById('typed-text');
    const pageId = document.body.getAttribute('data-service');
    if (typedTextElement && translations[lang].serviceDescriptions?.[pageId]) {
      typeWriter(translations[lang].serviceDescriptions[pageId]);
      typedTextElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
      typedTextElement.style.textAlign = (lang === 'ar') ? 'right' : 'left';
    }

    // Return to home button (if present)
    const returnBtn = document.querySelector('.back-home-btn');
    if (returnBtn) {
      returnBtn.innerHTML = (lang === 'ar')
        ? '<i class="bi bi-house-fill"></i> العودة للصفحة الرئيسية'
        : '<i class="bi bi-house-fill"></i> Return to Home Page';
    }
  }


  // Language switcher buttons (desktop)
  const btnAr = document.getElementById('lang-ar');
  const btnEn = document.getElementById('lang-en');
  if (btnAr) btnAr.addEventListener('click', () => {
    localStorage.setItem('alarabiaLang', 'ar');
    setLanguage('ar');
  });
  if (btnEn) btnEn.addEventListener('click', () => {
    localStorage.setItem('alarabiaLang', 'en');
    setLanguage('en');
  });

  // Language switcher buttons (mobile)
  const btnArMobile = document.getElementById('lang-ar-mobile');
  const btnEnMobile = document.getElementById('lang-en-mobile');
  if (btnArMobile) btnArMobile.addEventListener('click', () => {
    localStorage.setItem('alarabiaLang', 'ar');
    setLanguage('ar');
    // Close navbar after switching language
    var navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      var bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
      bsCollapse.hide();
    }
  });
  if (btnEnMobile) btnEnMobile.addEventListener('click', () => {
    localStorage.setItem('alarabiaLang', 'en');
    setLanguage('en');
    // Close navbar after switching language
    var navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      var bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
      bsCollapse.hide();
    }
  });

  // On load, use saved language or default to English
  const savedLang = localStorage.getItem('alarabiaLang') || 'en';
  setLanguage(savedLang);

  // Close navbar on mobile when any menu link is clicked
  document.querySelectorAll('.navbar-nav .nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      var navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        var bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
        bsCollapse.hide();
      }
    });
  });

  // === PARTNER LIGHTBOX LOGIC ===
  const partnerImages = Array.from(document.querySelectorAll('#partners .partner-logo'));
  const partnerLightbox = document.getElementById('partner-lightbox');
  const partnerLightboxImg = document.getElementById('partner-lightbox-img');
  const partnerLightboxCaption = document.getElementById('partner-lightbox-caption');
  const partnerCloseBtn = document.getElementById('partner-lightbox-close');
  const partnerPrevBtn = document.getElementById('partner-lightbox-prev');
  const partnerNextBtn = document.getElementById('partner-lightbox-next');

  let partnerCurrentIndex = 0;

  partnerImages.forEach((img, i) => {
    img.addEventListener('click', () => {
      partnerCurrentIndex = i;
      openPartnerLightbox();
    });
  });

  function openPartnerLightbox() {
    partnerLightbox.style.display = 'flex';
    updatePartnerLightbox();
  }

  function closePartnerLightbox() {
    partnerLightbox.style.display = 'none';
  }

  function updatePartnerLightbox() {
    partnerLightboxImg.src = partnerImages[partnerCurrentIndex].src;
    partnerLightboxCaption.textContent = `Partner ${partnerCurrentIndex + 1} of ${partnerImages.length}`;
  }

  function showPartnerPrev() {
    partnerCurrentIndex = (partnerCurrentIndex - 1 + partnerImages.length) % partnerImages.length;
    updatePartnerLightbox();
  }

  function showPartnerNext() {
    partnerCurrentIndex = (partnerCurrentIndex + 1) % partnerImages.length;
    updatePartnerLightbox();
  }

  partnerCloseBtn.addEventListener('click', closePartnerLightbox);
  partnerPrevBtn.addEventListener('click', showPartnerPrev);
  partnerNextBtn.addEventListener('click', showPartnerNext);

  partnerLightbox.addEventListener('click', (e) => {
    if (e.target === partnerLightbox) closePartnerLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (partnerLightbox.style.display === 'flex') {
      if (e.key === 'Escape') closePartnerLightbox();
      if (e.key === 'ArrowLeft') showPartnerPrev();
      if (e.key === 'ArrowRight') showPartnerNext();
    }
  });
};