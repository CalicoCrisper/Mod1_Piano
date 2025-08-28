// Select all keys
const keys = document.querySelectorAll('.key');

// Add an event listener to all keys
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

// Handlers
function playNote(key) {
    //Get notes's letter value
  const noteAudio = document.getElementById(key.dataset.note);

  // Reset note's current time to 0
  noteAudio.currentTime = 0;

  // Play note
  noteAudio.play();
  

  // Add class, active, for styling purposes
  key.classList.add('active');


// Listen for when the sound has ended and remove 'active' class
 noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
}

// HOLDING NOTES
const WHITE_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u'];
const BLACK_KEYS = ['a', 's', 'f', 'g', 'h'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

document.addEventListener('keydown', (e) => {
  // Get the key that triggered the event
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  // Don't repeat audio when key is held
  if (e.repeat) {
    return;
  }
  
  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }
});

 