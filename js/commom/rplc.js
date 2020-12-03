export function rplc(obj, content){
    var keys = Object.keys(obj);
    keys.forEach(key =>{
        content = content.split(''.concat('{',key,'}')).join(obj[key]);
    });
    return content;
}