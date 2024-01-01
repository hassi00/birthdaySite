import { BaseAnimation } from "./BaseAnimation.js";

export class BalloonAnimation extends BaseAnimation {

  constructor() {
    super();
  }

  play() {
    return new Promise((resolve) => {

      const container = document.getElementById('balloon-container');
      const balloonImages = ['blueballoon.png', 'goldballoon.png', 'redballoon.png', 'yellowballoon.png'];
      const numberOfBalloons = 50; // 画面上に表示する風船の数

      for (let i = 0; i < numberOfBalloons; i++) {
        const balloon = document.createElement('img');
        balloon.src = '/images/balloon/' + balloonImages[i % balloonImages.length];
        balloon.classList.add('balloon');

        // 風船をランダムな位置に配置
        const xPosition = Math.random() * 100;
        const yPosition = Math.random() * 100 -50;

        balloon.style.position = "absolute";
        balloon.style.width = "100px";
        balloon.style.height = "auto";
        balloon.style.left = xPosition + '%';
        balloon.style.top = yPosition < 0 ? yPosition + 50 + '%' : yPosition + '%';yPosition + '%';

        // z-indexで重なり順を制御
        balloon.style.zIndex = i;

        container.appendChild(balloon);

        // GSAPでフェードインアニメーションを適用
        gsap.to(balloon, {
          opacity: 1,
          duration: 1 + Math.random(), // 1秒から2秒の間でランダムな持続時間
          delay: i * 0.1, // 少しずつ遅延させる
          ease: 'power1.inOut'
        });
      }

      resolve();
    })
  }
}