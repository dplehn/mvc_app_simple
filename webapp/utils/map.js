/**
 * Created by entw_dplehn on 11.07.2017.
 */

var names = [["det", 1], ["hugo", 2], ["fridolin", 3]];
console.log(names);

var myMap = new Map(names);
console.log(myMap);


var colors = [
    {r: 255, g: 255, b: 255 }, // White
    {r: 128, g: 128, b: 128 }, // Gray
    {r: 0,   g: 0,   b: 0   }  // Black
];

var newColors = colors.map(function(val) {
    return {
        r: Math.round( val.r / 2 ),
        g: Math.round( val.g / 2 ),
        b: Math.round( val.b / 2 )
    };
});
console.log(newColors);

var array = [4,2,3,1,2];
/* indexof gibt das erste!!! vorkommen zurück */

console.log(array.indexOf(2));

var uniqueArray = array.filter(function(elem, index, array) {
        return array.indexOf(elem) === index;
    }
);

console.log(uniqueArray);

var rockets = [
    { country:'Russia', launches:32 },
    { country:'US', launches:23 },
    { country:'China', launches:16 },
    { country:'Europe(ESA)', launches:7 },
    { country:'India', launches:4 },
    { country:'Japan', launches:3 }
];

var sum = rockets.reduce(function(prevVal, elem, index) {
    if (index === 1) {
        return 100;
    }

    return prevVal + elem.launches;
}, 0);

console.log(sum);
