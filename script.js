// ===== 네비게이션 =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ===== 하단 고정 CTA (항상 표시) =====

// ===== 후기 더보기 =====
const showMoreBtn = document.getElementById('showMoreBtn');
const reviewsList = document.getElementById('reviewsList');

showMoreBtn.addEventListener('click', () => {
  const isShowingAll = reviewsList.classList.contains('show-all');
  reviewsList.classList.toggle('show-all');
  showMoreBtn.querySelector('span').textContent = isShowingAll ? '후기 더 보기' : '후기 접기';
  showMoreBtn.querySelector('svg').style.transform = isShowingAll ? '' : 'rotate(180deg)';
});

// ===== 꿀팁 펼치기 =====
document.querySelectorAll('.tip-card-header').forEach(header => {
  header.addEventListener('click', () => {
    const card = header.closest('.tip-card');
    const body = card.querySelector('.tip-card-body');
    const isActive = card.classList.contains('active');

    if (!isActive) {
      card.classList.add('active');
      body.style.maxHeight = body.scrollHeight + 'px';
    } else {
      card.classList.remove('active');
      body.style.maxHeight = null;
    }
  });
});

// ===== FAQ 아코디언 =====
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const answer = item.querySelector('.faq-a');
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.faq-item.active').forEach(activeItem => {
      activeItem.classList.remove('active');
      activeItem.querySelector('.faq-a').style.maxHeight = null;
    });

    if (!isActive) {
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// ===== 상담 신청 폼 =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      id: Date.now(),
      type: 'contact',
      date: new Date().toLocaleString('ko-KR'),
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      address: document.getElementById('address').value,
      message: document.getElementById('message').value
    };
    const contacts = JSON.parse(localStorage.getItem('gongantori_contacts') || '[]');
    contacts.unshift(data);
    localStorage.setItem('gongantori_contacts', JSON.stringify(contacts));
    alert(`상담 신청이 완료되었습니다!\n\n${data.name}님, 빠른 시간 내에 연락드리겠습니다.\n감사합니다 :)`);
    contactForm.reset();
  });
}

// ===== 신뢰 숫자 카운터 애니메이션 =====
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const isDecimal = el.dataset.decimal === 'true';
  const duration = 1500;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;

    if (isDecimal) {
      el.textContent = current.toFixed(1);
    } else {
      el.textContent = Math.floor(current);
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// ===== Before/After 슬라이더 =====
document.querySelectorAll('.ba-range').forEach(range => {
  const slider = range.closest('.ba-slider');
  const afterImg = slider.querySelector('.ba-after-img');
  const handle = slider.querySelector('.ba-handle');

  function updateSlider(value) {
    const pct = value + '%';
    afterImg.style.clipPath = `inset(0 0 0 ${pct})`;
    handle.style.left = pct;
  }

  range.addEventListener('input', (e) => updateSlider(e.target.value));
  updateSlider(range.value);
});

// ===== 스크롤 애니메이션 =====
const fadeElements = document.querySelectorAll(
  '.pain-card, .review-card, .process-step, .pricing-card, .faq-item, .external-review-card, .ba-slider, .recommend-tag, .channel-chip, .promise-item-inline, .capture-item'
);

fadeElements.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -30px 0px'
});

fadeElements.forEach(el => observer.observe(el));

// 카운터 옵저버
const trustNums = document.querySelectorAll('.trust-num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

trustNums.forEach(el => counterObserver.observe(el));
