setTimeout(() => {
    const box = document.getElementById('div_four');

    // 👇️ removes element from DOM
    box.style.display = 'none';

    // 👇️ hides element (still takes up space on page)
    // box.style.visibility = 'hidden';
  }, 10000); // 👈️ time in milliseconds