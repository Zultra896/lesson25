function med1(arr) {
    let plus = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            plus.push(arr[i]);
        }
    }
    return plus
}

let num = [1, 2, 3, 4, 5, -56, -41, -1, -1, -1, -1, -1, 45, 34, 78]

console.log(med1(num))