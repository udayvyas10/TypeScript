// value must be everything from A and B 

type Inter1 = {id:string};
type Inter2 = {createdAt : Date};

type Entity = Inter1 & Inter2 // Must have both id and createdAt

const e: Entity = {id:'e1', createdAt: new Date()}

// Create two types username and user email

type NumberHolderUnique = {a:number}
type StringHolderUnique = {a: string}

// type NumberStringMix = NumberHolderUnique & NumberStringMix
// const bad : NumberStringMix ={a : 123}

type Product = {id: string; title : string}
type Priced = {price: number}

type PricedProduct = Product & Priced