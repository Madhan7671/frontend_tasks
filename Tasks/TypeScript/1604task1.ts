interface Person{
    name:string,
    age:number
};

let user:Person={
    name:"apparao",
    age:23
}

console.log(user);

let variable:"active"| "inactive";


interface car{
    brand:string,
    model:string
}

let car1:car={
    brand:"ferrari",
    model:"portofino"
}

let car2:car={
    brand:"tata",
    model:"jaquar"
}


interface role{
    role:"user" | "Admin";
}

let userrole:role={
    role:"user"
};

console.log(userrole);

interface button{
    text:string,
    type:"primary"|"secondary"
};

interface order{
    id:number;
    status:"pending" | "completed"
};

