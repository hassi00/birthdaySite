<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Easel Recreation</title>
<link rel="stylesheet" href="{{ asset('css/styles.css') }}">
</head>
<body>
<div class="easel">
    <div class="top-clip"></div>
    <div class="canvas"></div>
    <div class="shelf"></div>
    <div class="leg" id="left-leg"></div>
    <div class="leg" id="right-leg"></div>
    <div class="leg" id="back-leg"></div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="{{ asset('js/animation.js') }}"></script>
</body>
</html>
