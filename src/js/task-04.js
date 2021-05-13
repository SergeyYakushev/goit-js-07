const refs = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    count: document.querySelector('#value'),
};

refs.decrement.addEventListener('click', onBtnDecrement);
refs.increment.addEventListener('click', onBtnIncrement);


function onBtnDecrement() {

    const counter = Number(refs.count.textContent) - 1;

    refs.count.textContent = counter;
};

function onBtnIncrement() {

    const counter = Number(refs.count.textContent) + 1;

    refs.count.textContent = counter;
};
