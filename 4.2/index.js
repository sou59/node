var fruits = [
    'apple', 
    'banana',
    'grapes',
    'orange'
];

for (var i = 0; i< fruits.length; i++) {
    var d = Math.random(0, 1000) + 1000;
    setTimeout(function() {
        console.log(i + '. ' + fruits[i] + d/1000 + ' seconds');
    }, d);
}

console.log('Using callback ...');

fruits.forEach(function(fruits, index) {
    var d = Math.random(0, 1000) + 1000;
    setTimeout(function() {
    console.log(index + '. ' + fruits+ d/1000 + ' seconds');
}, d);
});