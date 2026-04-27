//1)
function msg(){
    return "welcome";
}
console.log(msg());

//2)
let table = function(num){
    let res="";
    for(let i=1;i<=10;i++){
        res += num + " * "+i+" = "+( num*i)+"\n";
    }
    return res;
}

console.log(table(2));

//3)
function grandParent(num1){
    function parent(num2){
        function child(num3){
            function grandChild(num4){
                let res = num4+num3+num2+num1;
                return res;
            }
            return grandChild(1);
        }
        return child(2);
    }
    return parent(3);
}
console.log(grandParent(4));

//4)
function cbf(a,b)
{
    return a+b;
}

function hdf(n1,n2,cbf){
    return cbf(n1,n2);
}
console.log(hdf(1,2,cbf));

//5)
let arrow1 = (a,b) => {
    return a*b;
}
console.log(arrow1(2,3));

//6)
function small(a,b){
    if(a<b){
        return a+" is the small number";
    }
    else{
        return b+" is the small number";
    }
}
console.log(small(5,6));

//6)
function evenOrOdd(a){
    if(a%2==0){
        // console.log(a+" is a even number");
        return a+" is an even number";
    }
    else{
        // console.log(a+" is a odd number");
        return a+" is a odd number";
    }
}
console.log(evenOrOdd(4));