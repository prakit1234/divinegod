function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${Math.random() * 100}vw`;
    document.body.appendChild(particle);
  
    setTimeout(() => {
      particle.remove();
    }, 7000);
  }
  
  setInterval(createParticle, 200);
