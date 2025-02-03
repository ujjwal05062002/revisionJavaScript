function evenOddArray(arr){
    let evenArray = []
    let oddArray = []

    for (let item of arr){
        if (item%2==0){
            evenArray.push(item)
        }
        else{
            oddArray.push(item)
        }
    }
    return {evenArray, oddArray}
}
