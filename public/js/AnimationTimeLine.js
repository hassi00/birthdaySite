export class AnimationTimeline {
    animations;
    constructor() {
        this.animations = [];
    }

    addAnimation(animation) {
        this.animations.push(animation);
    }

    start() {
        let promise = Promise.resolve();

        this.animations.forEach((animation) => {
            promise = promise.then(() => animation.play());
        });
    }
}