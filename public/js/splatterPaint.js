export function splatterPaint(gsap,paintDrops ) {
  
  paintDrops.forEach(drop => {

    let xposition =  Math.random() * 100-50;
    if(xposition < 0){
      xposition = xposition - 50;
    }else{
      xposition = xposition + 50;
    }

    let yposition =  Math.random() * 100 - 50;
    if(yposition < 0){
      yposition = yposition - 10;
    }else{
      yposition = yposition + 10;
    }

    let timeline = gsap.timeline();
    timeline.set(drop, { x: 0, y: 0, scale: 0,display: "block"})
    .to(drop, {
      
      x: xposition, // ランダムなX方向
      y:yposition,// ランダムなY方向
      scale: Math.random() * 1.5,    // ランダムなサイズ
      duration: 0.1,
      ease: "power1.out"
    })
    .set(drop,{
      drop, display: "block"
    })
  });
}