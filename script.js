document.addEventListener('DOMContentLoaded', function() {
  const bars = document.querySelectorAll('.bar');

  bars.forEach(bar => {
      const value = bar.getAttribute('data-value');
      const total = bar.getAttribute('data-total');
      const percentage = (value / total) * 100;
      bar.style.width = percentage + '%';
      bar.setAttribute('data-percentage', percentage.toFixed(2) + '%');

      bar.addEventListener('mouseenter', function() {
          bar.style.width = '100%';
          bar::before.content = bar.getAttribute('data-percentage');
      });

      bar.addEventListener('mouseleave', function() {
          bar.style.width = percentage + '%';
          bar::before.content = bar.getAttribute('data-label');
      });
  });
});
