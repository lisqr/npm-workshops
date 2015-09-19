// 2
var output = 0

if (process.argv && process.argv.length > 2) {
    var inputs = process.argv.slice(2);
    for (var i= 0; i < inputs.length; i++) {
        output += Number(inputs[i])
    }
    console.log(output);
}