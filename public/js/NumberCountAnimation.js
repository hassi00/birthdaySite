import { BaseAnimation } from "./BaseAnimation.js";
import {splatterPaint} from "./splatterPaint.js";

export class NumberCountAnimation extends BaseAnimation {

  constructor(countDownNumber, countdownElement) {
    super();
    this.countDownNumber = countDownNumber;
    this.countdownElement = countdownElement;
    this.paintDrops = document.querySelectorAll('.paint-drop');
  }


  play() {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        this.countDownNumber--;
        this.countdownElement.textContent = this.countDownNumber;

        // 要素を跳ねさせて回転するアニメーション
        gsap.from(this.countdownElement, {
          scale: 2,        // 2倍の大きさから始まる
          rotation: 360,   // 360度回転
          duration: 0.5,   // アニメーションの持続時間（秒）
          ease: "elastic.out(1, 0.3)"  // エラスティックアウトイージング
        });

        splatterPaint(gsap,this.paintDrops);

        if (this.countDownNumber <= 1) {
          clearInterval(interval);
          this.countdownElement.textContent = "";
          resolve();
        }
      }, 1000);
    });
  }



  // updateCountdown(gsap,countdownInterval) {
  //   this.countDownNumber--;
  //   this.countdownElement.textContent = this.countDownNumber;

  //   // 要素を跳ねさせて回転するアニメーション
  //   gsap.from(this.countdownElement, {
  //     scale: 2,        // 2倍の大きさから始まる
  //     rotation: 360,   // 360度回転
  //     duration: 0.5,   // アニメーションの持続時間（秒）
  //     ease: "elastic.out(1, 0.3)"  // エラスティックアウトイージング
  //   });

  //   if (this.countDownNumber <= 0) {
  //     clearInterval(countdownInterval);
  //     this.happyBirthdayText.DisplayBirthdayText(gsap,"Happy Birth day", "#happy-birthday");
  //     this.transparenter.makeTransparent(gsap,this.happyBirthdayText);
      
  //   }

  //   splatterPaint(gsap,this.paintDrops);
  // }




}

