// Instructions can be found in default_parameters.md

export const sayHello = (person) => {
    //return `Hello, ${person === undefined ? "you!" : person + "!"}`;
    return greet(person);
};

function greet(name = `you`, message = `Hello, ${name}!`) {
    return message;
}