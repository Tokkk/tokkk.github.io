/***************** Flexsliders ******************/
var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});



/***************** fadein ******************/
$(function() {
�@$('#nav-toggle').click(function() {
   $(this).toggleClass('active');
  $('.menu').toggleClass('open');
 });
    $('.menu a').on('click', function(){
        if (window.innerWidth <= 768) {
            $('#nav-toggle').click();
        }
    });
});

/***************** navi ******************/

function showElementAnimation() {
                    
  var element = document.getElementsByClassName('fadein');
  if(!element) return; // �v�f���Ȃ������珈�����L�����Z��
                      
  var showTiming = window.innerHeight > 768 ? 200 : 80; // �v�f���o�Ă���^�C�~���O�͂����Œ���
  var scrollY = window.pageYOffset; //�X�N���[���ʂ��擾
  var windowH = window.innerHeight; //�u���E�U�E�B���h�E�̃r���[�|�[�g(viewport)�̍������擾
                    
  for(var i=0;i<element.length;i++) { 
    var elemClientRect = element[i].getBoundingClientRect(); 
    var elemY = scrollY + elemClientRect.top; 
    if(scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('is-show');
    } else if(scrollY + windowH < elemY) {
    // ��ɃX�N���[�����čēx��\���ɂ���ꍇ�͂�������L�q
      element[i].classList.remove('is-show');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);

/***************** smooth scroll ******************/
var Ease = {
  easeInOut: t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1
}
var duration = 500;
window.addEventListener('DOMContentLoaded', () => {
  var smoothScrollTriggers = document.querySelectorAll('a[href^="#"]');
  smoothScrollTriggers.forEach(function (smoothScrollTrigger) {
    smoothScrollTrigger.addEventListener('click', function (e) {
      var href = smoothScrollTrigger.getAttribute('href');
      var currentPostion = document.documentElement.scrollTop || document.body.scrollTop;
      var targetElement = document.getElementById(href.replace('#', ''));
      if (targetElement) {
        e.preventDefault();
        e.stopPropagation();
        var targetPosition = window.pageYOffset + targetElement.getBoundingClientRect().top - 115;
        var startTime = performance.now();
        var loop = function (nowTime) {
          var time = nowTime - startTime;
          var normalizedTime = time / duration;
          if (normalizedTime < 1) {
            window.scrollTo(0, currentPostion + ((targetPosition - currentPostion) * Ease.easeInOut(normalizedTime)));
            requestAnimationFrame(loop);
          } else {
            window.scrollTo(0, targetPosition);
          }
        }
        requestAnimationFrame(loop);
      }
    });
  });
});
