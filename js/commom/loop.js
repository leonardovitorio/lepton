export function loop(array, func, html){
    var text = [];
    var index = 0;
    array.forEach(element => {
        text.push(func(element, index++, html));
    });
    return text.join('');
}

