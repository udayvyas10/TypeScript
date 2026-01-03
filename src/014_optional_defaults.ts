function greetPersonOptional(name?:string):string{
    const upperRes =name ? name?.toUpperCase() :"Guest";

    return `Hello ${upperRes}`
}
// console.log(greetPersonOptional('uday'));
// console.log(greetPersonOptional());


function greetPersonDefault(name:string = "Default") : string{
    return `Hello ${name.toUpperCase()}`
}

// console.log(greetPersonDefault('uday'));
// console.log(greetPersonDefault());

function connect(host: string, port? :number, secure?: boolean){
    const p = port?? 80;
    const s = secure?? false

    return `Connect ${host} ${p} ${secure}`
}

connect('localhost', ) // need to provide in a the sequence ONLY or else it will throw an error
