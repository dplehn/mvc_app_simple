/**
 * Created by entw_dplehn on 10.07.2017.
 */

var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    }
};

function myConcat(separator) {
    var args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
}

var counter1 = makeCounter();Array
var counter2 = makeCounter();
console.log(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
console.log(counter1.value()); /* Alerts 2 */
counter1.decrement();
console.log(counter1.value()); /* Alerts 1 */
console.log(counter2.value()); /* Alerts 0 */

// returns "red, orange, blue"
var StringArray = myConcat(", ", "red", "orange", "blue").split(',');

console.log(StringArray);

