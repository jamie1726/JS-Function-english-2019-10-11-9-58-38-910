function palindrome(message){
    const arrayValues = message.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');
    if(message == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true