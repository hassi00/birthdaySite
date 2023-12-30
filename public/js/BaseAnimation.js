export class BaseAnimation {

    constructor() {
      
    }
  
    play() {
      // 子クラスでオーバーライドされるべきメソッド
      return Promise.resolve();
    }
}