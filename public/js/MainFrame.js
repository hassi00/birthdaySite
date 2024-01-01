import { AnimationTimeline } from './AnimationTimeLine.js';
import { NumberCountAnimation } from './NumberCountAnimation.js';
import {EaselAnimation} from './easelAnimation.js';
import {EaselTransparentAnimation} from './EaselTransparentAnimation.js';
import {HappyBirthdayTextAnimation} from './HappyBirthdayTextAnimation.js';
import {BalloonAnimation} from './BalloonAnimation.js';

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
});
