// count occurance of every character 

function removeRepeatedCharacter(str){
    let uniqueCharacter = ""  // storing unique character

    for (char of str){
        if (!uniqueCharacter.includes(char)){
            uniqueCharacter += char;
        }
    }

    return uniqueCharacter;
}
