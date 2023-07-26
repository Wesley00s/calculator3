const keysNum = [...document.querySelectorAll('.num')];
const keysOp = [...document.querySelectorAll('.op')];
const keyRes = document.querySelector('.res');
const display = document.querySelector('.display');
const keyClear = document.querySelector('.clear');
const parenL = document.querySelector('#kLpa');
const parenR = document.querySelector('#kRpa');
const zero = document.querySelector('.zero');
const copy = document.querySelector('.copy');
const calcTab = document.querySelector('.calcTab');
const calc = document.querySelector('.calc');
const imgArrow = document.querySelector('.imgArrow');

let signal = false;
let decimals = false;

keysNum.forEach((element) => {
    element.addEventListener('click', (event) => {
        signal = false;
        if (event.target.innerHTML == '.') {
            if (!decimals) {
                decimals = true;
                if (display.innerHTML == '0') {
                    display.innerHTML = '0.';
                } else {
                    
                    display.innerHTML += event.target.innerHTML;
                }
            }
        } else {
            
            if (display.innerHTML == '0') {
                display.innerHTML = '';
            }
            display.innerHTML += event.target.innerHTML;
        }
    });
});

keysOp.forEach((element) => {
    element.addEventListener('click', (event) => {
        decimals = false;
        
        if (!signal) {
            signal = true;
            if (display.innerHTML == 0) {
                display.innerHTML = '';
            }
            if (event.target.innerHTML == 'x') {
                display.innerHTML += '*';
            } else {
                display.innerHTML += event.target.innerHTML;
            }
        }
    });
});

keyClear.addEventListener('click', () => {
    decimals = false;
    signal = false;
    display.innerHTML = 0;
});

keyRes.addEventListener('click', () => {
    decimals = false;
    signal = false;
    const result = eval(display.innerHTML);
    display.innerHTML = result;
});

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(display.innerHTML);
    alert('Copied to clipboard');
});


calcTab.addEventListener('click', (event) => {
    calc.classList.toggle('calcShow');
    if (calc.classList.contains('calcShow')) {
        imgArrow.setAttribute('src', 'leftArrow.png');
    } else {
        imgArrow.setAttribute('src', 'rigthArrow.png');
    }
});