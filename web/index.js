// JavaScript Document
document.addEventListener('click', function(event) {
  var clickEffect = document.getElementById('clickEffect');
  var x = event.clientX - clickEffect.offsetWidth / 2;
  var y = event.clientY - clickEffect.offsetHeight / 2;
  
  clickEffect.style.transform = 'scale(1)';
  clickEffect.style.left = x + 'px';
  clickEffect.style.top = y + 'px';
  
  setTimeout(function() {
    clickEffect.style.transform = 'scale(0)';
  }, 300);
});