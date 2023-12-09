export class easelTransparenter {

  // constructor(countdownElement) {
  //   this.countdownElement = countdownElement;
  // }

    constructor() {
    
    }

  makeTransparent(gsap) {

    let timeline = gsap.timeline();
    // 要素を跳ねさせて回転するアニメーション
    timeline.to(".leg",{
      opacity:0,
      duration:1
    }).to(".shelf",{
      opacity:0,
      duration:1
    }).to(".top-clip",{
      opacity:0,
      duration:1
    }).to(".canvas",{
      opacity:0,
      duration:1
    })
  }


}