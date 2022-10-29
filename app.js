// Selected key for each button
const whiteKey = ['z','x','c','v','b','n','m'];
const blackKey = ['s','d','g','h','j'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

console.log(whiteKey);
console.log(blackKey);

console.log(keys);

// Added an event listener of each key you press 
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
})

document.addEventListener('keydown', e => {
   const key = e.key;
   const whiteKeyIndex = whiteKey.indexOf(key);
   const blackKeyIndex = blackKey.indexOf(key);

   console.log(blackKeyIndex);
 
   if(whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
   if(blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
   console.log(blackKeyIndex);
   console.log(whiteKeyIndex);
})


// Main play sound for notes function.
function playNote(key) {

    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    // Css class for animation 
    key.classList.add('active');
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}
