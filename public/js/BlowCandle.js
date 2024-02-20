export function BlowCandle() {

  navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(function (stream) {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const microphone = audioContext.createMediaStreamSource(stream);
      microphone.connect(analyser);
      analyser.fftSize = 512;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      alert('マイクに向かって吹きかけて！');
      // 音声入力の監視を開始
      const checkAudio = function () {
        analyser.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
          sum += dataArray[i];
        }
        let average = sum / bufferLength;

        // 音量が一定レベル以上なら炎を消す
        if (average > 20) { // 閾値は実際の環境に応じて調整
          const flames = document.querySelectorAll('.flame');

          flames.forEach(function (flame, index) {
            // 各炎に対して、インデックスに応じた遅延を設定
            setTimeout(function () {
              flame.style.opacity = '0'; // 透明度を0にする
              flame.style.transform = 'scale(0)'; // サイズを0に縮小
              setTimeout(function () {
                flame.style.display = 'none'; // 完全に非表示にする
              }, 1000); // 縮小と透明化のアニメーションが完了するのを待つ
            }, index * 1000); // 各炎が前の炎が消えてから1秒後に消えるように設定
          });
          audioContext.close(); // リソース解放
          StopAudioStream(stream);
        } else {
          requestAnimationFrame(checkAudio); // 音声監視を続ける
        }
      };
      checkAudio();
    })
    .catch(function (err) {
      const button = document.getElementById('blow-candle');
      var buttonText = button.textContent;
      alert('「${buttonText}」ボタンを長押ししてね！');
      // 長押しで炎を消すイベントリスナーを設定
      setupLongPressToBlowOutCandle();
      
    });


}



function setupLongPressToBlowOutCandle() {
  let timerId;
  const button = document.getElementById('blow-candle');
  button.addEventListener('mousedown', function () {
    // 長押しを検出するタイマーを設定
    timerId = setTimeout(function () {
      const flames = document.querySelectorAll('.flame');

      flames.forEach(function (flame, index) {
        // 各炎に対して、インデックスに応じた遅延を設定
        setTimeout(function () {
          flame.style.opacity = '0'; // 透明度を0にする
          flame.style.transform = 'scale(0)'; // サイズを0に縮小
          setTimeout(function () {
            flame.style.display = 'none'; // 完全に非表示にする
          }, 1000); // 縮小と透明化のアニメーションが完了するのを待つ
        }, index * 1000); // 各炎が前の炎が消えてから1秒後に消えるように設定
      });
    }, 2000); // 2秒間の長押しで炎を消す
  });

  // ボタンから指を離した時、またはカーソルが離れた時にタイマーをキャンセル
  ['mouseup', 'mouseleave'].forEach(function (event) {
    button.addEventListener(event, function () {
      clearTimeout(timerId);
    });
  });
}



function StopAudioStream(stream){
  stream.getTracks().forEach(track => track.stop());
}