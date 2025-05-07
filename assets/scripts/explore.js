// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synthesis = window.speechSynthesis;
  const voiceSelection = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');
  const smile = document.querySelector('#explore>img');

  function populateVoices() {
    let voices = synthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const voiceOption = document.createElement("option");
      voiceOption.textContent = `${voices[i].name} (${voices[i].lang})`;
      voiceOption.setAttribute('value', voices[i].name);
  
      voiceSelection.appendChild(voiceOption);
    }
  }

  populateVoices();
  synthesis.addEventListener('voiceschanged', populateVoices);

  speakButton.addEventListener('click', function () {
    const utterThis = new SpeechSynthesisUtterance(textArea.value);

    let voices = synthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name == voiceSelection.value) {
        utterThis.voice = voices[i];
      }
    }

    utterThis.addEventListener('start', function() {
      smile.setAttribute('src', 'assets/images/smiling-open.png');
    })

    utterThis.addEventListener('end', function () {
      smile.setAttribute('src', 'assets/images/smiling.png');
    })
    synthesis.speak(utterThis);
  });
}
