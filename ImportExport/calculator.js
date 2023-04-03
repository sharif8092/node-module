
const add = (a,b)=>{
    return a+b;
}
const sub= (a,b)=>{
    return a-b;
}
const mul= (a,b)=>{
    return a*b;
}

const div =(a,b)=>{
    return a/b;
}

// module.export = add;  //if only single export

// module.exports.add1 = add;
// module.exports.sub1 = sub;
// module.exports.mul1 = mul;

module.exports={
    add, sub,mul, 
    div1:div //to give name 
}

