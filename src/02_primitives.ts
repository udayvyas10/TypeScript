let username :string = "Uday";
let age : number = 22;
let isCreator = true;

const big :bigint = 2n ** 62n -1n;

//Operator '+' cannot be applied to types 'bigint' and 'number'.
// const mixed = big + age

const TOKEN : unique symbol = Symbol('TOKEN');

function yearsToday(years : number) : number{
    return years * 365
}

console.log(username.toUpperCase())
console.log(yearsToday(2));


