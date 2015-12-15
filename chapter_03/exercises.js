/*
    Minimum
    The previous chapter introduced the standard function Math.min that re- turns its smallest argument.
    We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.
*/

function minimum(a, b) {
    return a > b ? b : a;
}

/*
    Recursion

    We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two.
    Here’s another way to define whether a positive whole number is even or odd:
    • Zero is even.
    • One is odd.
    • For any other number N, its evenness is the same as N - 2.
    Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.
    Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

function isEven(number) {
    if (number === 0) {
        return "Even";
    }

    if (number === 1) {
        return "Odd";
    }

    return isEven(number - 2);
}

/*
    Bean counting

    You can get the Nth character, or letter, from a string by writing "string". charAt(N), similar to how you get its length with "s".length.
    The returned value will be a string containing only one character (for example, "b" ). 
    The first character has position zero, which causes the last one to be found at position string.length - 1.
    In other words, a two-character string has length 2, and its characters have positions 0 and 1.

    Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are
    in the string.
    Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that
    is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

function countBs(string) {
    var number_of_Bs = 0;

    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === 'B') {
            number_of_Bs += 1;
        } 
    }

    return number_of_Bs;
}

function countChar(string, character) {
    var num_of_character_occurrence = 0;

    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === character) {
            num_of_character_occurrence += 1;
        }
    }

    return num_of_character_occurrence;
}
