// Write a program that, given a word, computes the scrabble score for that word.

// Letter Values
// You'll need these:

// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// There will be preloaded a $dict with all this values in your kata in form of a hash $dict["E"] => 1.

// Examples
// scrabbleScore('cabbage') // => 14
// "cabbage" should be scored as worth 14 points:

// 3 points for C
// 1 point for A, twice
// 3 points for B, twice
// 2 points for G
// 1 point for E
// And to total:

// 3 + 2*1 + 2*3 + 2 + 1
// = 3 + 2 + 6 + 3
// = 5 + 9
// = 14
// Empty string should return 0. The string can contain whitespaces, you should calculate the scrablle score only of the letters in that string.

// scrabbleScore('') // => 0
// scrabbleScore('ca bba g  e') // => 14

function scrabbleScore(str) {
    const one = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
    const two = ['D', 'G'];
    const three = ['B', 'C', 'M', 'P'];
    const four = ['F', 'H', 'V', 'W', 'Y'];
    const five = ['K'];
    const eight = ['J', 'X'];
    const ten = ['Q', 'Z'];

    let points = 0;

    str.toUpperCase().split('').map(char => {
        if (one.includes(char)) points += 1;
        if (two.includes(char)) points += 2;
        if (three.includes(char)) points += 3;
        if (four.includes(char)) points += 4;
        if (five.includes(char)) points += 5;
        if (eight.includes(char)) points += 8;
        if (ten.includes(char)) points += 10;
    }, 0);

    return points;

}