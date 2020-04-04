let language = 'Ru';
let caps = false;
const textarea = document.createElement('textarea');

textarea.classList.add('textarea');
document.body.append(textarea);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
document.body.append(keyboard);



const buttons = [
	{ code: 'Backquote', En: '`', Ru: 'ё', print: true},  
	{ code: 'Digit1', En: '1', Ru: '1', print: true},
	{ code: 'Digit2', En: '2', Ru: '2', print: true},
	{ code: 'Digit3', En: '3', Ru: '3', print: true},
	{ code: 'Digit4', En: '4', Ru: '4', print: true},
	{ code: 'Digit5', En: '5', Ru: '5', print: true},
	{ code: 'Digit6', En: '6', Ru: '6', print: true},
	{ code: 'Digit7', En: '7', Ru: '7', print: true},
	{ code: 'Digit8', En: '8', Ru: '8', print: true},
	{ code: 'Digit9', En: '9', Ru: '9', print: true},
	{ code: 'Digit0', En: '0', Ru: '0', print: true},
	{ code: 'Minus', En: '-', Ru: '-', print: true},
	{ code: 'Equal', En: '=', Ru: '=', print: true},
	{ code: 'Backslash', En: '/', Ru: '/', print: true},
	{ code: 'Backspace', En: '←', Ru: '←', print: false},
	{ code: 'Tab', En: 'Tab', Ru: 'Tab', print: false},
	{ code: 'KeyQ', En: 'q', Ru: 'й', print: true},
	{ code: 'KeyW', En: 'w', Ru: 'ц', print: true},
	{ code: 'KeyE', En: 'e', Ru: 'у', print: true},
	{ code: 'KeyR', En: 'r', Ru: 'к', print: true},
	{ code: 'KeyT', En: 't', Ru: 'е', print: true},
	{ code: 'KeyY', En: 'y', Ru: 'н', print: true},
	{ code: 'KeyU', En: 'u', Ru: 'г', print: true},
	{ code: 'KeyI', En: 'i', Ru: 'ш', print: true},
	{ code: 'KeyO', En: 'o', Ru: 'щ', print: true},
	{ code: 'KeyP', En: 'p', Ru: 'з', print: true},
	{ code: 'BracketLeft', En: '[', Ru: 'х', print: true},
	{ code: 'BracketRight', En: ']', Ru: 'ъ', print: true},
	{ code: 'Delete', En: 'Del', Ru: 'Del', print: false},
	{ code: 'CapsLock', En: 'Caps', Ru: 'Caps', print: false},
	{ code: 'KeyA', En: 'a', Ru: 'ф', print: true},
	{ code: 'KeyS', En: 's', Ru: 'ы', print: true},
	{ code: 'KeyD', En: 'd', Ru: 'в', print: true},
	{ code: 'KeyF', En: 'f', Ru: 'а', print: true},
	{ code: 'KeyG', En: 'g', Ru: 'п', print: true},
	{ code: 'KeyH', En: 'h', Ru: 'р', print: true},
	{ code: 'KeyJ', En: 'j', Ru: 'о', print: true},
	{ code: 'KeyK', En: 'k', Ru: 'л', print: true},
	{ code: 'KeyL', En: 'l', Ru: 'д', print: true},
	{ code: 'Semicolon', En: ';', Ru: 'ж', print: true},
	{ code: 'Quote', En: "'", Ru: 'э', print: true},
	{ code: 'Enter', En: 'Enter', Ru: 'Enter', print: false},
	{ code: 'ShiftLeft', En: 'Shift', Ru: 'Shift', print: false},
	{ code: 'KeyZ', En: 'z', Ru: 'я', print: true},
	{ code: 'KeyX', En: 'x', Ru: 'ч', print: true},    
	{ code: 'KeyC', En: 'c', Ru: 'с', print: true},
	{ code: 'KeyV', En: 'v', Ru: 'м', print: true},
	{ code: 'KeyB', En: 'b', Ru: 'и', print: true},
	{ code: 'KeyN', En: 'n', Ru: 'т', print: true},
	{ code: 'KeyM', En: 'm', Ru: 'ь', print: true},
	{ code: 'Comma', En: ',', Ru: 'б', print: true},
	{ code: 'Period', En: '.', Ru: 'ю', print: true},
	{ code: 'Slash', En: '/', Ru: '.', print: true},
	{ code: 'ShiftRight', En: 'Shift', Ru: 'Shift', print: false},
	{ code: 'ControlLeft', En: 'Ctrl', Ru: 'Ctrl', print: false},
	{ code: 'MetaLeft', En: 'Win', Ru: 'Win', print: false},     
	{ code: 'AltLeft', En: 'Alt', Ru: 'Alt', print: false},
	{ code: 'Space', En: ' ', Ru: ' ', print: true},
	{ code: 'AltRight', En: 'Alt', Ru: 'Alt', print: false},
	{ code: 'ArrowLeft', En: '←', Ru: '←', print: false},
	{ code: 'ArrowDown', En: '↓', Ru: '↓', print: false},
	{ code: 'ArrowUp', En: '↑', Ru: '↑', print: false},
	{ code: 'ArrowRight', En: '→', Ru: '→', print: false},
	{ code: 'ControlRight', En: 'Ctrl', Ru: 'Ctrl', print: false}
]

function createKeyboard () {
	for (var i = 0; i < buttons.length; i++) {		
	if (language === 'En') {keyboard.children[i].textContent = buttons[i].En;	}
	if (language === 'Ru') {keyboard.children[i].textContent = buttons[i].Ru;	}	
	}
}

	for (var i = 0; i < buttons.length; i++) { // задаём размер кнопок
		var keyboardButton = document.createElement('div');
		keyboardButton.classList.add('keyboard__button');

		switch (buttons[i].code) {		
			case 'AltLeft':
			case 'AltRight':	
			case 'MetaLeft':
			case 'ControlLeft':
			case 'ControlRight':						
				keyboardButton.classList.add('keyboard__button5');
				break;

			case 'Delete':	
			case 'Tab':						
				keyboardButton.classList.add('keyboard__button6');
				break;

			case 'CapsLock':
			case 'Enter':				
				keyboardButton.classList.add('keyboard__button8');
				break;

			case 'ShiftLeft':
			case 'ShiftRight':				
				keyboardButton.classList.add('keyboard__button10');
				break;

			case 'Space':		
				keyboardButton.classList.add('keyboard__button19');
				break;

			default:
				keyboardButton.classList.add('keyboard__button4');
				break;
		}
	
		keyboardButton.dataset.code = buttons[i].code;	
		keyboardButton.dataset.En = buttons[i].En;
		keyboardButton.dataset.Ru = buttons[i].Ru;
		keyboardButton.dataset.print = buttons[i].print;
		if (language === 'En') {keyboardButton.textContent = buttons[i].En;	}
		if (language === 'Ru') {keyboardButton.textContent = buttons[i].Ru;	}
		keyboard.appendChild(keyboardButton);   
	}

// Отпускаем кнопку реальной клавиатуры
document.addEventListener('keydown', (event) => {
	let currentKey = document.querySelector(`[data-code="${event.code}"]`);
	currentKey.classList.add('active');	
	printLetter(currentKey);
})
// Нажимаем кнопку реальной клавиатуры
document.addEventListener('keyup', (event) => {
	document.querySelector(`[data-code="${event.code}"]`).classList.remove('active');	
})

// Клик мышкой на кнопку виртуальной клавиатуры
keyboard.addEventListener('click', event => {
	if (event.target.classList.contains('keyboard__button')) {
			printLetter(event.target);
	}
})

// Функция вывода символа 
function printLetter(currentKey) {
	if (currentKey.dataset.print === 'false') {
			return;
	}			   
	let letter = (language === 'En') ? currentKey.dataset.En : currentKey.dataset.Ru;
	textarea.textContent = textarea.textContent + letter;
}

// Переключения языка проверка на 2 нажатие 
function runOnKeys(func, ...codes) {
	let dublKeys = new Set();

	document.addEventListener('keydown', function(event) {
		dublKeys.add(event.code);

		for (let code of codes) { // все ли клавиши из набора нажаты?
			if (!dublKeys.has(code)) {
				return;
			}
		}		
		// чтобы избежать "залипания" клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново
		dublKeys.clear();
		func();
	});

	document.addEventListener('keyup', function(event) {
		dublKeys.delete(event.code);
	});

}
runOnKeys(
	() => changeLanguage(),
	"ShiftLeft",
	"AltLeft"
);

// Функция смены языка и обновления символов кравиатуры
function changeLanguage() {
	language = (language === 'Ru') ? 'En' : 'Ru';
	createKeyboard();
}



