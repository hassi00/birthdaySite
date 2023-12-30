<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Easel Recreation</title>
<link rel="stylesheet" href="{{ asset('css/styles.css') }}">
<link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">

</head>
<body>
<main-content>
<div class="easel">
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
<div id="balloon">
  <img id="balloonBlue" src="{{ asset('images/balloon/blueballoon.png') }}" />
  <img id="balloonGold" src="{{ asset('images/balloon/goldballoon.png') }}" />
  <img id="balloonRed" src="{{ asset('images/balloon/redballoon.png') }}" />
  <img id="balloonYellow" src="{{ asset('images/balloon/yellowballoon.png') }}"/>
</div>
</main-content>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script type="module" src="{{ asset('js/AnimationTimeLine.js') }}"></script>
<script type="module" src="{{ asset('js/EaselAnimation.js') }}"></script>
<script type="module" src="{{ asset('js/MainFrame.js') }}"></script>

</body>
</html>
