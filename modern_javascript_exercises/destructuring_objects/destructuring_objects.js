// Instructions can be found in destructuring_objects.md

export function introduction(person) {
    //const name = person.name;
    //const city = person.city;
    //const pet = person.pet;

    //return "Hello my name is " + name + " and I live in " + city + " with " + pet;
    return greet(person.name, person.city, person.pet)
}

function greet(name, city, pet, message = `Hello my name is ${name} and I live in ${city} with ${pet}`) {
    return message;
}