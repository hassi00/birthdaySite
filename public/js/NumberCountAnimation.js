// //import { splatterPaint } from './splatterPaint.js';
// import {easelTransparenter} from './easelTransparenter.js';
// import {happyBirthdayText} from './happyBirthdayText.js';
// import {balloon} from './balloon.js';
// import { BaseAnimation } from "./BaseAnimation";

// export class NumberCountAnimation extends BaseAnimation {

//   constructor(countDownNumber, countdownElement) {
//     this.countDownNumber = countDownNumber;
//     this.countdownElement = countdownElement;
//     this.paintDrops = document.querySelectorAll('.paint-drop');
//     this.transparenter = new easelTransparenter();
//     this.baloon = new balloon();
//     this.happyBirthdayText = new happyBirthdayText(this.baloon);
    
//   }


//   play() {
//     return new Promise((resolve) => {
//       let countdown = this.startNumber;
//       this.element.textContent = countdown;

//       const interval = setInterval(() => {
//         this.countDownNumber--;
//         this.countdownElement.textContent = this.countDownNumber;

//         // 要素を跳ねさせて回転するアニメーション
//         gsap.from(this.countdownElement, {
//           scale: 2,        // 2倍の大きさから始まる
//           rotation: 360,   // 360度回転
//           duration: 0.5,   // アニメーションの持続時間（秒）
//           ease: "elastic.out(1, 0.3)"  // エラスティックアウトイージング
//         });

//         if (countdown <= 0) {
//           clearInterval(interval);
//           resolve();
//         }
//       }, 1000);
//     });
//   }



//   // updateCountdown(gsap,countdownInterval) {
//   //   this.countDownNumber--;
//   //   this.countdownElement.textContent = this.countDownNumber;

//   //   // 要素を跳ねさせて回転するアニメーション
//   //   gsap.from(this.countdownElement, {
//   //     scale: 2,        // 2倍の大きさから始まる
//   //     rotation: 360,   // 360度回転
//   //     duration: 0.5,   // アニメーションの持続時間（秒）
//   //     ease: "elastic.out(1, 0.3)"  // エラスティックアウトイージング
//   //   });

//   //   if (this.countDownNumber <= 0) {
//   //     clearInterval(countdownInterval);
//   //     this.happyBirthdayText.DisplayBirthdayText(gsap,"Happy Birth day", "#happy-birthday");
//   //     this.transparenter.makeTransparent(gsap,this.happyBirthdayText);
      
//   //   }

//   //   splatterPaint(gsap,this.paintDrops);
//   // }




// }

