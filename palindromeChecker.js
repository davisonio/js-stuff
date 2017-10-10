function palindromeChecker(palindrome, i = 0){
    if (palindrome[i] === palindrome[palindrome.length - i - 1]){
        console.log(i + palindrome.length - i - 1);
        if (i === palindrome.length - i - 1) {
            console.log('hi')
        }
        console.log(palindrome[i] + palindrome[palindrome.length - i - 1]);
        palindromeChecker(palindrome, i + 1);
    } else {
        return 'Not a palindrome';
    }
}
console.log(palindromeChecker('tattarrattat'));