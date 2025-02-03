function countElement(arr){
    let count = {}

    for (let item of arr){
        if (count.item){
            count[item]++
        }
        else {
            count[item] = 1
        }
    }
    return count
}
