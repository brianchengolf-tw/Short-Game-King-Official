// 短桿王 SHORT GAME KING 官方網站 — site interactions

document.addEventListener('DOMContentLoaded', function () {

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('.faq-item').forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    var answer = item.querySelector('.faq-a');
    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  var header = document.getElementById('siteHeader');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 8 ? '0 6px 20px -12px rgba(29,47,85,.3)' : 'none';
    });
  }

  /* ------------------------------------------------------------
     待補充連結：之後補上真實連結時，只需更新下方變數即可，
     所有頁面（含 footer）都會自動套用，不需要逐頁改 HTML。
     ------------------------------------------------------------ */
  var SOCIAL_LINKS = {
    youtube: null,   // 例如 'https://www.youtube.com/@ShortGameKing'
    instagram: null, // 例如 'https://www.instagram.com/shortgameking_tw'
    facebook: null   // 例如 'https://www.facebook.com/groups/xxxx'
  };

  function applyLink(id, url) {
    var els = document.querySelectorAll('#' + id);
    els.forEach(function (el) {
      if (url) {
        el.setAttribute('href', url);
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener');
        var tag = el.querySelector('.placeholder-tag');
        if (tag) tag.remove();
      }
    });
  }

  ['youtube-link', 'instagram-link', 'facebook-link',
   'footer-youtube', 'footer-instagram', 'footer-facebook'].forEach(function (id) {
    var key = id.replace('footer-', '').replace('-link', '');
    applyLink(id, SOCIAL_LINKS[key]);
  });

});
