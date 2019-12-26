function removeTransition(e) {  //이팩트 삭제해주는 함수
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

  function playSound(e) { //소리를 나타내게 해주는 함수
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //소리
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`); //이팩트
    if (!audio) return; //소리가 없으면 X

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);