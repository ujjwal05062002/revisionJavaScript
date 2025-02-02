function captialiseWords(str){
    let words = str.split(" ")
    for (let i = 0; i<words.length; i++){
        words = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }
    return words.join(" ")
}
