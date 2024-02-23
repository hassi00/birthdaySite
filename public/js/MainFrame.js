import { AnimationTimeline } from './AnimationTimeLine.js';
import { NumberCountAnimation } from './NumberCountAnimation.js';
import {EaselAnimation} from './easelAnimation.js';
import {EaselTransparentAnimation} from './EaselTransparentAnimation.js';
import {HappyBirthdayTextAnimation} from './HappyBirthdayTextAnimation.js';
import {BalloonAnimation} from './BalloonAnimation.js';
import { BlowCandle } from './BlowCandle.js';

document.addEventListener('DOMContentLoaded', function () {

    const timeline = new AnimationTimeline();
    timeline.addAnimation(new EaselAnimation());

    const countdownElement = document.getElementById('countdown');
    timeline.addAnimation(new NumberCountAnimation(3,countdownElement));
    timeline.addAnimation(new HappyBirthdayTextAnimation("Happy/Birth/day", "#happy-birthday"));
    timeline.addAnimation(new EaselTransparentAnimation());
    timeline.addAnimation(new BalloonAnimation());
    
    // タイムラインを開始
    timeline.start();

    document.getElementById('blow-candle').addEventListener('click',BlowCandle);


    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'kf-cover-slide 2s ease-in-out forwards';
          observer.unobserve(entry.target); // アニメーション後は監視を停止
        }
      });
    }, {
      threshold: 0.1 // 10%の要素が見えた時点でトリガー
    });
  
    // 監視対象の要素を選択し、監視を開始
    document.querySelectorAll('.cover-slide1').forEach((el) => {
      observer.observe(el);
    });


});
