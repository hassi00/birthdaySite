import { Counter } from './NumberCounter.js';

document.addEventListener('DOMContentLoaded', function() 
{


  let countdownNumber = 10;
 const countdownElement = document.getElementById('countdown');
  let counter = new Counter(countdownNumber,countdownElement);

  let timeline = gsap.timeline();
  timeline.from("#left-leg", {
    duration: 1.0,
    x: -500,
    ease: "power4.out"
  })
  .from("#right-leg", {
    duration: 0.5,
    x: 500,
    delay: 0.0,
    ease: "power4.out"
  })
  .from("#back-leg", {
    duration: 0.5,
    y: 500,
    delay: 0.0,
    ease: "power4.out"
  })
  .from(".shelf", {
    duration: 0.5,
    y: -500,
    delay: 0.0,
    ease: "power4.out"
  })
  .from(".canvas", {
    duration: 0.5,   // アニメーションの持続時間
    y: -500,         // Y軸方向の開始位置（-200pxの位置から始まる）
    ease: "power4.out", // イージング効果
  })
  .to(".canvas", {
    scaleY: 4.0,     // Y軸方向のスケール変更
    duration: 0.5,   // このアニメーションの持続時間
    ease: "power4.inOut" // イージング効果
  })
  .from(".top-clip", {
    duration: 0.5,
    y: -500,
    delay: 0.0,
    ease: "power4.out",

    onComplete: () => {
      // イーゼルのアニメーションが終了した後にカウントダウンを開始
      const countdownInterval = setInterval(()=>{counter.updateCountdown(gsap,countdownInterval)}, 1000); // 1秒ごとに更新
  }
})
});
