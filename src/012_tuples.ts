
// tuples => you have fixed length and fixed types
// (string | number)[]
// optional tuples

const userEntry: [string, number] = ['uday', 22] //indexing matters

type ResponseRow = [status : number, message? :string]

const r11: ResponseRow = [22,]

//readonly tuples

const corners: readonly[number, number] = [0,0]