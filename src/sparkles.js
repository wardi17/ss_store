/**
 * Module untuk membuat efek particle sparkles secara dinamis.
 */
export function renderSparkles(containerId, count = 12) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = ''; // Clear container

  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('landing-type-two-sparkle');

    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const size = Math.random() * 4 + 2;
    const duration = Math.random() * 3 + 3;
    const delay = Math.random() * 2;

    sparkle.style.setProperty('--sparkle-top', `${top}%`);
    sparkle.style.setProperty('--sparkle-left', `${left}%`);
    sparkle.style.setProperty('--sparkle-size', `${size}px`);
    sparkle.style.setProperty('--sparkle-duration', `${duration}s`);
    sparkle.style.setProperty('--sparkle-delay', `${delay}s`);

    container.appendChild(sparkle);
  }
}