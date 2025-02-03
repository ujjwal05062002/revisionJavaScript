function findElement(arr,target){
    for (let i =0; i<arr.length; i++){
        if (arr[i] === target){
            return (`element found at index ${i}`)
        }
        else{
            return false
        }
    }
}
