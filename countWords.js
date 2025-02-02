
function countWords(str){
    str = str.trim()

    if (str === ""){  // means that the string is empty
        return 0
    }

    let words = str.split(" ")

    let count = 0 

    for(let words of str){  // count only  non empty words
        if (world != ""){
            count++
        }
    }

    return count
}
