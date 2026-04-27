type funct=(a:number,b:number)=>number;

let fn:funct=(x,y)=>{
    return(x+y);
}

console.log(fn(23,24));


let multi:funct=(x,y)=>{
    return(x*y);
}

console.log(multi(23,34));

type fun2=(a:string)=>void;

let fn2:fun2=(x)=>{
    console.log(x);
}

function add(a:number,b:number){
    return(a+b);
}
