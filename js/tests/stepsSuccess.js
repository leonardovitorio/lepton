export var stepsSuccess = {
    name: "Steps",
    run: ()=>{

        // Promises
        new Promise((resolve, reject)=>{
            setTimeout(resolve(),10);
        }).then(()=>{
            alert("Promise 1 !!!");
            return new Promise((resolve, reject)=>{
                setTimeout(resolve(),10);
            });
        }).then(()=>{
            alert("Promise 2 !!!");
        }); 

        // callbacks
        (function(){
            setTimeout(function(){
                alert("callback 1 !!!");
                setTimeout(function(){
                    alert("callback 2 !!!");
                },10);
            },10)
        })();

        // steps
        var steps = new Steps([
            ()=>{
                setTimeout(steps.next(),10);
            },()=>{
                alert("Step 1 !!!");
                setTimeout(steps.next(),10);
            },()=>{
                alert("Step 2 !!!");
            }
        ]);
        steps.walk();
    }
};