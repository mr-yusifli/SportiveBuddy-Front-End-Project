document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('downloadButton');
    const form = document.getElementById('email');
    const closeButton = document.getElementById('closeButton');

    downloadButton.addEventListener('click', function(event) {
      event.preventDefault();
      this.style.display = 'none';
      form.style.display = 'block';
      form.style.opacity = 0;

      let opacity = 0;
      const fadeIn = setInterval(function() {
        opacity += 0.05;
        form.style.opacity = opacity;
        if (opacity >= 1) {
          clearInterval(fadeIn);
        }
      }, 50);
    });

    closeButton.addEventListener('click', function() {
      form.style.display = 'none';
      downloadButton.style.display = 'block';
    });
  });