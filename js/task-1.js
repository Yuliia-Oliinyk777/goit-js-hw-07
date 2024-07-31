const allItems = document.querySelectorAll('#categories > .item');
console.log(`Number of categories: ${allItems.length}`);
allItems.forEach(item => {
    const title = item.querySelector('h2');
    const titleItem = item.querySelectorAll('li');
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${titleItem.length}`);
}
);