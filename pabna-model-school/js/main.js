/**
 * ==========================================================================
 * PABNA MODEL SCHOOL - OFFICIAL JAVASCRIPT
 * Nurturing Minds, Building Futures • Est. 1962
 * Pure Vanilla JavaScript (ES6+)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. NAVIGATION & MOBILE MENU CONTROLS
     -------------------------------------------------------------------------- */
  const header = document.getElementById('header');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navOverlay = document.getElementById('nav-overlay');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile navigation drawer
  function toggleMobileMenu() {
    const isActive = navMenu.classList.toggle('active');
    hamburgerBtn.classList.toggle('active');
    navOverlay.classList.toggle('active');
    hamburgerBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    document.body.style.overflow = isActive ? 'hidden' : '';
  }

  // Close mobile navigation drawer
  function closeMobileMenu() {
    navMenu.classList.remove('active');
    hamburgerBtn.classList.remove('active');
    navOverlay.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMobileMenu);
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeMobileMenu);
  }

  // Close mobile drawer when clicking any navigation link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        closeMobileMenu();
      }
    });
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      closeMobileMenu();
    }
  });

  /* --------------------------------------------------------------------------
     2. STICKY NAVBAR SCROLL EFFECT
     -------------------------------------------------------------------------- */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('navbar-scrolled');
    } else {
      header.classList.remove('navbar-scrolled');
    }
  }, { passive: true });

  /* --------------------------------------------------------------------------
     3. ACTIVE NAV LINK HIGHLIGHT ON SCROLL (SCROLLSPY)
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(currentSection => {
      const sectionHeight = currentSection.offsetHeight;
      const sectionTop = currentSection.offsetTop;
      const sectionId = currentSection.getAttribute('id');
      const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (correspondingLink) {
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          correspondingLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  /* --------------------------------------------------------------------------
     4. ANIMATED STATS COUNTER ON SCROLL (IntersectionObserver)
     -------------------------------------------------------------------------- */
  const counterElements = document.querySelectorAll('.counter-value');
  let countersAnimated = false;

  function animateCounters() {
    counterElements.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const duration = 2200; // Animation duration in milliseconds
      const startTime = performance.now();

      function updateCount(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out quad formula
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeOutProgress * target);

        counter.textContent = currentVal.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target.toLocaleString();
        }
      }

      requestAnimationFrame(updateCount);
    });
  }

  const statsSection = document.querySelector('.about-stats-panel');
  if (statsSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    statsObserver.observe(statsSection);
  } else {
    // Fallback if IntersectionObserver is unsupported
    animateCounters();
  }

  /* --------------------------------------------------------------------------
     5. LATEST NOTICE BOARD - CATEGORY FILTERING & MODAL
     -------------------------------------------------------------------------- */
  const noticeTabs = document.querySelectorAll('.notice-tab');
  const noticeItems = document.querySelectorAll('.notice-item');

  // Filter notices by tab
  noticeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      noticeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      noticeItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'flex';
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.transition = 'opacity 0.3s ease';
            item.style.opacity = '1';
          }, 10);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Notice Details Database for Modal View
  const noticeDetailsData = {
    '1': {
      title: 'Annual Examination Schedule 2025 Announced',
      category: 'Academic Notice',
      date: 'Published: November 15, 2026',
      content: `
        <p>This is to inform all students, honorable guardians, and teachers that the <strong>Annual Examinations for the Academic Session 2025</strong> for Class 6 through Class 9 will commence from <strong>December 01, 2026</strong>.</p>
        <p>Students must clear all outstanding institutional dues and collect their official examination admit cards from their respective class mentors no later than <strong>November 28, 2026</strong>.</p>
        <p>Key Examination Instructions:</p>
        <ul style="margin-left: 20px; margin-bottom: 15px; list-style-type: disc;">
          <li>All examinees must arrive inside the examination hall 20 minutes before the bell rings.</li>
          <li>Possession of smartphones, digital watches, or unauthorized revision papers is strictly prohibited.</li>
          <li>Practical science evaluations for secondary classes will take place from December 18 to December 22, 2026.</li>
        </ul>
        <p>The comprehensive subject-wise date sheet has also been affixed to the central campus notice board.</p>
      `
    },
    '2': {
      title: 'Admission Open for Academic Session 2027',
      category: 'Admissions Notice',
      date: 'Published: November 10, 2026',
      content: `
        <p>Pabna Model School cordially announces that admission procedures for the forthcoming <strong>Academic Session 2027</strong> are formally open for <strong>Class 1 to Class 11 (Science and Business Studies)</strong>.</p>
        <p>Prospective candidates can either submit their applications via the school's online admission portal or collect the physical registration booklet from the campus accounts department between 8:30 AM and 3:30 PM (Sunday to Thursday).</p>
        <p>Important Admissions Dates:</p>
        <ul style="margin-left: 20px; margin-bottom: 15px; list-style-type: disc;">
          <li>Application Deadline: December 15, 2026</li>
          <li>Written Assessment & Viva: December 20, 2026</li>
          <li>Merit List Publication: December 24, 2026</li>
          <li>Commencement of Session: January 06, 2027</li>
        </ul>
      `
    },
    '3': {
      title: 'Parent-Teacher Meeting (PTM) & Progress Report',
      category: 'Meeting Notice',
      date: 'Published: November 20, 2026',
      content: `
        <p>Respected Parents & Guardians,</p>
        <p>You are cordially requested to attend the upcoming <strong>Parent-Teacher Conference (PTM)</strong> scheduled for <strong>Thursday, November 26, 2026</strong> from 9:30 AM to 1:30 PM in the Grand Auditorium.</p>
        <p>The meeting is arranged to review mid-term diagnostic performance, continuous assessment feedback, attendance metrics, and individual student character development. Your active presence is deeply valued.</p>
      `
    },
    '4': {
      title: 'Annual Inter-School Science Fair 2026 Registration',
      category: 'Co-Curricular Event',
      date: 'Published: November 05, 2026',
      content: `
        <p>The Pabna Model School Science & Technology Club is delighted to announce the <strong>Annual Inter-School Science & Innovation Fair 2026</strong>, to be hosted on campus on December 12, 2026.</p>
        <p>Project Categories:</p>
        <ul style="margin-left: 20px; margin-bottom: 15px; list-style-type: disc;">
          <li>Junior Section (Class 6 - 8): Renewable Energy & Applied Physical Models</li>
          <li>Senior Section (Class 9 - 12): Robotics, AI & IoT, Biotechnology Solutions</li>
        </ul>
        <p>Teams comprising maximum 3 students should register their abstracts with the Science Laboratory in-charge by November 25, 2026.</p>
      `
    },
    '5': {
      title: 'Holiday Notice: Winter Vacation & New Year Break',
      category: 'Holiday Circular',
      date: 'Published: December 25, 2026',
      content: `
        <p>All students, faculty members, and administrative staff are hereby notified that Pabna Model School will observe <strong>Winter Break, Christmas, and New Year Holidays</strong> from <strong>December 25, 2026 to January 05, 2027</strong>.</p>
        <p>All academic classes and administrative operations will remain closed during this period. The school campus will resume regular academic routines on <strong>Monday, January 06, 2027</strong>.</p>
        <p>We wish all our learners, staff, and guardians a cheerful holiday season and a prosperous New Year.</p>
      `
    }
  };

  const noticeModal = document.getElementById('noticeModal');
  const noticeModalOverlay = document.getElementById('noticeModalOverlay');
  const noticeModalClose = document.getElementById('noticeModalClose');
  const closeNoticeBtn = document.getElementById('closeNoticeBtn');
  const modalNoticeCategory = document.getElementById('modalNoticeCategory');
  const modalNoticeDate = document.getElementById('modalNoticeDate');
  const modalNoticeTitle = document.getElementById('modalNoticeTitle');
  const modalNoticeContent = document.getElementById('modalNoticeContent');
  const viewNoticeButtons = document.querySelectorAll('.view-notice-btn');

  function openNoticeModal(noticeId) {
    const data = noticeDetailsData[noticeId];
    if (!data) return;

    modalNoticeCategory.textContent = data.category;
    modalNoticeDate.textContent = data.date;
    modalNoticeTitle.textContent = data.title;
    modalNoticeContent.innerHTML = data.content;

    noticeModal.classList.add('active');
    noticeModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeNoticeModal() {
    noticeModal.classList.remove('active');
    noticeModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  viewNoticeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const noticeId = btn.getAttribute('data-notice-id');
      openNoticeModal(noticeId);
    });
  });

  if (noticeModalClose) noticeModalClose.addEventListener('click', closeNoticeModal);
  if (closeNoticeBtn) closeNoticeBtn.addEventListener('click', closeNoticeModal);
  if (noticeModalOverlay) noticeModalOverlay.addEventListener('click', closeNoticeModal);

  /* --------------------------------------------------------------------------
     6. EVENTS & GALLERY - FILTERING & PURE JS LIGHTBOX
     -------------------------------------------------------------------------- */
  const galleryFilterBtns = document.querySelectorAll('.gallery-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxOverlay = document.getElementById('lightboxOverlay');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  const lightboxCardView = document.getElementById('lightboxCardView');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDescription = document.getElementById('lightboxDescription');
  const lightboxCounter = document.getElementById('lightboxCounter');

  let currentGalleryIndex = 0;
  let activeGalleryArray = Array.from(galleryItems);

  // Gallery category filter
  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-gallery-filter');

      activeGalleryArray = [];

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filter === 'all' || itemCategory === filter) {
          item.style.display = 'block';
          activeGalleryArray.push(item);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Render current lightbox slide
  function renderLightboxSlide(index) {
    if (activeGalleryArray.length === 0) return;

    if (index < 0) {
      currentGalleryIndex = activeGalleryArray.length - 1;
    } else if (index >= activeGalleryArray.length) {
      currentGalleryIndex = 0;
    } else {
      currentGalleryIndex = index;
    }

    const item = activeGalleryArray[currentGalleryIndex];
    const title = item.getAttribute('data-title');
    const desc = item.getAttribute('data-desc');
    const cardEl = item.querySelector('.gallery-card');
    const iconEl = item.querySelector('.gallery-icon-center i');

    // Get background class of original card
    const bgClass = Array.from(cardEl.classList).find(c => c.startsWith('bg-mesh-')) || 'bg-mesh-1';
    const iconClass = iconEl ? iconEl.className : 'fa-solid fa-graduation-cap';

    // Update Lightbox View
    lightboxCardView.className = `lightbox-card-view ${bgClass}`;
    lightboxCardView.innerHTML = `
      <div class="lightbox-view-inner">
        <i class="${iconClass}"></i>
        <h2 style="font-size: 1.8rem; font-weight: 700; color: #ffffff; margin-bottom: 8px;">${title}</h2>
        <span style="display: inline-block; padding: 4px 14px; background: rgba(255,255,255,0.2); border-radius: 9999px; font-size: 0.85rem; font-weight: 600;">Pabna Model School Campus Event</span>
      </div>
    `;

    lightboxTitle.textContent = title;
    lightboxDescription.textContent = desc;
    lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${activeGalleryArray.length}`;
  }

  function openLightbox(item) {
    const itemIndex = activeGalleryArray.indexOf(item);
    if (itemIndex !== -1) {
      currentGalleryIndex = itemIndex;
    } else {
      currentGalleryIndex = 0;
    }

    renderLightboxSlide(currentGalleryIndex);
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function nextLightbox() {
    renderLightboxSlide(currentGalleryIndex + 1);
  }

  function prevLightbox() {
    renderLightboxSlide(currentGalleryIndex - 1);
  }

  // Click handler for gallery items
  galleryItems.forEach(item => {
    item.addEventListener('click', () => openLightbox(item));
  });

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', nextLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', prevLightbox);

  // Keyboard navigation for Lightbox and Modals
  document.addEventListener('keydown', (e) => {
    if (lightboxModal.classList.contains('active')) {
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'Escape') closeLightbox();
    } else if (noticeModal.classList.contains('active')) {
      if (e.key === 'Escape') closeNoticeModal();
    }
  });

  /* --------------------------------------------------------------------------
     7. ADMISSION FORM VALIDATION & SUBMISSION
     -------------------------------------------------------------------------- */
  const admissionForm = document.getElementById('admissionForm');
  const studentNameInput = document.getElementById('studentName');
  const studentEmailInput = document.getElementById('studentEmail');
  const studentPhoneInput = document.getElementById('studentPhone');
  const gradeApplyingSelect = document.getElementById('gradeApplying');
  const dobInput = document.getElementById('dob');
  const guardianNameInput = document.getElementById('guardianName');
  const agreeTermsCheckbox = document.getElementById('agreeTerms');
  const submitAdmissionBtn = document.getElementById('submitAdmissionBtn');

  // Success Modal Elements
  const admissionSuccessModal = document.getElementById('admissionSuccessModal');
  const asmOverlay = document.getElementById('asmOverlay');
  const asmCloseBtn = document.getElementById('asmCloseBtn');
  const asmRefId = document.getElementById('asmRefId');
  const asmStudentName = document.getElementById('asmStudentName');
  const asmGrade = document.getElementById('asmGrade');
  const asmEmail = document.getElementById('asmEmail');

  // Helper validation functions
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).trim().toLowerCase());
  }

  function isValidPhone(phone) {
    // Allows standard Bangladesh phone formats (e.g. 01712345678, +8801712345678, or 10-14 digits)
    const cleanPhone = phone.replace(/[\s\-()]/g, '');
    const re = /^(?:\+?880|0)?1[3-9]\d{8}$/;
    return re.test(cleanPhone) || cleanPhone.length >= 10;
  }

  function setFieldError(fieldId, errorMsg) {
    const inputElement = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}Error`);
    if (inputElement) inputElement.classList.add('is-invalid');
    if (errorElement) errorElement.textContent = errorMsg;
  }

  function clearFieldError(fieldId) {
    const inputElement = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}Error`);
    if (inputElement) inputElement.classList.remove('is-invalid');
    if (errorElement) errorElement.textContent = '';
  }

  // Real-time input error clearing
  const validatedFields = [
    'studentName',
    'studentEmail',
    'studentPhone',
    'gradeApplying',
    'dob',
    'guardianName',
    'agreeTerms'
  ];

  validatedFields.forEach(fieldId => {
    const el = document.getElementById(fieldId);
    if (el) {
      el.addEventListener('input', () => clearFieldError(fieldId));
      el.addEventListener('change', () => clearFieldError(fieldId));
    }
  });

  // Admission Form submit handler
  if (admissionForm) {
    admissionForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      let firstErrorField = null;

      // 1. Student Name validation
      const studentNameVal = studentNameInput.value.trim();
      if (!studentNameVal) {
        setFieldError('studentName', 'Please enter the student\'s full name.');
        isValid = false;
        if (!firstErrorField) firstErrorField = studentNameInput;
      } else if (studentNameVal.length < 3) {
        setFieldError('studentName', 'Name must be at least 3 characters long.');
        isValid = false;
        if (!firstErrorField) firstErrorField = studentNameInput;
      } else {
        clearFieldError('studentName');
      }

      // 2. Email validation
      const emailVal = studentEmailInput.value.trim();
      if (!emailVal) {
        setFieldError('studentEmail', 'Parent/Guardian email is required.');
        isValid = false;
        if (!firstErrorField) firstErrorField = studentEmailInput;
      } else if (!isValidEmail(emailVal)) {
        setFieldError('studentEmail', 'Please enter a valid email address.');
        isValid = false;
        if (!firstErrorField) firstErrorField = studentEmailInput;
      } else {
        clearFieldError('studentEmail');
      }

      // 3. Phone validation
      const phoneVal = studentPhoneInput.value.trim();
      if (!phoneVal) {
        setFieldError('studentPhone', 'Active contact phone number is required.');
        isValid = false;
        if (!firstErrorField) firstErrorField = studentPhoneInput;
      } else if (!isValidPhone(phoneVal)) {
        setFieldError('studentPhone', 'Please enter a valid phone number (e.g. 01712345678).');
        isValid = false;
        if (!firstErrorField) firstErrorField = studentPhoneInput;
      } else {
        clearFieldError('studentPhone');
      }

      // 4. Grade selection validation
      if (!gradeApplyingSelect.value) {
        setFieldError('gradeApplying', 'Please select a grade/class to apply for.');
        isValid = false;
        if (!firstErrorField) firstErrorField = gradeApplyingSelect;
      } else {
        clearFieldError('gradeApplying');
      }

      // 5. Date of Birth validation
      if (!dobInput.value) {
        setFieldError('dob', 'Date of birth is required.');
        isValid = false;
        if (!firstErrorField) firstErrorField = dobInput;
      } else {
        clearFieldError('dob');
      }

      // 6. Guardian Name validation
      const guardianVal = guardianNameInput.value.trim();
      if (!guardianVal) {
        setFieldError('guardianName', 'Father\'s or Mother\'s name is required.');
        isValid = false;
        if (!firstErrorField) firstErrorField = guardianNameInput;
      } else if (guardianVal.length < 3) {
        setFieldError('guardianName', 'Guardian name must be at least 3 characters.');
        isValid = false;
        if (!firstErrorField) firstErrorField = guardianNameInput;
      } else {
        clearFieldError('guardianName');
      }

      // 7. Terms Agreement Checkbox
      if (!agreeTermsCheckbox.checked) {
        setFieldError('agreeTerms', 'You must confirm that the provided information is accurate.');
        isValid = false;
        if (!firstErrorField) firstErrorField = agreeTermsCheckbox;
      } else {
        clearFieldError('agreeTerms');
      }

      if (!isValid) {
        if (firstErrorField) firstErrorField.focus();
        showToast('Please correct the highlighted errors in the form.', 'error');
        return;
      }

      // Show processing state on submit button
      const btnText = submitAdmissionBtn.querySelector('.btn-text');
      const btnSpinner = submitAdmissionBtn.querySelector('.btn-spinner');
      btnText.style.display = 'none';
      btnSpinner.style.display = 'inline-flex';
      submitAdmissionBtn.disabled = true;

      // Simulate asynchronous server processing (1.2 seconds)
      setTimeout(() => {
        // Generate random 4-digit reference code
        const refCode = `PMS-2027-${Math.floor(1000 + Math.random() * 9000)}`;

        // Populate Success Modal
        asmRefId.textContent = refCode;
        asmStudentName.textContent = studentNameVal;
        asmGrade.textContent = gradeApplyingSelect.value;
        asmEmail.textContent = emailVal;

        // Reset submit button state
        btnText.style.display = 'inline-flex';
        btnSpinner.style.display = 'none';
        submitAdmissionBtn.disabled = false;

        // Open Success Modal
        admissionSuccessModal.classList.add('active');
        admissionSuccessModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        showToast('Admission application submitted successfully!', 'success');

        // Reset form inputs
        admissionForm.reset();
      }, 1200);
    });
  }

  // Close Admission Success Modal
  function closeSuccessModal() {
    admissionSuccessModal.classList.remove('active');
    admissionSuccessModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (asmCloseBtn) asmCloseBtn.addEventListener('click', closeSuccessModal);
  if (asmOverlay) asmOverlay.addEventListener('click', closeSuccessModal);

  /* --------------------------------------------------------------------------
     8. FLOATING BACK TO TOP BUTTON
     -------------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('backToTopBtn');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     9. TOAST NOTIFICATION HELPER
     -------------------------------------------------------------------------- */
  const toastContainer = document.getElementById('toastContainer');

  function showToast(message, type = 'info') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconHtml = '<i class="fa-solid fa-circle-info text-primary"></i>';
    if (type === 'success') {
      iconHtml = '<i class="fa-solid fa-circle-check" style="color: #10b981;"></i>';
    } else if (type === 'error') {
      iconHtml = '<i class="fa-solid fa-circle-exclamation" style="color: #ef4444;"></i>';
    }

    toast.innerHTML = `
      ${iconHtml}
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Auto remove toast after 4 seconds
    setTimeout(() => {
      toast.style.animation = 'toastOut 0.3s ease forwards';
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 3800);
  }

  // Make showToast accessible globally if needed
  window.showToast = showToast;

  /* --------------------------------------------------------------------------
     10. SMOOTH SCROLL FOR ALL ANCHOR LINKS
     -------------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId.startsWith('#')) return;

      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  console.log('Pabna Model School website loaded successfully.');
});
