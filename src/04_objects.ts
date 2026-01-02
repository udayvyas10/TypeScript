
// email?: string -> email maybe absent, but if present it will be a string
// it is not same as email : string | undefiner


type User = {
    id : string; // required
    name : string;
    email ? : string; //optional (this could be absent)
    readonly createdAt : Date //cannot be re-assigned 
}

const user1 : User = {id:"u1", name:"Uday", createdAt:new Date()}
const user2 : User = {id:"u1", name:"John", createdAt:new Date(), email:"email"}

// user1.createdAt = new Date()  => it was a readonly property, therefore you cannot change it !

type User2 = {email?:string}
type User3 = {email : string | undefined}

type Count = {[k:string]: number};
type Count1 = Record<"likes" | "Views" | "shares" | "random" , number>;

const c1 : Count = {whatever: 1};
const c2 : Count1 = {likes:1, Views:1, shares:3, random:5};
