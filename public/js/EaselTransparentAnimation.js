import { BaseAnimation } from "./BaseAnimation.js";

export class EaselTransparentAnimation extends BaseAnimation {


  constructor() {
    super();
  }

  play() {
    let timeline = gsap.timeline();
    return timeline.to(".leg", {
      opacity: 0,
      duration: 1
    }).to(".shelf", {
      opacity: 0,
      duration: 1
    }).to(".top-clip", {
      opacity: 0,
      duration: 1
    }).to(".canvas", {
      opacity: 0,
      duration: 1
    }).then(() => {});
  }
}