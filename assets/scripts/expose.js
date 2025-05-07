// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let hornSelect = document.getElementById('horn-select');
  let hornImage = document.querySelector('#expose>img');
  let audioElem = document.getElementsByClassName('hidden')[0];

  let playButton = document.querySelector('#expose>button');

  let volumeInput = document.querySelector('#volume-controls>input');
  let volumeImg = document.querySelector('#volume-controls>img');

  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('input', function() {
    hornImage.setAttribute('src', `assets/images/${hornSelect.value}.svg`);
    audioElem.setAttribute('src', `assets/audio/${hornSelect.value}.mp3`);
  });

  playButton.addEventListener('click', function () {
    console.log(hornSelect.value);
    audioElem.play();
    if (hornSelect.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  });

  volumeInput.addEventListener('input', function () {
    let newVol = volumeInput.value / 100;
    audioElem.volume = newVol;

    if (volumeInput.value == 0) {
      volumeImg.setAttribute('src', '/assets/icons/volume-level-0.svg');
    } else if (volumeInput.value < 33) {
      volumeImg.setAttribute('src', '/assets/icons/volume-level-1.svg');
    } else if (volumeInput.value < 67) {
      volumeImg.setAttribute('src', '/assets/icons/volume-level-2.svg');
    } else {
      volumeImg.setAttribute('src', '/assets/icons/volume-level-3.svg');
    }
  });
}