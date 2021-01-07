function showElementAnimation() {

  var element = document.getElementsByClassName('fadein');
  if(!element) return; // �v�f���Ȃ������珈�����L�����Z��

  var showTiming = window.innerHeight > 768 ? 200 : 40; // �v�f���o�Ă���^�C�~���O�͂����Œ���
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;

  for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('is-show');
    } else if(scrollY + windowH < elemY) {
      // ��ɃX�N���[�����čēx��\���ɂ���ꍇ�͂�������L�q
      element[i].classList.remove('is-show');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);
