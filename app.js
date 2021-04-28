new Set([1,1,2,2,3,4])  // Set(4) {1, 2, 3, 4} - it returns a set with only the first instance of each number

[...new Set("referee")].join("") // "ref" - because it ignores the other instances of E and R, leaving "ref"

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//{
//  [1, 2, 3] => true,
//  [1, 2, 3] => false,
//} It has two entries, one with a key of [1, 2, 3] and value of true and the other with a key of [1, 2, 3] and a value of false

function hasDuplicate(arr){
    const set = new Set(arr)
    if (set.size === arr.length) {
        return false
    } else {
        return true
    }
}

function vowelCount(str){
    const strArray = [...(str.toLowerCase())]
    const vowelMap = strArray.reduce(function(map, letter){
        if ('aieou'.indexOf(letter) !== -1){
            if(map[letter]) {
                map[letter] += 1
            } else {
                map[letter] = 1
            }
        }
        return map
    }, new Map())
    return vowelMap
}

