function demo(a:number,b:number=234,c?:number):number
{
    return(a+b+(c||0));
}
console.log(demo(100));
console.log(demo(200,undefined,300));


function demo2(a:number,b:number,c:number):number;
function demo2(a:string,b:string,c:string):string;
function demo2(a:any,b:any,c:any):any{
    return(a+b+c);
}

demo2(12,13,14);
demo2("a","b","c");
