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
const words = ['about','above','abuse','actor','adapt','admit','adopt','adult','after','again','agent','agree','ahead','album','alive','allow','alone','along','alter','among','anger','angle','angry','apart','apple','apply',
'argue','arise','armed','Asian','aside','asset','avoid','award','aware','awful','badly','basic','basis','beach','begin','being','below','bench','Bible','birth','black','blade','blame','blind','block','blood',
'board','brain','brand','bread','break','brick','brief','bring','broad','brown','brush','build','bunch','buyer','cabin','cable','carry','catch','cause','chain','chair','chart','chase','cheap','check','cheek',
'chest','chief','child','civil','claim','class','clean','clear','climb','clock','close','cloud','coach','coast','color','couch','could','count','court','cover','crack','craft','crash','crazy','cream','crime',
'cross','crowd','cycle','daily','dance','death','delay','depth','dirty','doubt','dozen','draft','drama','dream','dress','drink','drive','eager','early','earth','eight','elect','elite','empty','enemy','enjoy',
'enter','entry','equal','error','essay','event','every','exact','exist','extra','faith','false','fault','favor','fence','fewer','fiber','field','fifth','fifty','fight','final','first','flame','flesh','float',
'floor','focus','force','forth','found','frame','fresh','front','fruit','fully','funny','ghost','giant','given','glass','glove','grade','grain','grand','grant','grass','grave','great','green','group','guard',
'guess','guest','guide','habit','happy','heart','heavy','hello','honey','honor','horse','hotel','house','human','humor','ideal','image','imply','index','inner','Iraqi','Irish','issue','joint','judge','juice',
'knife','knock','label','labor','large','later','Latin','laugh','layer','learn','least','leave','legal','lemon','level','light','limit','local','loose','lover','lower','lucky','lunch','major','maker','marry',
'match','maybe','mayor','media','metal','meter','might','minor','model','money','month','moral','motor','mount','mouse','mouth','movie','music','naked','nerve','never','newly','night','noise','north','novel',
'nurse','occur','ocean','offer','often','onion','order','other','ought','owner','paint','panel','paper','party','patch','pause','peace','phase','phone','photo','piano','piece','pilot','pitch','place','plane',
'plant','plate','point','porch','pound','power','press','price','pride','prime','print','prior','proof','proud','prove','quick','quiet','quite','quote','radio','raise','range','rapid','ratio','reach','react',
'ready','refer','relax','reply','rifle','right','river','rough','round','route','rural','salad','sales','sauce','scale','scene','scope','score','seize','sense','serve','seven','shade','shake','shall','shape',
'share','sharp','sheet','shelf','shell','shift','shine','shirt','shock','shoot','shore','short','shout','shrug','sight','since','skill','slave','sleep','slice','slide','small','smart','smell','smile','smoke',
'solar','solid','solve','sorry','sound','south','space','speak','speed','spend','split','sport','staff','stage','stair','stake','stand','stare','start','state','steal','steel','stick','still','stock','stone',
'store','storm','story','strip','study','stuff','style','sugar','super','swear','sweep','sweet','swing','table','taste','teach','terms','thank','their','theme','there','these','thick','thing','think','third',
'those','three','throw','tight','tired','title','today','tooth','topic','total','touch','tough','tower','trace','track','trade','trail','train','treat','trend','trial','tribe','trick','troop','truck','truly',
'trust','truth','twice','uncle','under','union','until','upper','urban','usual','value','video','virus','visit','vital','voice','voter','waste','watch','water','weigh','wheel','where','which','while','white',
'whole','whose','woman','works','world','worry','worth','would','wound','write','wrong','yield','young','yours','youth','acids','aides','arabs','areas','autos','balls','bands','banks','bases','beans','bears',
'beats','beers','bells','belts','bends','bikes','bills','binds','birds','bites','blows','blues','boats','bombs','bones','books','boots','bowls','bucks','cakes','calls','camps','cards','cares','cases','cells',
'chefs','chips','clubs','clues','coals','coats','codes','comes','cooks','cools','copes','corns','crews','crops','dates','deals','dears','debts','decks','deeps','desks','diets','doors','drags','draws','drops',
'drugs','dusts','eases','edges','event','faces','facts','fades','fails','fairs','falls','farms','fears','feeds','feels','files','fills','films','finds','fines','fives','flags','flats','flees','flows','folks',
'foods','foots','forms','fours','frees','fuels','fulls','funds','gains','games','gangs','gates','gazes','gears','genes','gifts','girls','gives','glads','goals','golds','golfs','goods','grabs','grays','grows',
'hairs','halls','hands','hangs','hates','haves','heads','hears','heats','heels','helps','hides','highs','hills','hires','holds','holes','homes','hopes','hosts','hours','hurts','ideas','irons','items','jails',
'joins','jokes','jumps','keeps','kicks','kills','kinds','kings','knees','knows','lacks','lakes','lands','lasts','lawns','leads','leafs','leans','lefts','lifts','likes','lines','links','lists','lives','loads',
'loans','locks','longs','looks','loses','loves','lucks','lungs','mails','mains','makes','males','malls','masks','meals','means','meats','meets','menus','meres','milks','minds','mines','modes','moons','moves',
'myths','names','nears','necks','needs','nines','noses','notes','okays','opens','ovens','overs','paces','packs','pages','pains','pairs','pales','palms','pants','parks','parts','pasts','paths','peaks','peers',
'picks','piles','pines','pinks','pipes','plans','plays','plots','poems','poets','poles','polls','pools','ports','poses','posts','pours','prays','pulls','quits','races','rails','rains','ranks','rares','rates',
'reads','reals','rests','rices','rides','rings','rises','risks','roads','rocks','roles','rolls','roofs','rooms','roots','ropes','roses','rules','safes','sales','salts','sames','sands','saves','seats','seeds',
'seeks','seems','sells','sends','ships','shoes','shops','shots','shows','shuts','sicks','sides','sighs','signs','sings','sinks','sites','sizes','skins','slips','slows','snaps','snows','soils','songs','sorts',
'souls','soups','spins','spots','stars','stays','steps','stirs','stops','suits','swims','tails','takes','tales','talks','tanks','tapes','tasks','teams','tears','teens','tells','tends','tents','terms','tests',
'texts','thats','thins','times','tires','tones','tools','tours','towns','trees','trips','trues','tubes','turns','twins','types','units','urges','users','vasts','views','votes','wages','waits','wakes','walks',
'walls','wants','warms','warns','waves','wears','weeks','wells','wilds','wills','winds','wines','wings','wipes','wires','wises','woods','words','works','wraps','yards','yeahs','years','yells','yours','zones'];

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