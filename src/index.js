import './style.css';
import RevealFx from './reveal';
import anime from 'animejs';

function revealElement(elementClass, bgcolor, delay) {
  const $el = new RevealFx(document.querySelector(elementClass), {
    revealSettings: {
      bgcolor,
      delay,
      easing: 'easeOutExpo',
      direction: 'lr',
      onStart: function(contentEl) {
        anime.remove(contentEl);
        contentEl.style.opacity = 0;
      },
      onCover: function(contentEl) {
        anime({
          targets: contentEl,
          duration: 800,
          delay: 80,
          easing: 'easeOutExpo',
          translateX: [-40, 0],
          opacity: [0, 1]
        });
      }
    }
  });
  $el.reveal();
}

revealElement('.title', '#68788c', 300);
revealElement('.subtitle', '#a1aeb7', 550);