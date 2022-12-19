// Instructions can be found in default_parameters.md

//Forma passada pelo Neil mais simples e comum de implementar
//export const sayHello = (person = "you") => { 
export const sayHello = (person = "you") => {
    //return `Hello, ${person === undefined ? "you!" : person + "!"}`;
    return greet(person);
};

function greet(name, message = `Hello, ${name}!`) {
    return message;
}


//Minha implementação está ok, mas não comum
/*export const sayHello = (person) => {
    //return `Hello, ${person === undefined ? "you!" : person + "!"}`;
    return greet(person);
};

function greet(name = `you`, message = `Hello, ${name}!`) {
    return message;
}*/