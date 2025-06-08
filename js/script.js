document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', () => {
    document.querySelectorAll('.box').forEach(b => {
      if (b !== box) b.classList.remove('active');
    });
    box.classList.toggle('active');
  });
});
