// Add dynamic delay to each letter for smooth transition
document.querySelectorAll('.name span').forEach((letter, index) => {
    letter.style.setProperty('--i', index);
    letter.addEventListener('mouseover', () => {
      letter.style.color = '#ff00cc';
      letter.style.textShadow = '0 0 15px #ff00cc, 0 0 30px #ff00cc, 0 0 60px #ff00cc';
      letter.style.transition = 'all 0.3s ease';
    });
  
    letter.addEventListener('mouseout', () => {
      letter.style.color = '#fff';
      letter.style.textShadow = '0 0 10px #00ffcc, 0 0 20px #00ffcc, 0 0 40px #00ffcc';
    });
  });
  