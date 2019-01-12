const setDifference = require ('./differences')
const setIntersection = require ('./intersection')

let set1 = ['dogs', 'cats', 'red', 'bananas', 'code', 'movies'];
let set2 = ['blue', 'horses', 'dogs', 'code', 'rain'];

let difference = setDifference(set1, set2);
let intersection = setIntersection(set1, set2);

// Result should be: cats, red, bananas, movies, blue, horses rain
console.log(difference);

// Result should be: dogs, code
console.log(intersection);