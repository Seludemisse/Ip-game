function createMusicNotes() {
  const container = document.createElement('div');
  container.classList.add('music-notes-container');

  const notesMap = new Map([
    ['A1', 'a'],
    ['A2', 's'],
    ['A3', 'd'],
    ['A4', 'f'],
    ['B1', 'g'],
    ['B2', 'h'],
    ['B3', 'j'],
    ['B4', 'k'],
    ['C1', 'l'],
    ['C2', ';'],
    ['C3', 'z'],
    ['C4', 'x'],
    ['D1', 'c'],
    ['D2', 'v'],
    ['D3', 'b'],
    ['D4', 'n'],
    ['E1', 'm'],
    ['E2', ','],
    ['E3', '.'],
    ['E4', '/'],
    ['F1', 'q'],
    ['F2', 'w'],
    ['F3', 'e'],
    ['F4', 'r'],
    ['G1', 't'],
    ['G2', 'y'],
    ['G3', 'u'],
    ['G4', 'i']
  ]);

  const notes = Array.from(notesMap.keys());

  notes.forEach(note => {
    const div = document.createElement('div');
    div.classList.add('music-note');


    const noteName = document.createElement('span');
    noteName.textContent = note;
    div.appendChild(noteName);

    const key = notesMap.get(note);
    const keyElement = document.createElement('span');
    keyElement.textContent = key;
    keyElement.classList.add('key');
    div.appendChild(keyElement);

    const audio = document.createElement('audio');
    audio.src = `kirar/${note.toLowerCase()}.wav`;
    audio.preload = 'auto';

    div.appendChild(audio);
    container.appendChild(div);

    // Play audio when the associated key is pressed
    window.addEventListener('keydown', (event) => {
      if (event.key === key) {
        audio.currentTime = 0; // Reset audio to start
        audio.play();
        console.log("here");
      }
    });

    div.addEventListener("click",(event) => {
        audio.currentTime = 0; // Reset audio to start
        audio.play();
        console.log("here");
      
    } )
  });

  document.body.appendChild(container);
}

// Call the function to create the music notes
createMusicNotes();