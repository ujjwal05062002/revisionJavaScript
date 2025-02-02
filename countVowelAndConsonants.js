function countVowelsConsonants(str){
    let vowels = "aeiouAEIOU"
    let lowerCaseVowel = 0
    let upperCaseVowel = 0
    let lowerCaseConsonants = 0
    let upperCaseConsonants = 0

    for (let char of str) {
        if (char  >= 'a' && char <= 'z'){  // checks lower case
            if  (vowels.includes(char)){
                lowerCaseVowel++
            }
            else {
                lowerCaseConsonants ++;
            }
        }

        else if (char >= "A" && char <= "Z"){// checks upper case
            if (vowels.includes(char)){
                upperCaseVowel++
            }
            else {
                upperCaseConsonants++
            }
        }
    }

    return {lowerCaseVowel, upperCaseVowel, lowerCaseConsonants, upperCaseConsonants }
}
