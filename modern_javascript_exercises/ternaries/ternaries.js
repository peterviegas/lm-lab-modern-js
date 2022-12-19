// Instructions can be found in ternaries.md

/*export function sayHello(name) {
  if (name === undefined) {
    return "Hello you!";
  } else return "Hello, " + name + "!";
}*/

export function sayHello(name) {
    //return !name ? `Hello you!` : `Hello, ${name}!`;
    return (name === undefined || name === '') ? `Hello you!` : `Hello, ${name}!`;
}