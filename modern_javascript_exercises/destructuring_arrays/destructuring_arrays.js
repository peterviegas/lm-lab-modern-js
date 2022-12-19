// Instructions can be found in destructuring_arrays.md

export function sequence(order) {
    //const first = order[0];
    //const second = order[1];
    //const third = order[2];

    const [first, second, third] = order; // this pulls out [0], [1] and [2] into variables we are naming `first` `second` and `third`

    return first + ", " + second + ", " + third;

    //return order.toString().replace(/,/g, ", "); Essa tinha sido a minha solução, mas precisa utilizar a destructuring
}