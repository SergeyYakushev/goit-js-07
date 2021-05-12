const itemEls = document.querySelectorAll('.item');

console.log(`В списке ${itemEls.length} категории.`);


itemEls.forEach(element => {

    const titleCategory = element.firstElementChild.textContent;
    const countListItems = element.lastElementChild.children.length;

    console.log(`\nКатегория: ${titleCategory}\nКоличество элементов: ${countListItems}\n`);


});




