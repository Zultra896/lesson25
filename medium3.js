function med3(arr) {
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

let num = [1, 2, 3, 4, 9]

console.log(med3(num)) 