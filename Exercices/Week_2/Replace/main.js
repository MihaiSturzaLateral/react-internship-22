const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'))

const regex = /Dog/i
console.log(p.replace(regex, 'ferret'))

console.log('------------')

function replacer(match, p1, p2, p3, offset, string) {
    return [p1, p2, p3].join(' - ')
}
let newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer)
console.log(newString)

console.log('------------')

// Defining the regular expression in replace()

let str = 'Twas the night before Xmas...'
let newstr = str.replace(/xmas/i, 'Christmas')
console.log(newstr)

console.log('------------')

// Using global and ignore with replace()

let re = /apples/gi
let str2 = 'Apples are round, and apples are juicy.'
let newstr2 = str2.replace(re, 'oranges')
console.log(newstr2)

console.log('------------')

// Switching words in a string

let re3 = /(\w+)\s(\w+)/;
let str3 = 'John Smith';
let newstr3 = str3.replace(re3, '$2, $1');
console.log(newstr3)

console.log('------------')

// Using an inline function that modifies the matched characters

function styleHyphenFormat(propertyName) {
    function upperToHyphenLower(match, offset, string) {
        return (offset > 0 ? '-' : '') + match.toLowerCase();
    }
    return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

function f2c(x) {
    function convert(str, p1, offset, s) {
        return ((p1 - 32) * 5 / 9) + 'C'
    }
    let s = String(x)
    let test = /(-?\d+(?:\.\d*)?)F\b/g
    return s.replace(test, convert)
}