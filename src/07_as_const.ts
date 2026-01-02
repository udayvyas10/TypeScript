

const ROLES = ["admin", "user", "operator"] as const

//Derive a union from arrat
type Role = (typeof ROLES)[number]

function setRole(r:Role){
    console.log(r);
}

setRole('admin');