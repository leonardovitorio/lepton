export function assert(result, msgSuccess, msgError){
    if(result){
        console.log("Success: " + msgSuccess);
    }
    else{
        console.error("Error: " + msgError);
    }
}