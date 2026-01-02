
// value -> this OR that

function printId(id: string | number){
    // if(typeof id === 'string'){
    //     id.toLocaleLowerCase
    // } else{
    //     id.toFixed(2)
    // }
}

// object union
type Admin = {role:'Admin', permissions: string[]}
type Customer = {role:'Customer', loyaltyPoint : number}

function describeUser(u: Admin | Customer){
    if(u.role === 'Admin'){
        console.log(u.permissions);
    } else {
        console.log(u.loyaltyPoint);
        
    }
}

function describeUserWithInOperator (u: Admin | Customer){
   if('permissions' in u){
    console.log(u.role, 'Admin user');
   } else {
    console.log(u.loyaltyPoint);
   }
}

// array of unions and union of arrays
const arrOfUnion:(string | number)[]=["a", 1, "b", "2"]

const unionOfArrays: string [] | number[] = Math.random() > 0.1 ? ["x","y"]:[1,2];

// unionOfArrays.push("z")