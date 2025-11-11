// 🔄 Hiệu ứng cuộn mượt
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ✨ Hiệu ứng hiện dần khi cuộn
const elements = document.querySelectorAll('.animate');
window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// 🔐 Login phân quyền
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const role = document.getElementById('role').value;
      if (role === 'admin') {
        window.location.href = 'admin.html';
      } else if (role === 'staff') {
        window.location.href = 'staff.html';
      } else {
        window.location.href = 'customer.html';
      }
    });
  }
});
