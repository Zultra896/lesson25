function fun9(arr) {
    let num = []

    for(let i = 0; i < arr.length; i++) {
        num.push(arr[i] *2)
    }
    return num
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

console.log(fun9(list))