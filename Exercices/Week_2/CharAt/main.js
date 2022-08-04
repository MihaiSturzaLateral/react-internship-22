const sentence = 'The quick brown fox jumps over the lazy dog.'

const index = 4

console.log(`The character at index ${index} is ${sentence.charAt(index)}`)

console.log('---------------')

// Displaying characters at different locations in a string

const anyString = 'Brave new world'
console.log("The character at index 0   is '" + anyString.charAt() + "'")

console.log("The character at index 0   is '" + anyString.charAt(0) + "'")

console.log("The character at index 1   is '" + anyString.charAt(1) + "'")

console.log("The character at index 2   is '" + anyString.charAt(2) + "'")

console.log("The character at index 3   is '" + anyString.charAt(3) + "'")

console.log("The character at index 4   is '" + anyString.charAt(4) + "'")

console.log("The character at index 999 is '" + anyString.charAt(999) + "'")

console.log('---------------')

// Getting whole characters

const str = 'A \uD87E\uDC04 Z'
for (let i = 0, chr; i < str.length; i++) {
    if ((chr = getWholeChar(str, i)) === false) {
        continue
    }
    console.log(chr)
}

function getWholeChar(str, i) {
    const code = str.charCodeAt(i)

    if (Number.isNaN(code)) {
        return ''
    }
    if (code < 0xD800 || code > 0xDFFF) {
        return str.charAt(i)
    }
    if (0xD800 <= code && code <= 0xDBFF) {
        if (str.length <= (i + 1)) {
            throw 'High surrogate without following low surrogate'
        }
        const next = str.charCodeAt(i + 1);
        if (0xDC00 > next || next > 0xDFFF) {
            throw 'High surrogate without following low surrogate'
        }
        return str.charAt(i) + str.charAt(i + 1)
    }

    if (i === 0) {
        throw 'Low surrogate without preceding high surrogate'
    }
    const prev = str.charCodeAt(i - 1)
    if (0xD800 > prev || prev > 0xDBFF) {
        throw 'Low surrogate without preceding high surrogate'
    }
    return false
}

console.log('---------------')
/*
let str = 'A\uD87E\uDC04Z'  // We could also use a non-BMP character directly
for (let i = 0, chr; i < str.length; i++) {
  [chr, i] = getWholeCharAndI(str, i)

  // Adapt this line at the top of each loop, passing in the whole string and
  // the current iteration and returning an array with the individual character
  // and 'i' value (only changed if a surrogate pair)

  console.log(chr)
}

function getWholeCharAndI(str, i) {
  let code = str.charCodeAt(i)

  if (Number.isNaN(code)) {
    return ''  // Position not found
  }
  if (code < 0xD800 || code > 0xDFFF) {
    return [str.charAt(i), i]  // Normal character, keeping 'i' the same
  }

  // High surrogate (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xD800 <= code && code <= 0xDBFF) {
    if (str.length <= (i + 1)) {
      throw 'High surrogate without following low surrogate'
    }
    let next = str.charCodeAt(i + 1)
      if (0xDC00 > next || next > 0xDFFF) {
        throw 'High surrogate without following low surrogate'
      }
      return [str.charAt(i) + str.charAt(i + 1), i + 1]
  }

  // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
  if (i === 0) {
    throw 'Low surrogate without preceding high surrogate'
  }

  let prev = str.charCodeAt(i - 1)

  // (could change last hex to 0xDB7F to treat high private surrogates
  // as single characters)
  if (0xD800 > prev || prev > 0xDBFF) {
    throw 'Low surrogate without preceding high surrogate'
  }

  // Return the next character instead (and increment)
  return [str.charAt(i + 1), i + 1]
}

*/

// Fixing charAt() to support non-Basic-Multilingual-Plane (BMP) characters

function fixedCharAt(str, idx) {
    let ret = ''
    str += ''
    let end = str.length

    let surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
    while ((surrogatePairs.exec(str)) != null) {
        let lastIdx = surrogatePairs.lastIndex
        if (lastIdx - 2 < idx) {
            idx++
        } else {
            break
        }
    }

    if (idx >= end || idx < 0) {
        return ''
    }

    ret += str.charAt(idx)

    if (/[\uD800-\uDBFF]/.test(ret) && /[\uDC00-\uDFFF]/.test(str.charAt(idx + 1))) {
        // Go one further, since one of the "characters" is part of a surrogate pair
        ret += str.charAt(idx + 1)
    }
    return ret
}