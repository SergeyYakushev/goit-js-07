const input = document.querySelector('[data-length="6"]');

input.addEventListener('blur', onBlurInputChange);

function onBlurInputChange(event) {

    (event.currentTarget.value.length === Number(input.dataset.length)) ?
        input.classList.toggle('valid') :
        input.classList.toggle('invalid');


};
