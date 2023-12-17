export class balloon{

  constructor(){

  }

  show(gsap){
    let timeline = gsap.timeline();
    timeline.to("#balloonBlue", {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      display: 'inline-block',
    })
    .to("#balloonRed", {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      display: 'inline-block',
    })
    .to("#balloonGold", {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      display: 'inline-block',
    }).to("#balloonYellow", {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      display: 'inline-block',
    })
  }

}