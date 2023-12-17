import { splatterPaint } from './splatterPaint.js';
import {easelTransparenter} from './easelTransparenter.js';
import {happyBirthdayText} from './happyBirthdayText.js';
import {balloon} from './balloon.js';

export class Counter {

  constructor(countDownNumber, countdownElement) {
    this.countDownNumber = countDownNumber;
    this.countdownElement = countdownElement;
    this.paintDrops = document.querySelectorAll('.paint-drop');
    this.transparenter = new easelTransparenter();
    this.baloon = new balloon();
    this.happyBirthdayText = new happyBirthdayText(this.baloon);
    
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
      this.happyBirthdayText.DisplayBirthdayText(gsap,"Happy Birth day", "#happy-birthday");
      this.transparenter.makeTransparent(gsap,this.happyBirthdayText);
      
    }

    splatterPaint(gsap,this.paintDrops);
  }


}

