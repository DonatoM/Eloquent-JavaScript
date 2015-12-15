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
