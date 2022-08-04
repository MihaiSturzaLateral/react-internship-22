const str = 'The quick brown fox jumps over the lazy dog.'

const words = str.split(' ')
console.log(words[3])

console.log('-------------')

const chars = str.split('')
console.log(chars[8])

console.log('-------------')

const strCopy = str.split();
console.log(strCopy)

console.log('-------------')

const emptyString = '';

console.log(emptyString.split());

console.log(emptyString.split(emptyString))

console.log('-------------')

function splitString(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator)

    console.log('The original string is: ', stringToSplit)
    console.log('The separator is: ', separator)
    console.log('The array has ', arrayOfStrings.length, ' elements: ', arrayOfStrings.join(' / '))
}

const tempestString = 'Oh brave new world that has such people in it.'
const monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'

const space = ' '
const comma = ','

splitString(tempestString, space)
splitString(tempestString)
splitString(monthString, comma)

console.log('-------------')

// Removing spaces from a string

const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand '

console.log(names)

const re = /\s*(?:;|$)\s*/
const nameList = names.split(re)

console.log(nameList)

console.log('-------------')

// Returning a limited number of splits

const myString = 'Hello World. How are you doing?'
const splits = myString.split(' ', 3)

console.log(splits)

console.log('-------------')

// Splitting with a RegExp to include parts of the separator in the result

const myString2 = 'Hello 1 word. Sentence number 2.'
const splits2 = myString2.split(/(\d)/)

console.log(splits2)

// Using a custom splitter

const splitByNumber = {
    [Symbol.split](str) {
        let num = 1
        let pos = 0
        const result = []
        while (pos < str.length) {
            const matchPos = str.indexOf(num, pos);
            if (matchPos === -1) {
                result.push(str.substring(pos))
                break
            }
            result.push(str.substring(pos, matchPos))
            pos = matchPos + String(num).length
            num++
        }
        return result
    }
}

const myString3 = "a1bc2c5d3e4f";
console.log(myString3.split(splitByNumber))

console.log('-------------')

const DELIMITER = ";";

const splitCommands = {
    [Symbol.split](str, lim) {
        const results = [];
        const state = {
            on: false,
            brightness: {
                current: 2,
                min: 1,
                max: 3
            }
        };
        let pos = 0;
        let matchPos = str.indexOf(DELIMITER, pos);

        while (matchPos !== -1) {
            const subString = str.slice(pos, matchPos).trim();

            switch (subString) {
                case "light on":
                    if (!state.on) {
                        state.on = true;
                        results.push(subString);
                    }
                    break;

                case "light off":
                    if (state.on) {
                        state.on = false;
                        results.push(subString);
                    }
                    break;

                case "brightness up":
                    if (state.brightness.current < state.brightness.max) {
                        state.brightness.current += 1;
                        results.push(subString);
                    }
                    break;

                case "brightness down":
                    // Enforce a brightness minimum.
                    if (state.brightness.current > state.brightness.min) {
                        state.brightness.current -= 1;
                        results.push(subString);
                    }
                    break;
            }

            if (results.length === lim) {
                break;
            }

            pos = matchPos + DELIMITER.length;
            matchPos = str.indexOf(DELIMITER, pos);
        }
        if (results.length < lim) {
            results.push(str.slice(pos).trim());
        }

        return results;
    }
};

const commands = "light on; brightness up; brightness up; brightness up; light on; brightness down; brightness down; light off";
console.log(commands.split(splitCommands, 3))