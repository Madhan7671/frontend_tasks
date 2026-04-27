//1

type demo=string;

let username:demo="apparao";
console.log(typeof username);
console.log(username);

//2


type obj={
    brand:demo;
    year:number;
};

let car:obj={
    brand:"ferrari",
    year:2026
}

console.log(car);

//3

type profile={
    bio?:demo;
    id:number;
}

let user:profile={
    bio:"hello everyone i am here to tell about me .....",
    id:1234
}

console.log(user);

type fun=(a:number,b:number)=>number;
let user1:fun =(x,y){
    return(x+y);
}

console.log(user1);
