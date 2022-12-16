// Instructions can be found in rest_parameters.md

function add(...numbers) {

    // Add a loop here
    let count = 0;
    for (const num of numbers) {
        count += num;
    }
    return count;
}

//add(1, 2, 3, 4, 5);

module.exports = add;