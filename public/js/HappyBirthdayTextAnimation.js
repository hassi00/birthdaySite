import { BaseAnimation } from "./BaseAnimation.js";

export class HappyBirthdayTextAnimation extends BaseAnimation {
  constructor(text, containerSelector) {
    super();
    this.text = text;
    this.containerSelector = containerSelector;
  }

  play() {
    return new Promise((resolve) => {
      const container = document.querySelector(this.containerSelector);
      container.innerHTML = ""; // コンテナを空にする

      console.log("Logging this.text:", this.text);

      const characters = [...this.text];
      // 文字列を一文字ずつ分割してアニメーションを適用
      characters.forEach((char, index) => {
        if (char ==='/') {
          container.appendChild(document.createElement('br'));
          return;
        }
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = 0;
        container.appendChild(span);

        // GSAPで一文字ずつアニメーション
        gsap.to(span, {
          opacity: 1,
          duration: 0.5,
          delay: index * 0.25, // 一文字ずつ遅らせる
          onComplete: () => {
            if (index === this.text.length - 1) resolve();
          }
        });
      });
    });
  }
}