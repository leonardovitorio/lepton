var httpRequest = new XMLHttpRequest();

var count = 0;
var queue = [];
var canRun = true;

function loop(){
    if(queue.length > 0 && canRun){
        if(count < queue.length){
            canRun = false;
            queue[count++]();
        }
    }
};

setInterval(loop,10);

export class Ajax {
    static get(url, callback) {
        queue.push(()=>{
            if (!httpRequest) {
                callback(true, text);
            }
            else {
                httpRequest.onreadystatechange = () =>{
                    Ajax.response(callback);
                };
                httpRequest.open('GET', url);
                httpRequest.send();
            }
        });
    }
    static delete(url, callback) {
        queue.push(()=>{
            if (!httpRequest) {
                callback(true, text);
            }
            else {
                httpRequest.onreadystatechange = () =>{
                    Ajax.response(callback);
                };
                httpRequest.open('DELETE', url);
                httpRequest.send();
            }
        });
    }
    static post(url, data, callback) {
        queue.push(()=>{
            if (!httpRequest) {
                callback(true, text);
            }
            else {
                httpRequest.onreadystatechange = () =>{
                    Ajax.response(callback);
                };
                httpRequest.open('POST', url);
                httpRequest.send(data);
            }
        });
    }
    static put(url, data, callback) {
        queue.push(()=>{
            if (!httpRequest) {
                callback(true, text);
            }
            else {
                httpRequest.onreadystatechange = () =>{
                    Ajax.response(callback);
                };
                httpRequest.open('PUT', url);
                httpRequest.send(data);
            }
        });
    }
    static response(callback) {
        if (httpRequest.readyState && httpRequest.readyState === XMLHttpRequest.DONE) {
            canRun = true;
            if (httpRequest.status === 200) {
                var text  = httpRequest.responseText;
                callback(false, text);
            } else {
                callback(true, text);
            }
            if(count >= queue.length){
                queue = [];
                count = 0;
            }
        }
    }
}