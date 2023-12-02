export class Counter {

  constructor(countDownNumber, countdownElement) {
    this.countDownNumber = countDownNumber;
    this.countdownElement = countdownElement;
  }

  updateCountdown(gsap,countdownInterval) {
    this.countDownNumber--;
    this.countdownElement.textContent = this.countDownNumber;

    // 要素を跳ねさせて回転するアニメーション
    gsap.from(this.countdownElement, {
      scale: 2,        // 2倍の大きさから始まる
      rotation: 360,   // 360度回転
      duration: 0.5,   // アニメーションの持続時間（秒）
      ease: "elastic.out(1, 0.3)"  // エラスティックアウトイージング
    });

    if (this.countDownNumber <= 0) {
      clearInterval(countdownInterval);
      this.countdownElement.textContent = '終了！';
    }
  }


}

