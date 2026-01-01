// goal -> understand when to let TypeScript infer types
//ts -> js very well
//when ts will writes the types / you are going to write

let count = 0; //ts see's number
const site = "acedevhub"; // ts see's the exact literal string
const scores = [10,20,30];

//over annotation isnt bad -> just noisy 


export function add(a:number, b:number) : number {
    return a + b
}

console.log(add(5,2));


//you should also annotate when the type is not obvious

let maybe: string | number ;
maybe = Math.random() > 0.5 ? "test" : 10