document.addEventListener("DOMContentLoaded", () => {
  anime({
    targets: '#square',
    opacity: [0, 1],
    scale: [0, 1],
    duration: 800,
    easing: 'easeOutElastic(1, .6)'
  });
});
