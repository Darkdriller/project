import words from "./words.js";
const rows = document.querySelectorAll('.letter-row');
const keysBtn = document.querySelectorAll('.key-btn');
const notif = document.querySelector('.notification');
const endgame = document.querySelector('.endgame');
const icon = document.querySelector('.back');

icon.addEventListener('click', () => {
  window.location.href = '../../index.html';
  console.log("clicked")
});

// Replace this dictionary with another one
let chosenWord = words[Math.round(Math.random() * (words.length - 1))];
// let chosenWord='thins'

let rowIndex = 0;
let currentInput = '';

let gameStarted = true;
let canPlay = true;

let notificationTimer;

keysBtn.forEach(key => {
	key.addEventListener('click', e => {
  	const el = e.target;
    const char = el.dataset.key;
    
    if (char != '←' && char != '↵') {
    	addKey(el.dataset.key);
    } else if (char == '↵') {
    	submit(currentInput);
    } else if (char == '←') {
    	deleteKey();
    }
  });
});

document.addEventListener('keyup', e => {
	if (e.keyCode >= 65 && e.keyCode <= 90) {
		addKey(e.key);  
  } else if (e.keyCode == 13) {
  	submit(currentInput);
  } else if (e.keyCode == 8) {
  	deleteKey();
  }
});

function addKey(key) {
	if (canInteract() && currentInput.length < 5) {
  		currentInput += key;
  }
  
  updateCurrentRow();
}

function deleteKey() {
	if (canInteract() && currentInput.length > 0) {
  	currentInput = currentInput.slice(0, -1);
  }

  updateCurrentRow();
}

function updateCurrentRow() {
	for (let i = 0; i < 5; i++) {
  	rows[rowIndex].children[i].innerHTML = !!currentInput[i] ? currentInput[i] : '';
  }
}

function submit(submittedWord) {
	if (submittedWord.length == 5) {
  	if (words.includes(submittedWord)) {
        	console.log('Submitting');
    			canPlay = false;
					checkRow(currentInput).then(() => {
          	currentInput = '';
            rowIndex++;
            canPlay = true;
            if (rowIndex >= 6) {
              gameStarted = false;
              setEndGameMessage('Oh! No worries the word to guess was : <span style="color:green"> '+ chosenWord.toUpperCase()+"</span>", 10000);
              
              console.log('end game');
            }
          });
    } else {
    	setNotificationMessage('The word doesn\'t exists.');
    }
  } else {
  	setNotificationMessage('The word needs 5 letters.');
  }
}

function checkRow(submittedWord) {
  const anims = [];
  let correctChar = 0;
  for (let i = 0; i < submittedWord.length; i++) {
    const boxClass = getBoxColor(chosenWord, submittedWord, i);

    if (boxClass == 'correct') {
      correctChar++;

      if (correctChar == 5) {
        gameStarted = false;
        setEndGameMessage('Correct! The word is : <span style="color:green"> '+ chosenWord.toUpperCase()+"</span>", 10000);
        console.log('word founded');
      }
    }
    anims.push(new Promise((resolve) => setTimeout(() => {
      rows[rowIndex].children[i].classList.add(boxClass, 'flip');
      setKeyColor(submittedWord[i], boxClass);
      resolve();
    }, 100 * i)));
  }

  return Promise.all(anims);
}

function setKeyColor(key, color) {
	for (let i = 0; i < keysBtn.length; i++) {
  	if (keysBtn[i].dataset.key == key) {
    	if (!keysBtn[i].classList.contains('correct')) {
      	keysBtn[i].classList.remove('absent', 'present');
      	keysBtn[i].classList.add(color);
      }
    }
  }
}

function getBoxColor(word, input, index) {
	if (word.includes(input[index])) {
  	return checkBoxValidity(word, input, index);
  } else {
  	return 'absent';
  }
}

function canInteract() {
	return gameStarted && canPlay;
}

function setNotificationMessage(message, duration = 2000) {
  clearTimeout(notificationTimer);
  notif.classList.remove('fadeIn', 'fadeOut');
  void notif.offsetWidth; // Reset css animation
  notif.classList.add('fadeIn');
  
  notif.innerHTML = message;
  notificationTimer = setTimeout(() => {
  	notif.classList.remove('fadeIn');
  	notif.classList.add('fadeOut');
  }, duration);
  
}
function setEndGameMessage(message, duration = 2000) {
  clearTimeout(notificationTimer);
  endgame.classList.remove('fadeIn', 'fadeOut');
  void endgame.offsetWidth; // Reset css animation
  endgame.classList.add('fadeIn');
  
  endgame.innerHTML = message;
  notificationTimer = setTimeout(() => {
  	endgame.classList.remove('fadeIn');
  	endgame.classList.add('fadeOut');
  }, duration);
  
}
function checkBoxValidity(word, input, index) {
  if (input[index] == word[index]) {
    return 'correct';
  }

  let splittedWord = word.split('');
  let splittedInput = input.split('');
   
  for (let i = 0; i < splittedInput.length; i++) {
     if (splittedInput[i] == splittedWord[i] && i != index) {
       splittedInput[i] = '*';
       splittedWord[i] = '*';
     }
  }
  
  return !splittedWord.includes(splittedInput[index]) ? 'absent' : 'present';
}