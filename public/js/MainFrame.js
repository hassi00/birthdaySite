import { AnimationTimeline } from './AnimationTimeLine.js';
//import { NumberCountAnimation } from './NumberCountAnimation.js';
import {EaselAnimation} from './easelAnimation.js';

document.addEventListener('DOMContentLoaded', function () {

    const timeline = new AnimationTimeline();
    timeline.addAnimation(new EaselAnimation());
    //timeline.addAnimation(new NumberCountAnimation());

    // タイムラインを開始
    timeline.start();
});
