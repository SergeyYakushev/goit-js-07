
//ДОДЕЛЫВАЮ, можно не проверять - не обязательная!!!!!


const refs = {
    input: document.querySelector('#controls > input'),
    createBtn: document.querySelector('[data-action="render"]'),
    clearBtn: document.querySelector('[data-action="destroy"]'),
};

console.log(refs.input);
console.log(refs.createBtn);
console.log(refs.clearBtn);

refs.input.addEventListener('input', onInputChange);
//refs.createBtn.addEventListener('click', onCreateBoxes);
//refs.clearBtn.addEventListener('click', onDestroyBoxes);

function onInputChange(e) {

    const markupDivString = [];
    width = "30px";
    height = "30px";


    for (let i = 0; i <= e.currentTarget.value; i++) {

        const element = document.createElement('div');

    }

    e.currentTarget.value
};

const elementFirst = document.createElement('div');



//ДОДЕЛЫВАЮ, можно не проверять - не обязательная