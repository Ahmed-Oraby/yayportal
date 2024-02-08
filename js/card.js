// DOM Element selections
const cardWrapper = document.querySelectorAll('.cardWrapper');

// highest values for angle
const mostX = 10; // 10 or -10
const mostY = 10; // 10 or -10

cardWrapper.forEach((item) => {
  item.addEventListener('mousemove', (e) => {
    const card = item.querySelector('.card');
    const highlight = item.querySelector('.highlight');
    // remove transition
    card.style.transition = 'none';
    highlight.style.transition = 'none';

    const x = e.offsetX;
    const y = e.offsetY;
    const { width, height } = item.getBoundingClientRect();
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    // calculate angle
    const rotationY = ((x - halfWidth) / halfWidth) * mostX;
    const rotationX = ((y - halfHeight) / halfHeight) * mostY;

    // set rotation
    card.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
    highlight.style.left = `${(rotationY / mostX) * 30 * -1}%`;
    highlight.style.top = `${(rotationX / mostY) * 30 * -1}%`;
  });

  item.addEventListener('mouseleave', () => {
    const card = item.querySelector('.card');
    const highlight = item.querySelector('.highlight');
    // add transition back
    card.style.transition = 'transform 0.5s ease-in-out';
    card.style.transform = `rotateY(0) rotateX(0)`;
    highlight.style.transition = 'left 0.5s ease-in-out, top 0.5s ease-in-out';

    // add default position back to highlight
    highlight.style.left = `-20%`;
    highlight.style.top = `-13%`;
  });
});
