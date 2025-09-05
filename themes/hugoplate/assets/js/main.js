// Testimonial Slider
// ----------------------------------------
document.querySelectorAll('.testimonial-slider').forEach((el) => {
  const slides = el.querySelectorAll('.swiper-wrapper .swiper-slide').length;
  if (slides === 0) return; // rien à initialiser
  const loop = slides > 1; // <- clé : pas de clones si 1 seul slide
  const paginationEl = el.querySelector('.testimonial-slider-pagination');

  const swiper = new Swiper(el, {
    spaceBetween: 24,
    loop,                       // désactivé si 1 seul slide
    allowTouchMove: loop,       // inutile de swiper si 1 seul
    watchOverflow: true,        // désactive auto si pas assez de slides
    slidesPerView: 1,
    pagination: paginationEl && loop ? {
      el: paginationEl,         // pagination scoped au slider
      type: 'bullets',
      clickable: true,
    } : undefined,
    breakpoints: {
      768: { slidesPerView: Math.min(2, slides) },
      992: { slidesPerView: Math.min(3, slides) },
    },
  });

  // Cache la pagination si elle ne sert à rien
  if (paginationEl && !loop) {
    paginationEl.style.display = 'none';
  }
});
