

// interface -> named face for objects 

interface User333{
    id : string;
    name : string;
    email?: string;
    readonly createdAt : Date;
}

const user333 : User333 = {id:'1', name:'uday', createdAt : new Date(), email: 'xyz@gmail.com'}


interface Admin333 extends User333{
    permission:string[]
}

const admin333 :Admin333 = {
    id:'2', name:'uday', createdAt : new Date(), email: 'xyz@gmail.com', permission:["admin"]
}

interface WithMeta1{
    meta:{
        active : boolean
    }
}

interface AdminWithMeta extends Admin333, WithMeta1{}