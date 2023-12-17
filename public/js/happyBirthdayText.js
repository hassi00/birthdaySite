export class happyBirthdayText {
  constructor(balloon) {
    this.balloon = balloon;
  }

  DisplayBirthdayText(gsap,text, containerSelector) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = ""; // コンテナを空にする

    // 文字列を一文字ずつ分割
    text.split("").forEach((char, index) => {
      if(char ===' '){
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
        delay: index * 0.25 ,// 一文字ずつ遅らせる
        onComplete: index === text.length - 1 ? this.balloon.show(gsap) : null,
      });
    });

    

  }
}