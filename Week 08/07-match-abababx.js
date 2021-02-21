//abababx
function match(str){
    let state = start;
    for(let s of str){
        state = state(s);
    }
    return state === end;
}

function start(s){
    if(s === 'a'){
        return foundA;
    }
    return start;
}
function end(){
    return end;
}
function foundA(s){
    if(s === 'b'){
        return foundB;
    }else{
        return start(s);
    }
}
function foundB(s){
    if(s === 'a'){
        return foundA2;
    }else{
        return start(s);
    }
}
function foundA2(s){
    if(s === 'b'){
        return foundB2;
    }else{
        return foundA(s);
    }
}
function foundB2(s){
    if(s === 'a'){
        return foundA3;
    }else{
        return foundB(s);
    }
}
function foundA3(s){
    if(s === 'b'){
        return foundB3;
    }else {
        return foundA2(s);
    }
}
function foundB3(s){
    if(s === 'x'){
        return end;
    }else{
        return foundB2(s);
    }
}
console.log(match("adcabab"))