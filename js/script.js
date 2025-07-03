console.log("JS Loaded");

const addressBar = document.querySelector('.address-bar');
if (addressBar) {
  const originalText = addressBar.textContent;
  let currentText = '';
  let i = 0;
  function typeWriter() {
    if (i < originalText.length) {
      currentText += originalText.charAt(i);
      addressBar.textContent = currentText;
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  setTimeout(() => {
    addressBar.textContent = '';
    typeWriter();
  }, 1000);
}

document.querySelectorAll('.light').forEach(light => {
  light.addEventListener('click', function() {
    const browser = document.querySelector('.browser');
    const macbook = document.querySelector('.macbook');
    const content = document.querySelector('.content');
    if (!browser || !macbook || !content) return;
    if (this.classList.contains('red')) {
      browser.style.transform = 'scale(0.8)';
      setTimeout(() => { browser.style.transform = 'scale(1)'; }, 300);
    } else if (this.classList.contains('yellow')) {
      macbook.style.transform = 'perspective(1000px) rotateX(0deg) scale(1.05)';
      setTimeout(() => { macbook.style.transform = 'perspective(1000px) rotateX(5deg) scale(1)'; }, 300);
    } else if (this.classList.contains('green')) {
      content.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      setTimeout(() => {
        content.style.background = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)';
      }, 1000);
    }
  });
});
