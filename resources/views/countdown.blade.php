<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Easel Recreation</title>
  <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
  <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet">

</head>

<body>
  <div id="mainContent">
    <div class="easel">
      <div class="canvasArea">
        <div class="top-clip"></div>
        <div class="canvas">
          <div class="countdown" id="countdown">1</div>
          <div class="paint-splatter">
            <div class="paint-drop"></div>
            <div class="paint-drop"></div>
            <div class="paint-drop"></div>
            <div class="paint-drop"></div>
            <div class="paint-drop"></div>
            <div class="paint-drop"></div>
            <div class="paint-drop"></div>
            <div class="paint-drop"></div>
            <div class="paint-drop"></div>
            <div class="paint-drop"></div>
          </div>
        </div>
        <div class="shelf"></div>
        <div class="leg" id="left-leg"></div>
        <div class="leg" id="right-leg"></div>
        <div class="leg" id="back-leg"></div>
      </div>
      <div id="happy-birthday"></div>
    </div>
    
    <div id="balloon-container"></div>
  </div>
  <div class="messageContent">
    <div class="message1">ありうえお</div>
    <div class="message2">かきくけこ</div>
    <div class="message3">さしすせそ</div>
    <div class="message4">たちつてと</div>
    <div class="message5">なにぬねの</div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script type="module" src="{{ asset('js/AnimationTimeLine.js') }}"></script>
  <script type="module" src="{{ asset('js/EaselAnimation.js') }}"></script>
  <script type="module" src="{{ asset('js/MainFrame.js') }}"></script>
  <script type="module" src="{{ asset('js/NumberCountAnimation.js') }}"></script>
  <script type="module" src="{{ asset('js/HappyBirthdayTextAnimation.js') }}"></script>

</body>

</html>