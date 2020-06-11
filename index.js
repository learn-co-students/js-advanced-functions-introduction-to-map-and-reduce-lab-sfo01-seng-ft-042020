// Your code here
function mapToNegativize(src){
    let r = [];

    for(var i = 0; i < src.length; i++){
        let o = src[i] * -1;
        r.push(o);
    }
    return r; 
}

function mapToNoChange(src){
    let r = []
    for(let i = 0; i < src.length; i++){
        r.push(src[i])
    }
    return r
}

function mapToDouble(src){
    let r = []
    for(let i = 0; i < src.length; i++){
        r.push(src[i] * 2)

    }
    return r
}

function mapToSquare(src){
    let r = []
    for(let i = 0; i < src.length; i++){
        r.push(src[i] ** 2)
    }
    return r
}

function reduceToTotal(src, startingPoint=0){
    let r = startingPoint
    for(let i = 0; i < src.length; i++){
        r = src[i] += r
    }
    return r
}

function reduceToAllTrue(src){
    for(let i = 0; i < src.length; i++){
        if(!src[i]) return false
    }
    return true
}

function reduceToAnyTrue(src){
    for(let i = 0; i < src.length; i++){
        if(src[i]) return true
    }
    return false
}