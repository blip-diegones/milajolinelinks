/**
 * Mila Joline - Linktree Interativa
 * Microinterações dinâmicas, controle de modais e efeitos de iluminação
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Controle do Modal da Wishlist
  const wishlistBtn = document.getElementById('wishlistBtn');
  const wishlistModal = document.getElementById('wishlistModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalOkBtn = document.getElementById('modalOkBtn');

  function openModal() {
    if (!wishlistModal) return;
    wishlistModal.classList.add('is-active');
    wishlistModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!wishlistModal) return;
    wishlistModal.classList.remove('is-active');
    wishlistModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (wishlistBtn) {
    wishlistBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modalOkBtn) modalOkBtn.addEventListener('click', closeModal);

  if (wishlistModal) {
    wishlistModal.addEventListener('click', (e) => {
      if (e.target === wishlistModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && wishlistModal && wishlistModal.classList.contains('is-active')) {
      closeModal();
    }
  });

  // 2. Microefeito de iluminação magnética nos cards ao mover o cursor (Desktop)
  const cards = document.querySelectorAll('.block-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const innerGlow = card.querySelector('.card-inner-glow');
      if (innerGlow) {
        innerGlow.style.background = `radial-gradient(circle 160px at ${x}px ${y}px, rgba(216, 180, 254, 0.45), transparent 80%)`;
        innerGlow.style.height = '100%';
        innerGlow.style.opacity = '1';
      }
    });

    card.addEventListener('mouseleave', () => {
      const innerGlow = card.querySelector('.card-inner-glow');
      if (innerGlow) {
        innerGlow.style.background = 'linear-gradient(90deg, transparent 0%, rgba(216, 180, 254, 0.5) 50%, transparent 100%)';
        innerGlow.style.height = '1px';
        innerGlow.style.opacity = '0.6';
      }
    });
  });
});
